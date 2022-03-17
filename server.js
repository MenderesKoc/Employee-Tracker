const db = require('./db/connection');
const inquirer = require('inquirer');
const creatTable = require('console.table');

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    user();
});
