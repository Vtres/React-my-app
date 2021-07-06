import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
import ClientList from './pages/ClientList';
import Home from './pages/Home';
import Navbar from './Navbar';
import ClientForm from './pages/ClientForm';

export default function Routes(){
    return(
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/clientes" component={ClientList} />
                <Route exact path="/add-cliente" component={ClientForm} />
            </Switch>
        </BrowserRouter>
        
    )
}