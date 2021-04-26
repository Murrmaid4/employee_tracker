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

insert into employee(first_name,last_name,role_id)
values ("John","Doe",1)
,("Hannah","Montana",2)
,("Josie","McCoy",3)
,("Kevin","Bacon",4)
,("Jeff","GoldBlum",5)
,("Billie","Lourd",6)
,("Tom","Allen",7)
,("Tammer","Galal",4)

insert into manager(first_name,last_name,department_id)
values ("Bill","Nye",1),("Bob","Vance", 2),("Oprah","Winfrey", 3),("Ally","McBeal",4),("Toby","Flenderson",5);