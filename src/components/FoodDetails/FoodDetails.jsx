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
            <Food />
            <h3>Food </h3>
        </>
    )
}

export default FoodDetails;