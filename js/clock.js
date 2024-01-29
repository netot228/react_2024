'use strict';




// фиксируем рутовый компонент куда будем рендерить компонент
    const container = document.getElementById('root');
    const root = ReactDOM.createRoot(container);





// создаем компонент с классом

    // классы компонентов наследуются от React.Component
    class Clock extends React.Component {

        // задаем конструктор
        constructor(props){
            // всегда вверху конструктора вызывать super(props);
                super(props);

            // задаем внутрение состояния компонента,
            // которые изменяются только методом this.setState({el:value})
            // state - это объект со значениями, которые могут меняться внутри компонента
                this.state = {date: new Date()};

            // локальное значение
                this.test = "it's a test";
        }

        // функция, которая будет менять состояние date
            tick(){
                this.setState({date: new Date()});
            }

        // это базовый метод компонента, который вызывается сразу
        // после того как элемент смонтирован в DOM
            componentDidMount(){
                this.timerId = setInterval(()=>{
                    this.tick()
                }, 1000);
            }

        // метод будет вызван, когда компонет будет удален из DOM-а
            componentWillUnmount(){
                clearInterval(this.timerId);
            }


        // функция, которая вызывается прирендеринге компонента
            render(){
                // при возвращении многострокового элемента или выражения
                // следует обернуть его в круглые скобки (...)
                    return (
                        // рендер должен вернуть лишь один родительский элемент
                        // поэтому набор должен быть обернут
                            <div>
                                <h1>{this.state.date.toLocaleTimeString()}</h1>
                                <h2>{this.test}</h2>
                            </div>
                    );
            }

    };

    // метод .render(Компонент) монтирует компонент в DOM
        root.render(<Clock />);
