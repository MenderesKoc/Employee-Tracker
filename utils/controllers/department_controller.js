const db = require('../../db/connection');
const cTable = require('console.table');



function add(value) {

    db.query(
        'INSERT INTO department SET name values(\'' + value + '\')',
        function (err, result) {
            if (err) throw err;
            console.table('Department successfully added.');
        })
}

function update(id, value) {

    db.query("UPDATE department SET name=" + value + " WHERE id =" + id + "", function (err, res) {
        if (err) throw err;
        console.log('Successfuly updated the Department.')
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
        console.log(res)
    });

}

function index() {
    db.query('SELECT * FROM department', function (err, res) {
        if (err) throw err;
        console.table('\nAll Departments:', res);
    });
}


module.exports = { index, get, update, add, remove };