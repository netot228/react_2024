import "./CostItem.css";
import CostDate from "./CostDate";
import React, {useState} from "react";
import SetNewItemData from "./SetNewItemData"

export default function CostItem(props){

    console.dir(props.data.date);

    const [title, setTitle] = useState(props.data.title);
    const [date, setDate]   = useState(props.data.date);
    const [cost, setCost]   = useState(props.data.cost);

    let [formStyle, setFormStyle] = useState({display: 'none'});
    const formId = '_id_' + Math.floor(Math.random()*10000);

    const setNewData = (e) => {

        e.preventDefault();
        let newTitle = document.getElementById(formId).querySelector('input[name="title"]').value;
        // debugger;
        setTitle(newTitle);
        // let newDate = formId.querySelector('input[name="date"]').value;
        // setTitle(newDate);
        // let newCost = formId.querySelector('input[name="cost"]').value;
        // setTitle(newCost);

        setFormStyle({display: 'none'});
    }

    const showForm = () => {
        setFormStyle({display: 'block'});
    }

    return (
        <div className="cost-item" onClick={showForm}>
            <CostDate date={date} />
            <div className="cost-item__description">
                <h2>{title}</h2>
                <div className="cost-item__price">{cost}</div>
            </div>
            <SetNewItemData id={formId} title={title} date={date} cost={cost} style={formStyle} handler={setNewData} />
        </div>
    )
}