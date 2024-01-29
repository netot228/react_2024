import "./Costs.css";
import CostItem from "./CostItem"


export default function Costs(props){

    const listItems = props.list.map((prop,i) => {
        return(
            <CostItem key={i} data={prop}/>
        )
    });

    return (
        <div className="costs">
            {listItems}
        </div>
    )
}