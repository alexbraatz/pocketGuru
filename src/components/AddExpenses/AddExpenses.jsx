import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import MultiSelect from "react-multi-select-component";
import Select from 'react-select';

function AddExpenses() {

    const user = useSelector((store) => store.user);

    let guruUser;
    let guruID;

    user ? guruUser = user.username : ""

    const capitalize = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    const [ expenseType, setExpenseType ] = useState( '' );

    const typeOptions = [
        { label: 'Food', value: 'Food'},
        { label: 'Shopping', value: 'Shopping'},
        { label: 'Savings', value: 'Savings'},
        { label: 'Loans', value: 'Loans'},
        { label: 'Shelter', value: 'Shelter'},

    ];

    return(
        <div>
            <h2>Hey, {capitalize(guruUser)}, add your new expenses here!</h2>

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
                        Expense:
                        <input 
                            type="text"
                        />
                    </label>

                    <label htmlFor="amount">
                        Amount:
                        <input
                            type="integer"
                        />
                    </label>
                </div>
                <div>
                    <button>Cancel</button>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )

}

export default AddExpenses 