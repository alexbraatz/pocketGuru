import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MultiSelect from "react-multi-select-component";
import Select from 'react-select';
import axios from 'axios';

function AddExpenses() {

    const user = useSelector((store) => store.user);
    const dispatch = useDispatch();

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

    const sendExpense = () => {

        let newExpense = {
            guru_id: guruID,
            amount: Number( expenseAmount ),
            description: expenseDescription,
            expense_category: expenseType.value
        }

        dispatch( { type: 'SAVE_EXPENSE', payload: newExpense } )

        axios.post( '/api/expense', newExpense ).then( ( response )=>{
            console.log( 'back from sendExpense POST route:', response );
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
                    <button>Cancel</button>
                    <button onClick={ (event) => sendExpense() }>Submit</button>
                </div>
            </form>
        </div>
    )

}

export default AddExpenses 