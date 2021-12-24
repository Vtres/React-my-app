import React, { useState, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';
import './../assets/css/perfil.css';
import { Typography } from '@material-ui/core';
import { getClientById } from '../services/ClientService';
import moment from 'moment';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'justify',
    color: theme.palette.text.secondary,
}));

export default function Perfil({ history }) {
    const [client, setClient] = useState([])
    const [clientError, setClientError] = useState('')

    useEffect(() => {
        loadInfo()
        
    }, [])

    const loadInfo = () => {
        const user_id = localStorage.getItem('user-id')
        getClientById(user_id)
            .then(res => {
                setClient(res);
                console.log(client);
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
                    <Item className="mt-2">
                        <h4 >Informações Extras:</h4>
                        <Typography>Total de salas: 12 salas</Typography>
                        <Typography>Você é dono de 3 salas</Typography>
                        <Typography>Você está participando de 9 salas</Typography>
                    </Item>

                </Grid>
                <Grid itemxs={12} sm={6} md={4}>
                    <img src={`${process.env.PUBLIC_URL}/image/perfil.jpg`} className="img-perfil"></img>
                </Grid>
            </Grid>
        </div>

    )
}