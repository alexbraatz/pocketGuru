import React from 'react';
import {useSelector} from 'react-redux';

function AddExpenses() {

    const user = useSelector((store) => store.user);

    let guruUser;

    user ? guruUser = user.username : ""

    const capitalize = (name) => {
        return name.charAt(0).toUpperCase() + name.slice(1)
    }

    return(
        <div>
            <h2>Hey, {capitalize(guruUser)}, add your new expenses here!</h2>

            <form>
                <div>

                    <label>
                        Type:

                    </label>
                    
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