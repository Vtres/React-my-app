import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
import Client from './pages/ClientList';
import Home from './pages/Home';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cliente" component={Client} />
            </Switch>
        </BrowserRouter>
        
    )
}