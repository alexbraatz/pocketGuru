import React, { useEffect, useState } from 'react'
import {Line} from 'react-chartjs-2'
import './Food.css';

function Food() {
  const [chartData, setChartData] =useState({})

  const chart = () => {
    setChartData({    
      labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
      datasets: [
        {
          label: 'level of thiccness',
          data: [32, 45, 12, 76, 69],
          backgroundColor: [
            'rgba( 75, 192, 192, 0.6)'
          ],
          borderWidth: 4
        }
      ]

    })
  }

  useEffect( ()=> {
    chart()
  }, [] )
  return(
    <div className="Food">
      <h1>Food Chart</h1>
      <div>
        <Line data={chartData}/>
      </div>
    </div>
  )
}

export default Food;