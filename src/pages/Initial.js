import React from 'react';
import '../assets/css/card.css';
export default function Home() {
    return (
        <div className=" card bg-custom-bigcard">
            <div className="row">
                <h2 className="text-center text-dark pt-3">O que você poderá encontrar no nosso site</h2>
            </div>
            <div className="row">
                <div className="info-wrapper">
                    <h2 className="info-circle">Encontre salas para estudar</h2>
                    <h2 className="info-circle">Crie salas e publique seus conteúdos</h2>
                    <h2 className="info-circle">Divulgue suas salas para alunos</h2>
                </div>
            </div>
            <div className="row">
                <div className="info-wrapper">
                    <h2 className="info-circle mb-5">Entre em contato com a comunidade pelo Fórum</h2>
                    <h2 className="info-circle mb-5">Faça download do material deixado pelo professor</h2>
                </div>
            </div>
        </div>
    )
}