import React, { useState, useEffect } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Home from './pages/Home';
import Navbar from './Navbar';
import NoMatch from './pages/NoMatch';
import Loading from './routes/Loading';
import LoadError from './routes/LoadError';
import { checkToken } from './services/AuthService';
import LognIn from './pages/LognIn';
import AddClient from './pages/AddClient'
import Recovery from './pages/Recovery'
import App from './App';

export default function Routes() {

    const [tokenStatus, setTokenStatus] = useState(1);
    const [token, setToken] = useState('');
    // const [idUser, setIdUser] = useState('')

    useEffect(() => {
        setToken(localStorage.getItem("user-token"))
        
        console.log(token)
        checkToken(token).then(res => {
            if(res.status_token){
                setTokenStatus(2)
            }else{
                setTokenStatus(3)
            }  
        }).catch(err => {
            console.log(err)
            setTokenStatus(4)
        })
    }, [token])

    if (tokenStatus === 1) {
        return (
            <Loading />
        )
    } else if (tokenStatus === 2) {
        return (
            <App />
        )
    } else if (tokenStatus === 3) {
        return (
            <BrowserRouter>
                <Loading />
                <Switch>
                    <Route exact path="/dashboard" >
                        {localStorage.getItem('user-token') === "false" || localStorage.getItem('user-token') === null ? <Redirect to="/singin" /> : <Redirect to="/dashboard" />}
                    </Route>
                    <Route exact path="/"> <Navbar /> <Home /> </Route>
                    <Route exact path="/singin"><Navbar /> <LognIn /></Route>
                    <Route exact path="/addClient"><Navbar /> <AddClient /></Route>
                    <Route exact path="/recovery"><Navbar /> <Recovery /></Route>
                    <Route> <NoMatch /> </Route>
                </Switch>
            </BrowserRouter>
        )
    }else if (tokenStatus === 4) {
        return <LoadError />
    }

}