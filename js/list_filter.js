const list = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Cars", price: "$8229.99", stocked: false, name: "Kia 2010"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Cars", price: "$1199.99", stocked: true, name: "AZLK 2041"},
    {category: "Electronics", price: "$99.99", stocked: false, name: "iPod Touch"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
    {category: "Cars", price: "$12199.99", stocked: true, name: "BMW M7"}
];

/*
    obj=[
        {
            cat: 'name',
            arr: [

            ]
        }
    ]

*/

const root = ReactDOM.createRoot(document.getElementById('root'));

class SearchBar extends React.Component {

    constructor(props){
        super(props);

        this.state = { searchStr: '',  stocked: false};

        this.onChangeHolder = this.onChangeHolder.bind(this);
    }

    onChangeHolder = e =>{
        let stocked, searchStr;
        // debugger;

        if(e.target.type=='checkbox'){
            this.setState({stocked: e.target.checked});
            stocked = e.target.checked;
        } else
        if(e.target.type=='text'){
            // this.setState({searchStr: e.target.value});
            searchStr = e.target.value;
        }
        this.props.searchHolder(searchStr, stocked);
    }

    render() {
        return(
            <>
                <input  type="text"
                        // value={this.state.searchStr}
                        placeholder={this.props.placeholder}
                        onChange={this.onChangeHolder}
                    />
                <div>
                    <input type="checkbox" onChange={this.onChangeHolder} />
                    <span style={{display: 'inline-block',margin: '10px 0 20px 10px'}}>
                        only stocked
                    </span>
                </div>
            </>
        )
    }
}

class ProductRow extends React.Component {

    render() {
        return (
            <p className={this.props.stocked ? 'm_red' : ''} >
                {this.props.name} - {this.props.price}
            </p>
        )
    }

}

class Category extends React.Component {

    render(){
        return <h1>{this.props.name}</h1>
    }
}

class ProductTable extends React.Component {

    render(){

        let list = this.props.list.sort((a,b)=>{
            return a.category > b.category ? 1: -1;
        });

        let rows = [];
        let lastCategory = null;

        list.forEach(el=>{

            if((this.props.stocked && el.stocked) || !this.props.stocked){

                console.log(el.name);

                console.log(this.props.searchStr);

                let reg = new RegExp(this.props.searchStr, 'i');

                if((this.props.searchStr!='' && el.name.match(reg)) || this.props.searchStr=='' )
                {

                    if(el.category!=lastCategory){
                        lastCategory = el.category;
                        rows.push(<Category key={el.category} name={el.category} />);
                    }

                        rows.push(<ProductRow   key={el.name}
                                            name={el.name}
                                            price={el.price}
                                            stocked={el.stocked}
                                            />);
                }
            }

        })

        return(
            <div>
                {rows}
            </div>
        )
    }
}

class ParentBlock extends React.Component {

    constructor(props){
        super(props);

        this.state = {searchStr: '', stocked: false}
    }

    searchHolder = (searchStr, stocked) => {

        this.setState({
            stocked: stocked,
            searchStr: searchStr !== undefined ? searchStr : this.state.searchStr
        })
    }

    render(){

        return (
            <div className="list_filter">
                <SearchBar searchHolder={this.searchHolder} placeholder="search..."/>

                <ProductTable
                    stocked={this.state.stocked}
                    searchStr={this.state.searchStr}
                    list={this.props.list}
                    />
            </div>
        )
    }
}

root.render(<ParentBlock list={list} />)