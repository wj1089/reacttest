import React,{Component} from "react";

interface HelloProps {
    name : ""
}
class Hello extends Component<HelloProps>{

    public state ={name:"",hello:""}
    props: any

    constructor(props: HelloProps) {
        super(props);
        this.state.name = props.name
    }
    public handleClick =()=>{
        this.setState({
            name: this.state.name,
            hello:"안녕"
        })
    }
    public render() {
        return <div>
            <h1>{this.state.hello}{this.state.name}</h1>
            <h1>{this.props.name}</h1>
            <button onClick={this.handleClick}>클 릭</button>
        </div>
    }
}
export  default Hello