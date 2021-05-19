import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import {useSelector} from 'react-redux'

import React from 'react'

export const VerifyAuth = ({children})=>{
    const isAdmin = useSelector((state)=>state.Auth.isAdmin);
    console.log(isAdmin)
    return isAdmin ? children : <Redirect to="/404"/>
}
