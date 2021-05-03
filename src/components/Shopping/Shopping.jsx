import React, { useEffect, useState } from 'react'
import {Doughnut } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import Colors from '../ExpenseColors/ExpenseColors';

import '../MyStyles/mystyles.scss'

function Shopping() {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({ type: 'FETCH_EXPENSES' });
        chart();
    }, []);

    const allExpenses = useSelector(store => store.expenses);
    const user = useSelector((store) => store.user)

    const [chartData, setChartData] = useState({})

    let userExpense = []
    let userDescriptions = []
    let userAmounts = []
    let userTotal = 0

    const getUserInfo = () => {

        allExpenses.map( expense => {
            if( expense.guru_id === user.id && expense.expense_category == "Shopping"){
                userExpense.push( expense );
            }
        })
    
        userExpense.map( expense => {
            userDescriptions.push( expense.description);
            userAmounts.push( expense.amount );
            userTotal += Number( expense.amount );
        })

    }

    getUserInfo();

    const chart = () => {
        dispatch({ type: 'FETCH_EXPENSES' });

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
        <div className="Shopping">
            <Link to={'/shoppingdetails'}>
                <h1 class="button is-large is-fullwidth is-primary is-hovered">Shopping Chart</h1>
            </Link>
            <div class="container is-widescreen" style={{ height: "500px", width: "500px" }}>
                <Doughnut data={chartData} /><br />
                <p class="subtitle is-3">Total Spent on Shopping: ${userTotal.toFixed(2)}</p><br />
            </div>
        </div>
    )
}

export default Shopping;