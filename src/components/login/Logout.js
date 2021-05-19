import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout, loginAdmin } from '../../actions/authAction';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";


export const Logout = () => {
    const dispatch = useDispatch();
    dispatch(logout());
    return (
        <Redirect to="/"/>
    )
}

export default Logout
