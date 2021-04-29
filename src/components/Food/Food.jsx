import React, { useEffect, useState } from 'react'
import {Doughnut, Line} from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux';
import Colors from '../ExpenseColors/ExpenseColors';
import './Food.css';

function Food() {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch({ type: 'FETCH_EXPENSES' });
    // userExpenses();
  }, []);

  const allExpenses = useSelector(store => store.expenses);
  const user = useSelector((store) => store.user)

  const [chartData, setChartData] = useState({})

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

  // const chartOptions = {
  //   responsive: true,
  //   title: {text: 'THICCNESS SCALE', display: true},
  //   scales: {
  //     yAxes: [
  //       {
  //         ticks: {
  //           autoSkip: true,
  //           maxTicksLimit: 10,
  //           beginAtZero: true,
  //         },
  //         gridLines: {
  //           display: false,
  //         }
  //       }
  //     ],
  //     xAxes: [
  //       {
  //         gridLines: {
  //           display: false,
  //         }
  //       }
  //     ]
  //   }

  // }

  useEffect( ()=> {
    chart()
  }, [] )

  return(
    <div className="Food">
      <h1>Food Chart</h1>
      <p>{ JSON.stringify(allExpenses)}</p>
      <p>{ JSON.stringify(userExpense)}</p>
      <p>{ JSON.stringify(user)}</p>
      <div style={{height: "500px", width: "500px"}}>
        <Doughnut data={chartData} options={ }/>
        <p>Total Spent on Food: ${userTotal}</p><br />
      </div>
    </div>
  )
}

export default Food;