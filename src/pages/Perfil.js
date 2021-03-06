import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';
import './../assets/css/perfil.css';
import { Typography } from '@material-ui/core';
import { getClientById, imgClient } from '../services/ClientService';
import moment from 'moment';
import { MdAccountCircle } from "react-icons/md";


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'justify',
    color: theme.palette.text.secondary,
}));

export default function Perfil({ history }) {
    const [client, setClient] = useState([])
    const [clientError, setClientError] = useState('')
    const [img, setImg] = useState('')

    useEffect(() => {
        loadInfo()
        loadImg()
    }, [])

    const loadInfo = () => {
        const user_id = localStorage.getItem('user-id')
        getClientById(user_id)
            .then(res => {
                setClient(res);
                console.log('perfil', client);
            }).catch(err => setClientError(err))
    }

    const loadImg = () => {
        const user_id = localStorage.getItem('user-id')
        imgClient(user_id)
            .then(res => {
                setImg(res);
            }).catch(err => setClientError(err))
    }
    return (
        <div className="row pb-3 justify-content-center box-library">

            <Grid container spacing={2}>

                <Grid item xs={12} sm={6} md={8} >
                    <Item className="title-perfil">
                        <h2 >Bem vindo ao seu perfil!</h2>
                    </Item>
                    <Item className="mt-2">
                        <h4 >Dados pessoais:</h4>
                        <Typography>Entrou em: {moment(client.date).format("DD/MM/YYYY")}</Typography>
                        <Typography>Nome: {client.name}</Typography>
                        <Typography>Email cadastrado: {client.email}</Typography>
                        <Typography>Nome completo informado: {client.name} {client.surname}</Typography>
                    </Item>
                    {/* <Item className="mt-2">
                        <h4 >Informa????es Extras:</h4>
                        <Typography>Total de salas: 12 salas</Typography>
                        <Typography>Voc?? ?? dono de 3 salas</Typography>
                        <Typography>Voc?? est?? participando de 9 salas</Typography>
                    </Item> */}

                </Grid>
                <Grid itemxs={12} sm={6} md={4}>
                    {img ? (
                        <img src={img.result} alt={img.nome} className="img-perfil"></img>
                    ) : (
                        <div className="icon-perfil">
                            <MdAccountCircle />
                        </div>

                    )}

                </Grid>
            </Grid>
        </div>

    )
}