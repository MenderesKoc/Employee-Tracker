INSERT INTO department (name)
VALUE ("sales");
INSERT INTO department (name)
VALUE ("Engineering");
INSERT INTO department (name)
VALUE ("Finance");
INSERT INTO department (name)
VALUE ("Legal");

INSERT INTO role (title, salary, department_id)
VALUE ("salesperson", 10000, 1);
INSERT INTO role (title, salary, department_id)
VALUE ("engineer", 20000,2);
INSERT INTO role (title, salary, department_id)
VALUE ("webdeveloper", 30000,2);
INSERT INTO role (title, salary, department_id)
VALUE ("front developer", 40000,2);
INSERT INTO role (title, salary, department_id)
VALUE ("finane manager", 50000,3);
INSERT INTO role (title, salary, department_id)
VALUE ("UI designer", 60000,2);
INSERT INTO role (title, salary, department_id)
VALUE ("Lawyer", 70000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Paris", "Grimes", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Marlon", "Horton", 3,1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Keely", "Carpenter", 7, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Kianna", "Harrison", 1, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Damian", "Moyer", 5, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Sasha", "Glass", 5, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Amir", "Dawson", 4, 2);