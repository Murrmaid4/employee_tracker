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
    department_id INT default 0, -- this needs to be fixed look up foriegn key
    PRIMARY KEY (id)
);
-- ^^creates a table called role with 4 columns
CREATE TABLE employee(

  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT default 0, --same foreign key here 
  manager_id INT default 0, -- and here
  PRIMARY KEY (id)

);
-- creates a table called employee ^^ with 5 columns
