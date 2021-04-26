insert into department(name)
values ("Web Development"),("Engineer"),("Finance"),("Legal"),("HR");

insert into role(title, salary, department_id)
values ("Web Developer", 90000, 1)
,("Junior Developer", 70000, 1)
,("Lead Engineer",150000,2)
,("Software Engineer",120000,2)
,("Accountant",125000,3)
,("Legal Team Lead",250000,4)
,("Lawyer",190000,4)

insert into employee(first_name,last_name,role_id,manager_id)
values ("John","Doe",1,1)
,("Hannah","Montana",2,1)
,("Josie","McCoy",3,NULL)
,("Kevin","Bacon",4,2)
,("Jeff","GoldBlum",5,3)
,("Billie","Lourd",6, NULL)
,("Tom","Allen",7,4)
,("Tammer","Galal",4,2)

insert into manager(first_name,last_name,department_id)
values ("Bill","Nye",1),("Josie","McCoy", 2),("Oprah","Winfrey", 3),("Billie","Lourd",4),("Toby","Flenderson",5);