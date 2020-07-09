import React, {Component} from "react";

interface CounterProps {
    startNumber: number
}
interface CounterState {
    number: number
}
class Counter extends Component<CounterProps, CounterState>{
    [x: string]: any
    public state = {number : 0}
    props: any

    constructor(props: CounterProps) {
        super(props);
        this.state.number = props.startNumber
    }
    public  handleClick =() =>{
        this.setState({
            number: this.state.number +1
        })
    }
    public render() {//여기 관점은 어떨때 props, state를 쓰는지 명확히 알아야한다.
        return <div>
            <h1>{this.state.number}</h1>
            <h1>{this.props.startNumber}</h1>
            <button onClick={this.handleClick}>클 릭</button>
        </div>
    }
}
export  default Counter

