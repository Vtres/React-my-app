import React, { useState, useEffect } from 'react';
import { list } from '../services/ContentService';
import moment from 'moment';
import ContentFile from './ContentFile'

export default function Content() {
    var params = window.location.search.substr(1).split('&');
    const [data, setData] = useState('')
    var typeUser = localStorage.getItem('item')
    useEffect(() => {
        list(params)
            .then(res => {
                console.log(res)
                // setData(res)
                setData(res.date_contents)
                document.getElementById('conteudo').innerHTML = res.description_contents


            })
            .catch(err => {
                console.log(err)
                // setStatus(false)
            })
    }, [])
    return (
        <div className="row pb-3 justify-content-center box-library">
            <span>Conteúdo criado em: {moment(data).format("DD/MM/YYYY")}</span>
            <div id='conteudo'>
            </div>
            
        </div>

    )
}
