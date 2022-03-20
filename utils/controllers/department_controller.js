const db = require('../../db/connection');
const cTable = require('console.table');

function add(value) {
    db.query(
        'INSERT INTO department (name) values(\'' + value + '\')',
        function (err, result) {
            if (err) throw err;
            console.table('Department successfully added.');
        })
}

function addrole(value) {
    db.query(
        'INSERT INTO role (title) values(\'' + value + '\')',
        function (err, result) {
            if (err) throw err;
            console.table('New role successfully added.');
        })
}

function update(id, value) {
    db.query("UPDATE department SET name='" + value + "' WHERE id ='" + id + "'", function (err, res) {
        if (err) throw err;
        index()
    });
}

function get(id) {
    db.query("SELECT * FROM department where department_id =" + id, function (err, res) {
        if (err) throw err;
        console.log(res)
    });
}

function remove(id) {
    db.query("DELETE FROM department where id ='" + id + "'", function (err, res) {
        if (err) throw err;
        console.table(res)
    });

}

function index() {
    db.query('SELECT * FROM department', function (err, res) {
        if (err) throw err;
        console.table('\nAll Departments:', res);
    });
}

function viewAllEmployees() {
    db.query(`SELECT e.id AS id, e.first_name AS first_name, e.last_name AS last_name, role.title AS title, department.name AS department, role.salary AS salary, concat(m.first_name, ' ', m.last_name) AS manager
  FROM employee e
  LEFT JOIN role ON e.role_id = role.id 
  LEFT JOIN department on role.department_id = department.id 
  LEFT JOIN employee m ON m.id = e.manager_id`, function (err, res) {

        if (err) throw err;
        console.table(res);
    });
}

module.exports = { index, get, update, add, remove, addrole, viewAllEmployees };