const db = require('./db/connection');
const inquirer = require('inquirer');
const department = require('./utils/models/department.js');
const cTable = require('console.table');

inquirer.prompt([
    {
        name: 'choices',
        type: 'list',
        message: 'What would you like to do:',
        choices: [
            'View all Departments',
            'View Departments',
            'Add Department',
            'Update Department',
            'Add Role',
            'Add Employee',
            'View all employee',
            'Remove Department',
            'Exit'
        ]
    }
])
    .then(questions => {
        switch (questions.choices) {
            case "View all Departments":
                department.viewAllDepartments();
                break;

            case "View Departments":
                department.viewDepartment();
                break;

            case
                "Add Department":
                department.addDepartment();
                break;

            case "Update Department":
                department.updateDepartment();
                break;

            case "Add Role":
                department.addrole();
                break;

            case "Update Employee Role":
                department.updateEmployee();
                break;
            case "View all employee":
                department.viewAllEmployees();
                break;

            case "Remove Department":
                department.removeDepartment();
                break;

            case 'Exit': console.log('Goodbye')
                db.end();
                break;
        }
    });