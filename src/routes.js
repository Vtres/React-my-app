import React, { useState, useEffect } from 'react';
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
import LoadError from './routes/LoadError';
import { checkToken } from './services/AuthService';
import LognIn from './pages/LognIn';
import AddClient from './pages/AddClient'
import Recovery from './pages/Recovery'
import App from './App';

// import App from './App'
// import ClientList from './pages/ClientList';
// import ClientEdit from './pages/ClientEdit';
// import Perfil from './pages/Perfil';
// import Forum from './pages/Forum';

export default function Routes() {

    const [tokenStatus, setTokenStatus] = useState(1);
    const [token, setToken] = useState('');
    const [idUser, setIdUser] = useState('')

    useEffect(() => {
        setToken(localStorage.getItem("user-token"))
        
        console.log(token)
        checkToken(token).then(res => {
            res.status ? setTokenStatus(2) : setTokenStatus(3)           
        }).catch(err => {
            console.log(err)
            // localStorage.setItem('user-token', false)
            // localStorage.setItem('user-id', false)
            // console.log('catch')
            // setTokenStatus(3)
        })
    }, [token])

    // useEffect(() => {
    //     setToken(localStorage.getItem('user-token'))
    //     setIdUser(localStorage.getItem('user-id'))
    //     // if ((token === "false") || (token === null) || (token === false)) {
    //     //     localStorage.setItem('user-token', false)
    //     //     localStorage.setItem('user-id', false)
    //     //     setTokenStatus(3)
    //     //     console.log('1° if')
    //     // } else {

    //         console.log(token)
    //         console.log(idUser)
    //         checkToken(token).then(res => {
    //             if (res.data.status) {
    //                 setTokenStatus(2)
    //             } else {
    //                 console.log(res.data.status)
    //                 localStorage.setItem('user-token', false)
    //                 localStorage.setItem('user-id', false)
    //                 console.log('else do 2° if');
    //                 setTokenStatus(3)
    //             }
    //         }).catch(err => {
    //             localStorage.setItem('user-token', false)
    //             localStorage.setItem('user-id', false)
    //             console.log('catch')
    //             setTokenStatus(3)
    //         })
    //     // }

    // }, [token])

    if (tokenStatus === 1) {
        console.log(1)
        return (
            <Loading />
        )
    } else if (tokenStatus === 2) {
        console.log(2)

        return (
            <App />
        )
    } else if (tokenStatus === 3) {
        console.log(3)

        return (
            <BrowserRouter>
                <Loading />
                <Switch>
                    <Route exact path="/dashboard" >
                        {localStorage.getItem('user-token') === "false" || localStorage.getItem('user-token') === null ? <Redirect to="/singin" /> : <Redirect to="/dashboard" />}
                    </Route>

                    {/* <LibraryCard /> */}
                    {/* {(() => {
                       if(localStorage.getItem('user-token')){
                        
                        return
                       }
                    })()} */}
                    <Route exact path="/"> <Navbar /> <Home /> </Route>
                    <Route exact path="/singin"><Navbar /> <LognIn /></Route>
                    {/* <Route exact path="/dashboard"><Dashboard /></Route> */}
                    <Route exact path="/addClient"><Navbar /> <AddClient /></Route>
                    <Route exact path="/recovery"><Navbar /> <Recovery /></Route>
                    <Route> <NoMatch /> </Route>
                </Switch>
            </BrowserRouter>
        )
    }
    //  else if (tokenStatus === 4) {
    //     return <LoadError />
    // }

}