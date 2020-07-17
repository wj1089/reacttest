import React from "react";
import {Redirect} from 'react-router-dom'
import {Home} from '../progress'
import {ChatBot,Kitty, Clock}from '../_components'
import AdvancedCounter from "../_components/fp/AdvancedCounter";

const routerConfig = [
    { path: '/',exact: true,component: () => <Redirect to="/home"/>},
    { path: '/home', component: Home },
    { path: '/ChatBot', component: ChatBot },
    { path: '/Kitty', component: Kitty },
    { path: '/Clock', component: Clock },
    { path: '/Counter', component: AdvancedCounter },
]
export default routerConfig