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
import Loading from './routes/Loading';
import AddClient from './pages/AddClient'
import Recovery from './pages/Recovery'
import PageClient from './pages/PageClient'
import PageForum from './pages/PageForum'
import PageSearch from './pages/PageSearch'
// import Drawer from './pages/Drawer';
import PageClass from './pages/PageClass';
import PageRooms from './pages/PageRooms';
import PageId from './pages/PageId';
import PageContent from './pages/PageContent'
export default function App() {
    return (
        <BrowserRouter>
            <Loading />
            {/* <Drawer /> */}
            <Switch>
                
                <Route exact path="/singin" >
                    {localStorage.getItem('user-token') === "false" || localStorage.getItem('user-token') === null ? <Redirect to="/singin" /> : <Redirect to="/dashboard" />}
                </Route>
                <Route exact path="/dashboard" exact={true}><Dashboard />  </Route>
                {/* <LibraryCard /> */}
                <Route exact path="/" exact={true}> <Navbar /> <Home /> </Route>
                <Route path="/client-edit"><Navbar /> <ClientEdit /></Route>
                <Route exact path="/perfil"><PageClient /></Route>
                <Route exact path="/forum">< PageForum/></Route>
                <Route exact path="/clientes"><Navbar /> <ClientList /></Route>
                {/* descomentei a rota de baixo, verificar se nao da B.O */}
                {/* <Route exact path="/singin" exact={true}><Navbar /> <LognIn /></Route>  */}
                <Route exact path="/addClient"><Navbar /> <AddClient /></Route>
                <Route exact path="/recovery"><Navbar /> <Recovery /></Route>
                <Route exact path="/searchRoom" > <PageSearch/> </Route>
                <Route exact path="/class" > <PageClass/> </Route>
                <Route path="/content"> <PageContent/> </Route>
                <Route path="/room-id"> <PageId/> </Route>
                <Route exact path="/show-rooms" > <PageRooms/> </Route>

                
                <Route> <NoMatch /> </Route>
                
            </Switch>

        </BrowserRouter>
    )
}