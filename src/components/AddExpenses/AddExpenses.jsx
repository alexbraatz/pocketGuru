import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import Select from 'react-select';
import axios from 'axios';

import 'bulma/css/bulma.css'

function AddExpenses() {

    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const history = useHistory();

    let guruUser;
    let guruID;

    if ( user ) {
        guruUser = user.username;
        guruID = user.id;
    }

    const capitalize = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    const [ expenseType, setExpenseType ] = useState( '' );
    const [ expenseAmount, setExpenseAmount ] = useState( 0 )
    const [ expenseDescription, setExpenseDescription ] = useState( '' );

    const typeOptions = [
        { label: 'Food', value: 'Food'},
        { label: 'Shopping', value: 'Shopping'},
        { label: 'Savings', value: 'Savings'},
        { label: 'Loans', value: 'Loans'},
        { label: 'Shelter', value: 'Shelter'},

    ];

    const goBack = () => {
        history.goBack()
    }

    const sendExpense = () => {

        let newExpense = {
            guru_id: guruID,
            amount: Number( expenseAmount ),
            description: expenseDescription,
            expense_category: expenseType.value
        }

        axios.post( '/api/expense', newExpense )
            .then( ( response )=>{

                alert('Success! Expense Added');
                dispatch({ type: 'FETCH_EXPENSES' });

                switch( newExpense.expense_category ) {
                    case 'Food':
                        history.push('/food');
                        break;
                    case 'Shopping':
                        history.push('/shopping');
                        break;
                    case 'Savings':
                        history.push('/savings');
                        break;
                    case 'Loans':
                        history.push('/loans');
                        break;
                    case 'Shelter':
                        history.push('/shelter');
                        break;
                }
                
            }).catch( error => {
                console.log( 'error in sendExpense POST', error );
        })

    }

    return(
        <div>
            <h2>Hey, {guruUser}, add your new expenses here!</h2>

            <form>
                <div>

                    <div>
                        Type:
                        <Select
                            options={ typeOptions }
                            value={ expenseType }
                            onChange={ setExpenseType }
                            labelledBy="Add-Expense-Type"
                        />

                    </div>

                    <label htmlFor="expense">
                        Expense Description:
                        <input 
                            type="text"
                            onChange={(event) => setExpenseDescription(event.target.value)}
                        />
                    </label>

                    <label htmlFor="amount">
                        Amount:
                        <input
                            type="integer"
                            onChange={(event) => setExpenseAmount(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <Link to={'/'}>
                        <button class="button is-link is-outlined">
                    
                                <span>Cancel</span>
                            
                        </button>
                    </Link>
                        <button class="button is-success" onClick={ (event) => sendExpense() }>
                            <span class="icon is-small">
                                <i class="fas fa-check"></i>
                            </span>
                            <span>Save</span>
                        </button>
                </div>
            </form>
        </div>
    )

}

export default AddExpenses 