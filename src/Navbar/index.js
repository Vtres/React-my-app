import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(){
    const [isOpen, setOpen]=useState(false);

    const handleToggle = () =>{
        setOpen(!isOpen)
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
                data-target="#navbar01" aria-controls="navbar01" aria-expanded="false" 
                aria-label="Toggle navigation" onClick={handleToggle}
            >
                <span className="text-white">Menu</span>
            </button>
            <div className={`${isOpen ? 'show': ''} collapse navbar-collapse`} id="navbar01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link" onClick={handleToggle}> Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/clientes" className="nav-link" onClick={handleToggle}> Clientes </NavLink>
                    </li><li className="nav-item">
                        <NavLink to="/add-cliente" className="nav-link" onClick={handleToggle}> Formulário </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}