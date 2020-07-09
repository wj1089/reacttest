import React from 'react';
// @ts-ignore
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home, ChatBot } from './components';
import {Counter,Hello, Clock, Kitty} from "./oop";
import './App.css';

class App extends React.Component<any, any> {
      public render() {
            return <Router>
                    <Link to="/">홈으로</Link> <br/>
                    <Link to="/HomePage">홈페이지</Link> <br/>
                    <Link to="/chat">챗봇</Link><br/>
                    <Link to="/Counter">카운터</Link><br/>
                    <Link to="/Hello">헬로우</Link><br/>
                    <Link to="/Clock">시계</Link><br/>
                    <Link to="/Kitty">키티</Link><br/>


                <Route exact path='/' component={Home}/>
                <Route exact path='/chat' component={ChatBot}/>
                <Route exact path='/Clock' component={Clock}/>
                <Route exact path='/Kitty' component={Kitty}/>

                <Route exact path='/Counter'><Counter startNumber={0}/></Route>
                <Route exact path='/Hello'><Hello name ={"홍길동"}/></Route>

            </Router>
      }
}
export default App;