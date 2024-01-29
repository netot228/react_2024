// import s from './Budget.module.css';
import AddExpenseForm from "./AddExpenseForm";
import Chart from "./Chart";
import ExpenseList from "./ExpenseList";
import {useState} from 'react';

import expensesArr from './expensesArr';

import s from './Budget.module.scss';

export default function Budget(props){

    let [expenses, setExpenses] = useState(expensesArr);

    const addExpense = (data, event) =>{
        setExpenses(()=>{
            return expenses.push(data);
        })

        console.log('addExpense');
        console.dir(data);

        console.log('event');
        console.dir(event);

        // event.target.reset();

    }

    return (
        <div className={s.budgetWrapper}>
            <AddExpenseForm handler={addExpense}/>
            <Chart expenses={expenses}/>
            <ExpenseList  expenses={expenses}/>
        </div>
    )
}