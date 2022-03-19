const db = require('./db/connection');
const inquirer = require('inquirer');
const department = require('./utils/models/department.js');

inquirer.prompt([
    {
        name: 'choices',
        type: 'list',
        message: 'What would you like to do:',
        choices: [
            'View Departments',
            'View Roles',
            'View Employees',
            'Add Department',
            'Add Role',
            'Add Employee',
            'Update Employee Role',
            'Exit'
        ]
    }
])
    .then(questions => {
        switch (questions.choices) {
            case "View Departments":
                department.viewAllDepartments();
                break;
                "View Roles":
                viewRoles();
                break;
            case "View Employees":
                add.viewEmployees();
                break;
            case "Add Department":
                add.addDepartment();
                break;
            case "Add Role":
                add.addRole();
                break;
            case "Add Employee":
                add.addEmployee();
                break;
            case "Update Employee Role":
                updated.updateEmployeeRole();
                break;* /
            case 'Exit': console.log('Goodbye')
                db.end();
                break;
        }
    });