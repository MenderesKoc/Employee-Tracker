
const inquirer = require('inquirer');
const departmentController = require('../controllers/department_controller');
const cTable = require('console.table');

function viewDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentID',
            message: 'Enter the ID of the department you want to view?',

        }
    ])
        .then(function (answer) {
            departmentController.get(answer.departmentID);
        });
}

function viewAllDepartments() {
    departmentController.index();
}

function viewAllEmployees() {
    departmentController.viewAllEmployees();
}

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'Enter name of the department you want to view?',

        }
    ])
        .then(function (answer) {
            departmentController.add(answer.departmentName);
        });
}

function addrole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'newrole',
            message: 'Enter name of the new role?',

        }
    ])
        .then(function (answer) {
            departmentController.add(answer.newrole);
        });
}

function updateDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentID',
            message: 'Enter the ID of the department you want to update',

        },
        {
            type: 'input',
            name: 'departmentName',
            message: 'Enter a new name for the department you want to update',

        }
    ])
        .then(function (answer) {
            departmentController.update(answer.departmentID, answer.departmentName);
        });
}

function removeDepartment() {
    inquirer.prompt([
        {
            name: 'dept',
            type: 'departmentId',
            message: 'Which department would you like to delete?',

        }
    ]).then(function (answer) {

        departmentController.update(answer.departmentId);
    });
    

}


module.exports = { viewDepartment, viewAllDepartments, addDepartment, updateDepartment, addrole, viewAllEmployees, removeDepartment };