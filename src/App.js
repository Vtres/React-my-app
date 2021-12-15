import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import ClientList from './pages/ClientList';
import Home from './pages/Home';
import Navbar from './Navbar';
import ClientEdit from './pages/ClientEdit';
import Dashboard from './pages/Dashboard';
import NoMatch from './pages/NoMatch';
import Perfil from './pages/Perfil';
import Forum from './pages/Forum';
import LibraryCard from './pages/LibraryCards';
import Loading from './routes/Loading';
import LognIn from './pages/LognIn';
import AddClient from './pages/AddClient'
import Recovery from './pages/Recovery'
import Drawer from './pages/Drawer'

export default function App() {
    console.log('app')
    return (
        <BrowserRouter>
            <Loading />
            <Switch>
                <Route exact path="/singin" >
                    {localStorage.getItem('user-token') === "false" || localStorage.getItem('user-token') === null ? <Redirect to="/singin" /> : <Redirect to="/dashboard" />}
                </Route>
                <Route exact path="/dashboard" exact={true}><Dashboard />  </Route>
                {/* <LibraryCard /> */}
                <Route exact path="/" exact={true}> <Navbar /> <Home /> </Route>
                <Route exact path="/client-edit"><Navbar /> <ClientEdit /></Route>
                <Route exact path="/perfil"><Drawer /> <Perfil /></Route>
                <Route exact path="/forum"><Dashboard /> <Forum /></Route>
                <Route exact path="/clientes"><Navbar /> <ClientList /></Route>
                {/* descomentei a rota de baixo, verificar se nao da B.O */}
                {/* <Route exact path="/singin" exact={true}><Navbar /> <LognIn /></Route>  */}
                <Route exact path="/addClient"><Navbar /> <AddClient /></Route>
                <Route exact path="/recovery"><Navbar /> <Recovery /></Route>
                <Route> <NoMatch /> </Route>

            </Switch>

        </BrowserRouter>

    )
}