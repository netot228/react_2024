const root = ReactDOM.createRoot(document.getElementById('root'));

const Example = (prosp)=>{
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>You clicked {count} times</h1>
            <button onClick={setCount(++count)}>more clicked</button>
        </>
    )
}

root.render(<Example/>)