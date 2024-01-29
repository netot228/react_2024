import s from './Expense.module.scss';


export default function ExpenseItem(props){

    return (
        <div className={s.expenseItem}>
            <div className={s.expenseItemDate}>
                {props.date}
            </div>
            <div className={s.expenseItemInfo}>
                <div className={s.expenseItemCost}>
                    {props.cost}
                </div>
                <div className={s.expenseItemName}>
                    {props.name}
                </div>
            </div>
        </div>
    )
}