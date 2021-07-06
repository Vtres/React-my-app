import React from 'react';
import Iframe from 'react-iframe'

export default function Localization() {
    return (
        <div className="mb-5">
             <h2 className="style_font text-center mt-2 back-color-card">Nossa Localização</h2>
            <div className="map">
                <Iframe
                    url="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4261.6480766992445!2d-52.028022934708794!3d-28.00734604474973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1spt-BR!2sbr!4v1614305758237!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="400px"
                    id="myId"
                    className=""
                    display="initial"
                    position="relative" />
            </div>
        </div>
    )
}