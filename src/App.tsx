import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ChatBot } from './_components';
import {Counter,Hello, Clock, Kitty} from "./_components/oop";
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import { Home } from "./progress";
import './App.css';

class App extends Component<any, any>{
    public render(){
        const wrapperStyle= {
            width: "500px",
            height: "500px",
        }
        const myStyle= {
            display: "inline-block",
            width: "300px",
            height: "300px",
            boder: "1px solid black",
            background: "skyblue",
            margin: "0 auto"
        }

        return  <div style={wrapperStyle}>
            <div style={myStyle}>
            <Router>
                <Link to="/">홈으로</Link> <br/>
                <Link to="/chat">챗봇</Link><br/>
                <Link to="/counter">카운터</Link><br/>
                <Link to="/hello">헬로우</Link><br/>
                <Link to="/clock">시계</Link><br/>
                <Link to="/cat">코조</Link><br/>
                <Route exact path='/chat' component={ChatBot}/>
                <Route exact path='/cat' component={Kitty}/>
                <Route exact path='/clock' component={Clock}/>
                <Route exact path='/counter'><Counter startNumber={0}/></Route>
                <Route exact path='/hello'><Hello name={"홍길동"}/></Route>
            </Router>
            <Home/>
            </div>
        </div>
    }
}
export default App;
