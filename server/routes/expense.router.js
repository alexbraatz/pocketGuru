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

router.post('/expense', (req, res) => {
    console.log( 'in expense.router POST req.body:', req.body )
    const sqlCmd = `
    INSERT INTO expenses (guru_id, amount, description, expense_category)
    VALUES ($1, $2, $3, $4) RETURNING id
    `
});

module.exports = router