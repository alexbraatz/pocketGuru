import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import 'bulma/css/bulma.css'

function EditExpense(props) {

    const dispatch = useDispatch();
    const history = useHistory();

    const [ editedExpense, setEditedExpense ] = useState( '' );
    const [ editedAmount, setEditedAmount ] = useState( 0 );

    const sendEditedExpense = () => {

        let expenseEdited = {
            expense_id: props.location.expense.expense_id,
            guru_id: props.location.expense.guru_id,
            amount: editedExpense,
            description: editedAmount
        }

        dispatch( {type: 'EDIT_EXPENSE', payload: expenseEdited});
        dispatch({ type: 'FETCH_EXPENSES' });

        alert('success!')
        
        history.push('/')
    }

    const goBack = () => {
        history.goBack();
    }

    return(
        <>
            <h2>Edit Expense!</h2>

            <div>
                <label htmlFor="editexpense">
                    Edit Expense Description:
                    <input
                        type="text"
                        onChange={ (event)=> setEditedExpense(event.target.value)}
                    />
                </label>

                <label htmlFor="editamount">
                    Edit Amount Total:
                    <input 
                        type="text"
                        onChange={ ( event)=>setEditedAmount(event.target.value)}
                    />
                </label>

                <div>
        
                    <button onClick={ (event) => goBack() }>Cancel</button>
                    <button onClick={ (event) => sendEditedExpense() }>Sumbit</button>
                </div>
            </div>
        </>
    )
}

export default EditExpense;