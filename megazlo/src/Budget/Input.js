import {useState, useEffect, useRef} from 'react';
import s from './AddExpenseForm.module.scss';

export default function Input(props){

    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    useEffect(()=>{
        if(props.submitFlag){
            setInputValue('');
        }
        inputRef.current.className = props.alert && inputRef.current.value==='' ? s.red : '';
    })

    const nameHandler = (e)=>{
        if(inputRef.current.className!==''){
            inputRef.current.className = '';
        }
        setInputValue(e.target.value);
    }

    return (
        <input  className={props.alert ? s.red : ''}
                ref={inputRef}
                type={props.type}
                name={props.name}
                data-check={props.alert}
                value={inputValue}
                onChange={nameHandler}
                onFocus={nameHandler}
                />
    )

}