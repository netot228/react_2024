import s from './AddExpenseForm.module.scss';
import Input from './Input';
import React, {useState} from 'react';


export default function AddExpenseForm(props){

    // console.log('AddExpenseForm');

    let formValue = {};
    let dontSendValue = false;
    let inputAlertFlags = {name: false, cost: false, date: false};
    let inputValuesObj = props.value ? props.value : {name: '', cost: '', date: ''};

    const [inputsAlert, setInputsAlert] = useState(inputAlertFlags);
    const [inputsValue, setInputsValue] = useState(inputValuesObj);
    const [submitFlag, setSubmitFlag] = useState(false);

    const submitHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);

        for( var el of formData.entries()){
            const [key, value] = el;

            if(value === ''){
                setInputsAlert(inputsAlert=>({...inputsAlert, [key]: true}));
                dontSendValue = true;
            }

            formValue[key] = value;
        }

        if(dontSendValue) {
            return;
        }



        props.handler(formValue, e);

        setInputsValue({cost: '', date: '', name: ''});
        setInputsAlert(inputAlertFlags);
        setSubmitFlag(true);

    }

    return (
        <form className={s.form} id="_id_add_expense_form" onSubmit={submitHandler}>
            <div className={s.form_item}>
                <label>Enter the name of expense</label>
                <Input type="text" value={inputsValue.name} submitFlag={submitFlag} name="name" alert={inputsAlert.name}/>
            </div>
            <div className={s.form_item}>
                <label>Enter the cost</label>
                <Input type="number" value={inputsValue.cost} submitFlag={submitFlag} name="cost"  alert={inputsAlert.cost}/>
            </div>
            <div className={s.form_item}>
                <label>Enter the date of expense</label>
                <Input type="date" value={inputsValue.date} submitFlag={submitFlag} name="date"  alert={inputsAlert.date}/>
            </div>
            <input type="submit" value="add" />
        </form>
    )
}