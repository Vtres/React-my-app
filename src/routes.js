import React, { useState, useEffect } from 'react';
import {
    BrowserRouter,
    Switch,
    Route
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
import LoadError from './routes/LoadError';
import { checkToken } from './services/AuthService';
import LognIn from './pages/LognIn';
import AddClient from './pages/AddClient'
import Recovery from './pages/Recovery'
import App from './App'

export default function Routes() {

    const [tokenStatus, setTokenStatus] = useState(1);
    const [token, setToken] = useState('');

    useEffect(() => {
        setToken(localStorage.getItem('user-token'))
        checkToken(token).then(res => {
            res.status ? setTokenStatus(2) : setTokenStatus(3)
        }).catch(err => {
            console.log(err)
            setTokenStatus(4)
        })
    }, [token])

    if (tokenStatus === 1) {
        return <div>oxi</div>
    } else if (tokenStatus === 2) {
        return (
            <App />
        )
    } else if (tokenStatus === 3) {
        return (
            <BrowserRouter>
                <Loading />
                <Switch>
                    {(() => {
                       if(localStorage.getItem('user-token')){
                        <Route exact path="/dashboard" ><Dashboard /> <LibraryCard /> </Route>
                        return
                       }
                    })()}
                    <Route exact path="/"> <Navbar /> <Home /> </Route>
                    <Route exact path="/signIn"><Navbar /> <LognIn /></Route>
                    <Route exact path="/addClient"><Navbar /> <AddClient /></Route>
                    <Route exact path="/recovery"><Navbar /> <Recovery /></Route>
                    <Route> <NoMatch /> </Route>
                </Switch>
            </BrowserRouter>
        )
    } else if (tokenStatus === 4) {
        return <LoadError />
    }
}