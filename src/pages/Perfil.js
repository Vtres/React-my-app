import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { styled } from '@material-ui/core/styles';
import './../assets/css/perfil.css';
import { Typography } from '@material-ui/core';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'justify',
    color: theme.palette.text.secondary,
}));

export default function Perfil({ history }) {
    const [userName, setUserName] = useState('vinicius tres')
    const [userDate, setUserDate] = useState('30/06/2021')
    const [userEmail, setUserEmail] = useState('viniciust98@outlook.com')
    const [userNickName, setUserNickName] = useState('')
    return (
        <div className="row pb-3 justify-content-center box-library">

            <Grid container spacing={2}>

                <Grid item xs={12} sm={6} md={8} >
                    <Item className="title-perfil">
                        <h2 >Bem vindo ao seu perfil!</h2>
                    </Item>
                    <Item className="mt-2">
                        <h4 >Dados pessoais:</h4>
                        <Typography>Entrou em: {userDate}</Typography>
                        <Typography>Nome completo: {userName}</Typography>
                        <Typography>Email cadastrado: {userEmail}</Typography>
                        <Typography>Nick informado: {userName}</Typography>
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