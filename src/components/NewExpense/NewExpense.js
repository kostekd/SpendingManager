import ExpenseForm from './ExpenseForm';
import ExpenseFormEnter from './ExpenseFormEnter';
import './NewExpense.css'
import { useState } from 'react';

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const onClickShowFormHandler = (showFromState) => {
        setShowForm(showFromState);
    }

    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onSaveNewExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            {showForm === false ?
                (<ExpenseFormEnter onClickShowForm={onClickShowFormHandler} />)
                : (<ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onClickShowForm={onClickShowFormHandler} />)}
        </div>
    );
};

export default NewExpense;