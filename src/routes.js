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
import ClientEdit from './pages/ClientEdit';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch';
import Perfil from './pages/Perfil';
import Forum from './pages/Forum';
import LibraryCard from './pages/LibraryCards';

export default function Routes(){
    return(
        <BrowserRouter>
            
            <Switch>
                
                <Route exact path="/"><Navbar /> <Home /> </Route>
                <Route exact path="/clientes"><Navbar /> <ClientList /></Route>
                <Route exact path="/add-cliente"><Navbar /> <ClientForm /></Route>
                <Route exact path="/client-edit"><Navbar /> <ClientEdit /></Route>
                <Route exact path="/dashboard"><Dashboard /> <LibraryCard /> </Route>
                <Route exact path="/perfil"><Dashboard /> <Perfil /></Route>
                <Route exact path="/forum"><Dashboard /> <Forum /></Route> 
                <Route> <NoMatch /> </Route>
            </Switch>
        </BrowserRouter>
        
    )
}