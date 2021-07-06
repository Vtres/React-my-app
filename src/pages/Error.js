import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/css/style.css';

export default function ClientList() {
    return (
        <div className="h-100 w-100 text-center bg-light">
            <div className="cover-container w-100 h-100 p-3 mx-auto flex-colum">
                <div className="mb-auto">
                    <img src={`${process.env.PUBLIC_URL}/image/EstudeAqui.png`} width="300" height="300" alt="logo" />
                    <h2>Opss! Erro 503...</h2>
                    <h3>Não há nada encontrado aqui.</h3>
                    <p>Isso significa que algo não está funcionando bem no nosso sistema.</p>
                    <span>Volte a pagina inicial <NavLink to="/" className="nav-link inline-block">Home</NavLink></span>
                </div>
                
            </div>
        </div>
    )
}
