import React from 'react';
import '../assets/css/localization.css'
import { FaLinkedinIn,FaFacebookF,FaInstagram,FaGithub} from 'react-icons/fa';

export default function Footer() {
    return (
        <div className="bg-img-back">
            <hr />
            <footer className="footer text-center text-lg-start mb-3">
                <div className="text-center p-2 custom-footer">
                    Estude Aqui © 2020-2021 Created by:&nbsp;
                    <a className="text-dark" href="https://github.com/Vtres/MyReadProject">Vinicius Tres</a>
                    <div className="redesSociais">
                        <span>Minhas Redes:</span> <br />
                        <a className="text-dark icon-custom" href="https://www.linkedin.com/in/vinicius-tres-mittow/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        <a className="text-dark icon-custom" href="https://www.facebook.com/trezmittow/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a className="text-dark icon-custom" href="https://www.instagram.com/vinicius_tres/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a className="text-dark icon-custom" href="https://github.com/Vtres" target="_blank" rel="noopener noreferrer"><FaGithub /></a>   
                    </div>
                </div>

            </footer>

        </div>
    )
}