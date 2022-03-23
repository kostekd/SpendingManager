import React from 'react';

import Chart from '../Chart/Chart'

const ExpensesChart = (props) => {
    console.log(props.expenses);
    const chartDataPoint = [
        {label: 'Jan', value : 0},
        {label: 'Feb', value : 0},
        {label: 'Mar', value : 0},
        {label: 'Apr', value : 0},
        {label: 'May', value : 0},
        {label: 'Jun', value : 0},
        {label: 'Jul', value : 0},
        {label: 'Aug', value : 0},
        {label: 'Sep', value : 0},
        {label: 'Oct', value : 0},
        {label: 'Nov', value : 0},
        {label: 'Dec', value : 0},
    ];

    props.expenses.forEach(element => {
        const expenseMonth = element.date.getMonth(); //returns index of month 0 = January
        chartDataPoint[expenseMonth].value += element.amount;
    });

    return (
        <Chart dataPoints={chartDataPoint}/>
    );
}


export default ExpensesChart;