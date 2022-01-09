import React, { useState, useEffect } from 'react';
import { listFile } from '../services/ContentService';

export default function ContentFile() {
    var params = window.location.search.substr(1).split('&');
    const [file, setFile] = useState([])
    const [status, setStatus] = useState(false)
    var dados = [];
    useEffect(() => {
        listFile(params)
            .then(res => {
                setStatus(true)
                dados.push(res)
                setFile(res)
            })
            .catch(err => {
                setStatus(false)
                console.log(err)
                // setStatus(false)
            })
    }, [])
    return (

        <div className="row justify-content-center box-library">
            {file.length > 0? (
                <h3>Anexos:</h3>
            ): <h3>Anexo:</h3>}
            
            {status ? (
                file.map(c => (
                    <div className="row pb-3 ">
                        <a href={c.result ? c.result : ''} target="_blank" rel="noopener noreferrer" download={c.nome} value={c.nome}>
                            <span id="id-span">{c.nome} </span>
                        </a>
                    </div>
                ))
                
            ) : null}
        </div >

    )
}

