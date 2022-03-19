
const inquirer = require('inquirer');
const departmentController = require('../controllers/department_controller');



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
function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'Enter the ID of the department you want to view?',

        }
    ])
        .then(function (answer) {
            departmentController.add(answer.departmentName);
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


module.exports = { viewDepartment, viewAllDepartments, addDepartment, updateDepartment };