import { useSelector } from 'react-redux';

import Food from '../Food/Food';
import Capitalize from '../Capitalize/Capitalize';

function FoodDetails() {

    const allExpenses = useSelector(store => store.expenses);
    const user = useSelector((store) => store.user)

    let userExpense = []
    let userDescriptions = []
    let userAmounts = []
    let userTotal = 0

    allExpenses.map( expense => {
        if( expense.guru_id === user.id && expense.expense_category == "Food"){
        userExpense.push( expense );
        }
    })

    userExpense.map( expense => {
        userDescriptions.push( expense.description);
        userAmounts.push( expense.amount );
        userTotal += expense.amount
    })

    return (
        <>  
            <h2>{Capitalize(user.username)}'s Food Expenses</h2>
            <Food /><br />
            <h3>Food Details By Expense:</h3>
            <p>{JSON.stringify(userExpense)}</p>
            <table>
                <thead>
                    <tr>
                        <th>Expense</th>
                        <th>Amount</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {userExpense.map( ( expense )=>{
                        return (
                            <>
                                <tr key={ expense.id }>
                                    <td>{ expense.description }</td>
                                    <td>${ expense.amount}</td>
                                    <td><button>Edit</button></td>
                                    <td><button>Delete</button></td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default FoodDetails;