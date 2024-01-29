import ExpenseItem from "./ExpenseItem";
import s from "./ExpenseList.module.scss";

export default function ExpenseList(props){

    console.dir(props);
    const expenseItems = props.expenses.map(item=> {



        return <ExpenseItem date={item.date}
                            name={item.name}
                            cost={item.cost}
                            key={item.id.toString()}
                            />;
    })

    return (
        <div className={s.expenseList}>
            {expenseItems}
        </div>
    )
}