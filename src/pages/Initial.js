import React from 'react';
import '../assets/css/card.css';
export default function Home() {
    return (
        <div className="card bg-custom-bigcard">
            <div className="row">
                <h2 className="text-center text-dark pt-3">O que você poderá encontrar no nosso site</h2>
            </div>
            <div className="row">
                <div className="info-wrapper">
                    <div className="info-circle mb-2 mt-5">
                        <img src={`${process.env.PUBLIC_URL}/image/_123022.png`} alt="forum" width="65" height="65" />
                        <h3 >Encontre salas para estudar</h3>
                    </div>
                    <div className="info-circle mb-2 mt-5">
                        <img src={`${process.env.PUBLIC_URL}/image/_123034.png`} alt="forum" width="65" height="65" />
                        <h3 >Crie salas e publique seus conteúdos</h3>
                    </div>
                    <div className="info-circle mb-2 mt-5">
                        <img src={`${process.env.PUBLIC_URL}/image/_123037.png`} alt="forum" width="65" height="65" />
                        <h3 >Divulgue suas salas para alunos</h3>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="info-wrapper">
                    <div className="info-circle mb-2 mt-5">
                        <img src={`${process.env.PUBLIC_URL}/image/_123045.png`} alt="forum" width="65" height="65" />
                        <h3 >Entre em contato com a comunidade pelo Fórum</h3>
                    </div>
                    <div className="info-circle mb-2 mt-5">
                        <img src={`${process.env.PUBLIC_URL}/image/_123048.png`} alt="forum" width="65" height="65" />
                        <h3 >Faça download do material deixado pelo professor</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}