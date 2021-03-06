import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/style.css'

export default function Navbar() {
    const [isOpen, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!isOpen)
    }

    const doeg = () =>{
        console.log(localStorage)
    }

    return (
        
        <nav className="p-1 bg-custom text-white">
            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3" >
                    <NavLink to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <img alt="EstudeAqui" src={`${process.env.PUBLIC_URL}/image/oi.png`} width="auto" height="59px" />
                        {/* <span class="fs-4">EstudeAqui</span> */}
                    </NavLink>
                
                    <ul className="nav nav-pills">
                        <NavLink to="/singin" className="nav-link text-white mt-2"  > Entrar/Cadastrar </NavLink>   

                        {/* <li className="nav-item">
                            <NavLink to="/clientes" className="nav-link text-white mt-2" onClick={handleToggle}> Clientes </NavLink>
                        </li> */}
                        {/* <li className="nav-item">
                            {/* <NavLink to="/singin" className="nav-link text-white mt-2"  > Entrar/Cadastrar </NavLink>    */}
                            {/* {localStorage.getItem('user-token') 
                                ? <NavLink to="/dashboard" className="nav-link text-white mt-2" onClick={doeg}> Entrar/Cadastrar </NavLink>
                                : <NavLink to="/singin" className="nav-link text-white mt-2" onClick={doeg}> Entrar/Cadastrar </NavLink>
                            } */}
                        {/* </li> */}
                        <li className="nav-item"><a href="/#sobre" className="nav-link text-white mt-2">Sobre</a></li>
                        <li className="nav-item"><a href="/#loc" className="nav-link text-white mt-2">Localiza????o</a></li>
                    </ul>
                </header>
            </div>
        </nav>
    )
}