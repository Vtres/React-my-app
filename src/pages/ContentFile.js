import React, { useState, useEffect } from 'react';
import { listFile, destroy } from '../services/ContentService';
import Chip from '@material-ui/core/Chip';
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    fab: {
        margin: theme.spacing(2),
    },
    absolute: {
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(3),
    },
    perfil: {
        backgroundColor: '#f44336',
        color: '#FFF',
    },
}));
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: 'background.paper',
    border: '3px solid #3F51B5',
    boxShadow: 24,
    p: 4,
};
const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
    listStyleType: "none",
    display: "inline-block"
}));
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

    const baixar = (result, nome) => {
        download(nome, result);
    }
    const download = (nome, result) => {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8, ' + encodeURIComponent(result));
        element.setAttribute('download', nome);
        document.body.appendChild(element);
        element.click();
    }
    const handleDelete = (id)=>{
        destroy(id)
            .then(res=>{
                window.location.reload();
            })
            .catch(error=>console.log(error))
    }
    return (

        <div className="justify-content-center box-library">
            {file.length > 0 ? (
                <h3>Anexos:</h3>
            ) : <h3>Anexo:</h3>}

            {status ? (
                file.map(c => (
                    <ListItem direction="row pb-3 " key={c.id} spacing={1}>
                        <Chip
                            target="_blank"
                            rel="noopener noreferrer"
                            label={c.nome}
                            onClick={() => baixar(c.result, c.nome)}
                            onDelete={()=>handleDelete(c.id)}

                        />
                    </ListItem>

                ))

            ) : null}
        </div >

    )
}

