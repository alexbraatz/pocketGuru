import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'

function Loans() {
    const [chartData, setChartData] = useState({})

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
                    fill: true,
                    borderWidth: 4
                }
            ]

        })
    }

    const chartOptions = {
        responsive: true,
        title: { text: 'THICCNESS SCALE', display: true },
        scales: {
            yAxes: [
                {
                    ticks: {
                        autoSkip: true,
                        maxTicksLimit: 10,
                        beginAtZero: true,
                    },
                    gridLines: {
                        display: false,
                    }
                }
            ],
            xAxes: [
                {
                    gridLines: {
                        display: false,
                    }
                }
            ]
        }

    }

    useEffect(() => {
        chart()
    }, [])

    return (
        <div className="Loans">
            <h1>Loans Chart</h1>
            <div style={{ height: "500px", width: "500px" }}>
                <Line data={chartData} options={{ title: { text: 'THICCNESS SCALE', display: true } }} />
            </div>
        </div>
    )
}

export default Loans;