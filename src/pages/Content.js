import React, { useState, useEffect } from 'react';
import { list, create } from '../services/ContentService';
import Editorr from './Editor'

export default function Content() {
    var params = window.location.search.substr(1).split('&');
    const [data, setData] = useState('')
    var typeUser = localStorage.getItem('item')
    useEffect(() => {
        list(params)
            .then(res => {
                console.log('then')
                // setData(res)
                if(res.description_contents != undefined){
                    document.getElementById('conteudo').innerHTML = res.description_contents
                }
               
            })
            .catch(err => {
                console.log(err)
                // setStatus(false)
            })
    }, [])
    return (
        <div className="row pb-3 justify-content-center box-library">

            <div id='conteudo'>
            </div>

            {/* <Editorr />

            oi {params} */}
        </div>

    )
}
