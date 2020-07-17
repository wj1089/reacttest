import React, {Component} from 'react';

export default class extends Component{
    public state= {time:""}

    public tick = () => {
        setInterval(this.tick,1000)
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }
    public render(){
            return <div>
                <h2>현재시간: {this.state.time}</h2>
                <button onClick={this.tick}>눌러라</button>
            </div>

        }
    }