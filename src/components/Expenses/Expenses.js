import './ExpenseItem.css'
import './Expenses.css'
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    const [filterYear, setFilterYear] = useState('all');

    /* MY  Long idea
    const renderElements = (tmpElements) => {
        const renderedElements = [];
        tmpElements.forEach(element => {
            if (parseInt(filterYear) === parseInt(element.date.getFullYear()) || filterYear === 'all' || filterYear === '')
                renderedElements.push(<ExpenseItem key={element.id} title={element.title} amount={element.amount} date={element.date} />)
        });

        return renderedElements;
    };
    */
    const filteredExpenses = props.elements.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear || filterYear==='all';
    });

    const onExpensesFilterHandler = (year) => {
        setFilterYear(year);
    };

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter onExpensesFilter={onExpensesFilterHandler} />
                <ExpensesChart expenses = {filteredExpenses}/>
                <ExpensesList expenses = {filteredExpenses}/>
            </Card>
        </div>

    );
};

export default Expenses;