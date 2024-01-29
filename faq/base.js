// компонент как функция - функциональный компонент

    function Welcome(props){
        return <h1>Hello {props.name}!</h1>;
    }

// компонент как класс - классовый компонент

    class Welcome extends React.Component {

        // основное отличие - вызывать метод render() в котором вернуть элемент
        // props-ы живут в this - который передается в параметрах при вызове компонента <Welcome name="Алиса" /> - где props.name = Алиса
        render(){
            return <h1>Hello {this.props.name}</h1>;
        }
    }

// Основные методы ренедринга компонентов в HTML DOM

    // для "захвата" DOM элемента, в который будет рендериться компонент/элемент надо вызывать метод:

    let rootElement = ReactDOM.createRoot(document.getElementById('elementID'));

    // и далее метод рендера, в который будет передан компонент/элемент:

    rootElement.render(<h1>Это просто HTML элемент</h1>);

    rootElement.render(<ComponentName />);
