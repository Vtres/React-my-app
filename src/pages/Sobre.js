import React from 'react';
import '../assets/css/home.css';
export default function Sobre() {
    return (
        <div id="sobre" className="card bg-custom-image pt-5">
            <div className="container">
                <h2 className="text-center">Sobre EstudeAqui</h2>
                <div class="row justify-content-center">
                    <div class="col-lg-5 p-5 ">
                        <p className="card-text">A plataforma Estude Aqui foi desenvolvida para auxíliar
                            seus usuários que buscam informação em um único lugar. Acreditamos nas palavras
                            dita a seguir, um grande inovador.
                        </p>
                        <blockquote className="blockquote mb-0">
                            <p>“As pessoas não sabem o que querem até você mostrar a elas.” </p>
                            <footer className="blockquote-footer">Dito por: <cite title="Source Title">Steve Jobs</cite></footer>
                        </blockquote>
                    </div>
                    <div class="col-lg-5  p-5">
                        <p className="card-text">Com o objetivo de construir e incentivar uma comunidade de
                            estudos onde conhecedores contribuam, publiquem, inovem e compartilhem seus
                            conhecimentos à aqueles que buscam informação.
                        </p>
                        <p className="card-text">A EA busca inspiração e inovação na plataforma, e segue o
                            pensamento das palavras ditas por Nolan!
                        </p>
                        <blockquote className="blockquote mb-0">
                            <p>“Se você contar sua ideia para 10 pessoas e 9 delas disser que você está maluco,
                                provavelmente você está fazendo algo inovador!”  </p>
                            <footer className="blockquote-footer">Dito por: <cite title="Source Title">Nolan Bushnell</cite></footer>
                        </blockquote>
                    </div>
                </div>
        
            </div>
        </div>
    )
}