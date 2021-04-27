const express = require('express');
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', (req, res) =>{

});

router.post('/', (req, res) => {
    console.log( 'in expense.router POST req.body:', req.body )
    const sqlCmd = `
    INSERT INTO expenses (guru_id, amount, description, expense_category)
    VALUES ($1, $2, $3, $4)
    `
    pool.query( sqlCmd, [ req.body.guru_id, req.body.amount, req.body.description, req.body.expense_category ])
    .then( result => {
        res.sendStatus(201);
    }).catch( error => {
        console.log ( 'in expense.router POST error:', error );
        res.sendStatus(500);
    })
});

module.exports = router