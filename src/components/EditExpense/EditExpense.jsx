import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function EditExpense(props) {

    const [ editedExpense, setEditedExpense ] = useState( '' );
    const [ editedAmount, setEditedAmount ] = useState( 0 );

    return(
        <>
            <h2>Edit Expense!</h2>
            <p>{JSON.stringify(props.location.expense)}</p>

            <div>
                <label htmlFor="editexpense">
                    Edit Expense Description:
                    <input
                        type="text"
                        onChange={ (event)=> setEditedAmount(event.target.value)}
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
                    <Link to={'/'}>
                        <button>Cancel</button>
                    </Link>
                    <button>Sumbit</button>
                </div>
            </div>
        </>
    )
}

export default EditExpense;