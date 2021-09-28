import React from 'react';
import { FaWindowClose } from 'react-icons/fa';
import '../assets/css/pageError.css';
export default function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 pageError">
                    <FaWindowClose className="icon" />
                    <h2>Página não encontrada</h2>
                    <a href="/">volte a página inicial</a>
                </div>
            </div>
        </div>
    )
}