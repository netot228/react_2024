import Costs from "./Costs"

const costsArr = [
    {
        date: new Date(2021,2,12),
        title: 'fridge',
        cost: '$1000'
    },
    {
        date: new Date(2021,3,14),
        title: 'macbook',
        cost: '$2000'
    },
    {
        date: new Date(2021,11,22),
        title: 'jeans',
        cost: '$150'
    }
]

export default function Budget() {

    return (
        <>
            <h1>Hello world</h1>
            <Costs list={costsArr}/>
        </>
    )

}