import "./CostDate.css";
export default function CostDate(props){

    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('ru-RU',{month:'long'});
    const day = props.date.getDate();

    return (
        <div className="cost-date">
            <div className="cost-date__month">{month}</div>
            <div className="cost-date__year">{year}</div>
            <div className="cost-date__day">{day}</div>
        </div>
    )

}