
export default function SetNewItemData(props){
    let year = props.date.getFullYear();
    let month = props.date.getMonth('ru-RU',{month:'long'});
    month = month < 10 ? '0'+month : month;
    let day = props.date.getDate();
    let dateValue = `${year}-${month}-${day}`;


    return (
        <form id={props.id} onSubmit={props.handler} style={props.style}>
            <input name="date" type="date" />
            <input name="title" type="title" />
            <input name="cost" type="cost" />
            <input type="submit" value="ok" />
        </form>
    )
}