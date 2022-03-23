import './ExpenseForm.css'
import './ExpenseFormEnter.css'

const ExpenseFormEnter = (props) => {

    const onClickHandler = () => {
        props.onClickShowForm(true);
    }

    return (
        <div>
            <div className='new-expense-enter__controls'>
                <button onClick={onClickHandler}>Add ExpenseDate</button>
            </div>
        </div>
    );
};

export default ExpenseFormEnter;