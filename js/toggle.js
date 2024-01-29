"use strict"

    const root = ReactDOM.createRoot(document.getElementById('root'));

    class ToggleBtn extends React.Component {

        constructor(props){
            super(props);

            this.state = {laserIsActive: false};

            // this.activateLaser = this.activateLaser.bind(this);
        }

        // activateLaser(){
        //     this.setState({
        //         laserIsActive: this.state.laserIsActive ? false : true
        //     })
        // }

        activateLaser = () => {
            this.setState({
                laserIsActive: this.state.laserIsActive ? false : true
            })
        }

        render(){
            return (
                <button onClick={this.activateLaser}>
                    {this.state.laserIsActive ? 'Выключить лазеры' : 'Активировать лазеры'}
                </button>
            )
        }


    }

    root.render(<ToggleBtn/>);
