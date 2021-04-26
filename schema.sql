DROP DATABASE IF EXISTS employer_DB;
CREATE DATABASE employer_DB;
-- this is needed to create the DB in dbeaver
USE employer_DB;
-- ^^must have to make changes to a specific DB

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);
-- ^^ this creates a table called dept with 2 columns named id and name

CREATE TABLE role(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
);
-- ^^creates a table called role with 4 columns
CREATE TABLE employee(

  id INT NOT NULL AUTO_INCREMENT default 0,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT NULL, 
  PRIMARY KEY (id),
   FOREIGN KEY (role_id) REFERENCES role(id)
  FOREIGN KEY (manager_id) REFERENCES manager(id)
);
-- creates a table called employee ^^ with 5 columns
CREATE TABLE manager(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  department_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id) REFERENCES department(id)
)