import { useSelector, useDispatch } from 'react-redux';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Loans from '../Loans/Loans';
import Capitalize from '../Capitalize/Capitalize';
import axios from 'axios';

import 'bulma/css/bulma.css'

function LoanDetails() {

    const allExpenses = useSelector(store => store.expenses);
    const user = useSelector((store) => store.user)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({type: 'FETCH_EXPENSES'});
    },[]);

    let userExpense = []
    let userDescriptions = []
    let userAmounts = []
    let userTotal = 0

    allExpenses.map( expense => {
        if( expense.guru_id === user.id && expense.expense_category == "Loans"){
        userExpense.push( expense );
        }
    })

    userExpense.map( expense => {
        userDescriptions.push( expense.description);
        userAmounts.push( expense.amount );
        userTotal += expense.amount
    })

    const deleteExpense = ( expenseID ) => {

        let expenseToDelete={
            guru_id: user.id,
            expense_id: expenseID
        }

        axios.delete('/api/expense', { data: expenseToDelete })
            .then( response => {
                console.log( 'in axios delete, response.data:', response );
                if( response.data != null){
                    alert('Expense delete successfully.');
                    dispatch({ type: 'FETCH_EXPENSES' });
                }
            }).catch( error => {
                res.sendStatus(500);
        })

    }

    return (
        <>  
            <h2>{Capitalize(user.username)}'s Outstanding Loans</h2>
            <Loans /><br />
            <h3>Loan Details By Source:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Loan</th>
                        <th>Amount</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {userExpense.map( ( expense, i )=>{
                        return (
                            <>
                                <tr key={ i }>
                                    <td>{ expense.description }</td>
                                    <td> ${ expense.amount}</td>
                                    <td><Link to={ { pathname: '/editexpense', expense: expense } }>
                                        <button class="button is-info">Edit</button></Link></td>
                                    <td>
                                        <button class="button is-danger is-outlined" onClick={ (event) => deleteExpense(expense.expense_id)}>
                                        <span>Delete</span>
                                        <span class="icon is-small">
                                            <i class="fas fa-times"></i>
                                            </span>
                                        </button>
                                    </td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default LoanDetails;