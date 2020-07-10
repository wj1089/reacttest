import React from "react";
import {Redirect} from 'react-router-dom'
import {Home} from '../pages'
import {ChatBot,Kitty, Clock}from '../components'
import AdvancedCounter from "../components/fn/AdvancedCounter";

const routerConfig = [
    { path: '/',exact: true,component: () => <Redirect to="/home"/>},
    { path: '/home', component: Home },
    { path: '/ChatBot', component: ChatBot },
    { path: '/Kitty', component: Kitty },
    { path: '/Clock', component: Clock },
    { path: '/Counter', component: AdvancedCounter },
]
export default routerConfig