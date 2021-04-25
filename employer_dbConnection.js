const inquirer = require("inquirer");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "employer_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connection ID", connection.threadId);
  start();
});

const start = () => {
  inquirer
    .prompt({
      name: "startMenu",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View All Employees",
        "View All Departments",
        "View All Roles",
        "Add an Employee",
        "Add Department",
        "Add Role",
        "Update Employee Role",
        "Update Employee Manager",
        "View All Employees by Manager",
        "Remove Employee",
        "Remove Department",
        "Remove a Role",
        "View Department Budgets",
        "Exit",
      ],
    })
    .then((answer) => {
      switch (answer.startMenu) {
        case "View All Employees":
          viewEmp();
          break;

        case "View All Departments":
          viewDepartments();
          break;

        case "View All Roles":
          viewRoles();
          break;

        case "Add an Employee":
          break;

        case "Add Department":
          addDepartment();

          break;

        case "Add Role":
          addRole();
          break;

        case "Update Employee Role":
          break;
        case "Update Employee Manager":
          break;
        case "Update Employee Role":
          break;

        case "Exit":
          connection.end();
          console.log("Have a Great Day!");
          break;

        default:
          break;
      }
    });
};

function viewEmp() {
  connection.query("Select * from employee", function (err, data) {
    console.table(data);
    start();
  });
}

function viewDepartments() {
  connection.query("Select * from department", function (err, data) {
    console.table(data);
    start();
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Name of department you would like to add?",
        name: "addDept",
      },
    ])
    .then(function (answer) {
      connection.query(
        "Insert Into department(name)values(?)",
        answer.addDept,
        function (err, data) {
          console.log("Department has been Added.");
          start();
        }
      );
    });
}

function viewRoles() {
  connection.query("Select * from role", function (err, data) {
    console.table(data);
    start();
  });
}

function addRole() {
  connection.query("select * from department", function (err, departmentData) {
    const departments = departmentData.map((department) => {
      return {
        name: department.name,
        value: department.id,
      };
    });
    inquirer
      .prompt([
        {
          type: "input",
          message: "Name of role you would like to add?",
          name: "addRole",
        },
        {
          type: "input",
          message: "What is the salary for this role?",
          name: "roleSal",
        },
        {
          type: "list",
          message: "Select which department this role falls under",
          name: "deptID",
          choices: departments,
        },
      ])
      .then(function (answer) {
        console.log(answer.addRole, answer.roleSal, answer.deptID);
        connection.query(
          "Insert Into role(title, salary, department_id)values(?,?,?)",
          [answer.addRole, answer.roleSal, answer.deptID],
          function (err, data) {
            console.log("Role has been Added.");
            start();
          }
        );
      });
  });
}
