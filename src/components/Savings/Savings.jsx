import React, { useEffect, useState } from 'react'
import {Doughnut } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import Colors from '../ExpenseColors/ExpenseColors';
import '../MyStyles/mystyles.scss'

function Savings() {

    const dispatch = useDispatch();

    useEffect(()=>{
        chart()
        dispatch({ type: 'FETCH_EXPENSES' });
    }, []);

    const allExpenses = useSelector(store => store.expenses);
    const user = useSelector((store) => store.user)

    const [chartData, setChartData] = useState({})

    let userExpense = []
    let userDescriptions = []
    let userAmounts = []
    let userTotal = 0

    allExpenses.map( expense => {
        if( expense.guru_id === user.id && expense.expense_category == "Savings"){
            userExpense.push( expense );
        }
    })
    
    userExpense.map( expense => {
        userDescriptions.push( expense.description);
        userAmounts.push( expense.amount );
        userTotal += Number( expense.amount );
    })

    const chart = () => {
        setChartData({
            labels: userDescriptions,
            datasets: [
                {
                    label: 'level of thiccness',
                    data: userAmounts,
                    backgroundColor: Colors,
                    fill: true,
                    borderWidth: 4
                }
            ]

        })
    }

    return (
        <div className="Savings">
            <Link to={'/savingsdetails'}>
                <h1 class="button is-large is-fullwidth is-primary is-hovered">Savings Chart</h1>
            </Link>
            <div class="container is-widescreen" style={{ height: "500px", width: "500px" }}>
                <Doughnut data={chartData} /><br />
                <p class="subtitle is-3">Total In Savings: ${userTotal.toFixed(2)}</p><br />
            </div>
        </div>
    )
}

export default Savings;