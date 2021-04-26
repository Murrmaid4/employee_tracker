const inquirer = require("inquirer");
const mysql = require("mysql");
//brings in the node modules ^^

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
//connects to mySql database in Dbeaver ^^
connection.connect(function (err) {
  if (err) throw err;
  console.log("Connection ID", connection.threadId);
  start();
});
//when the connection is inacted begin the start function

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
      //this is the initial question that allows users to navigate through the command line
    })
    .then((answer) => {
        //this switch statement acts as an if/else, allows for certain functions to run when that choice is selected from the start menu
        switch (answer.startMenu) {
            //answer.startmenu allows the switch statement to match to the strings in the start menu above
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
            addEmp();
          break;

        case "Add Department":
          addDepartment();

          break;

        case "Add Role":
          addRole();
          break;

        case "Update Employee Role":
          updateRole();
          break;

        case "Update Employee Manager":
          break;

        case "View All Employees by Manager":
          break;

        case "Remove Employee":
          break;

          case "Remove Department":
          break;

          case "Remove a Role":
          break;

          case "View Department Budgets":
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

function addEmp() {connection.query("select * from role", function (err, roleData) {
    const roles = roleData.map((role) => {
      return {
        name: role.title,
        value: role.id,
      };
    });
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the First Name of the New Employee?",
          name: "firstName",
        },
        {
            type: "input",
            message: "What is the Last Name of the New Employee?",
            name: "lastName",
        },
        {
          type: "list",
          message: "Select this employee's role",
          name: "roleID",
          choices: roles,
        },
      ])
      .then(function (answer) {
       
        connection.query(
          "Insert Into employee(first_name, last_name, role_id)values(?,?,?)",
          [answer.firstName, answer.lastName, answer.roleID],
          function (err, data) {
            console.log("Employee has been Added.");
            start();
          }
        );
      });
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
