import React from 'react';
import Iframe from 'react-iframe';
import '../assets/css/localization.css';
import Footer from './Footer';
export default function Localization() {
    return (
        <div className="card bg-img-back" id="loc">

            <div className="p-5">
                <h2 className="text-center mt-2">Localização</h2>
                <div className="row p-4">
                    <div className="col-lg-6 depoimento">
                        <p className="text-center">Venha conhecer nosso serviço mais de perto. Acreditamos que comunicação e boas ideias geram criatividade, respeito e inocação.</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="map">
                            <Iframe
                                url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4261.6480766992445!2d-52.028022934708794!3d-28.00734604474973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1614305758237!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="auto"
                                id="myId"
                                className="responsive-map"
                                display="initial"
                                position="relative" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}