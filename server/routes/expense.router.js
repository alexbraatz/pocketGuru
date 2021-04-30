const express = require('express');
const pool = require('../modules/pool');
const {
    rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', (req, res) =>{

    const sqlCmd = `SELECT * FROM expenses`;
    pool.query(sqlCmd)
        .then( result => {
            res.send( result.rows );
        })
        .catch( error => {
            console.log( 'Error in GET expenses', error );
            res.sendStatus(500)
        })

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

router.delete('/', (req, res)=> {
    console.log( 'in expense.router DELETE req.body:', req.body )
    const sqlCmd = `DELETE FROM expenses WHERE guru_id = $1 AND expense_id = $2`
    pool.query( sqlCmd, [ req.body.guru_id, req.body.expense_id])
    .then( result => {
        res.sendStatus(201);
    }).catch( error => {
        console.log( 'in expense.router DELETE error:', error );
        res.sendStatus (500);
    })
})

module.exports = router