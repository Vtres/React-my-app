import React, { useState } from 'react';
import { postClient } from '../services/ClientService'
import '../assets/css/form.css';
import { FaUserCircle } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import { Redirect } from 'react-router';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { GrClose } from "react-icons/gr";

export default function ClientForm() {
    const [open, setOpen] = React.useState(false);
    const history = useHistory();
    const [typeView, setTypeView] = useState('Login');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setPass] = useState('');
    const [showButton, setButton] = useState(false);

    const onChangeName = (event) => {
        setName(event.target.value)
    }
    const onChangeSurname = (event) => {
        setSurname(event.target.value)
    }
    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangePass = (event) => {
        setPass(event.target.value)
    }

    // const onChangeTypeView = (event) => {
    //     console.log(login)
    //     setTypeView(event.target.value)
    // }

    const toSave = (event) => {
        setOpen(true);
        event.preventDefault()
        if (name.length <= 0 || surname.length <= 0 || email.length <= 0 || senha.length <= 0) {
            setButton(true)
        } else {
            setButton(false)
            postClient({ name, surname, email, senha })
                .then(res => {
                    console.log(res)
                    if (res.name) {
                        setName('')
                        setSurname('')
                        setEmail('')
                        setPass('')
                        history.push('/clientes')
                    }
                })
                .catch(err => console.log(err));
        }
    }

    const toLog = (e) => {
        setOpen(true);
        setTimeout(function(){ history.push('/dashboard') }, 2000);
        // history.push('/dashboard')
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    function onChangeTypeView() {
        setTypeView("Login");
    };

    function onChangeTypeViewLogin() {
        setTypeView("Cadastro");
    }

    return (
        <div className="container">
            <div className="row">
                {(() => {
                    switch (typeView) {
                        case "Cadastro":
                            return (
                                <div className="col-md-6 offset-md-3">
                                    <FaUserCircle className="fas" />
                                    <div className="card-form mb-4">
                                        <h4 className="text-center mt-3 titleCadastro">Cadastre-se</h4>
                                        <div className="card-body">
                                            <form action="">
                                                <div className="form-group">
                                                    <TextField required variant="outlined" className="form-imputs" id="name" label="Nome" value={name} onChange={onChangeName} />
                                                </div>
                                                <div className="form-group">
                                                    <TextField required variant="outlined" className="form-imputs" id="surname" label="Sobrenome" value={surname} onChange={onChangeSurname} />
                                                </div>
                                                <div className="form-group">
                                                    <TextField required variant="outlined" className="form-imputs" id="email" label="Email" value={email} onChange={onChangeEmail} />
                                                </div>
                                                <div className="form-group">
                                                    <TextField required variant="outlined" type="password" className="form-imputs" id="password" label="Senha" value={senha} onChange={onChangePass} />
                                                </div>
                                            </form>
                                            <div className="row p-4">
                                                {/* <button className="btn btn-outline-primary btn-lg" onClick={toSave}>Salvar</button> */}
                                                <Button variant="contained" color="primary" onClick={toSave}>Cadastrar</Button>
                                            </div>

                                            <div className="inline">
                                                <a className="card-link" onClick={onChangeTypeView}>Entrar</a>
                                            </div>
                                        </div>

                                    </div>
                                    <Snackbar
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                            color: "#5C6BC0",
                                        }}
                                        open={open}
                                        autoHideDuration={3000}
                                        onClose={handleClose}
                                        message="Usuário Cadastrado"
                                        className="snackbar"
                                        action={
                                            <React.Fragment>
                                                <Button className="icon-close" color="#FAFAFA" size="small" onClick={handleClose}>
                                                    Fechar
                                                </Button>
                                                <IconButton size="small" aria-label="close" severity="success" onClick={handleClose}>
                                                    <GrClose fontSize="small" />
                                                </IconButton>
                                            </React.Fragment>
                                        }
                                    />
                                </div>
                            );
                        case "Login":
                            return (
                                <div className="col-md-6 offset-md-3">
                                    <h4 className="text-center mt-3 titleLogar">Logar-se</h4>
                                    <div className="card-form">
                                        <div className="card-body mt-4">
                                            <form action="">
                                                <div className="form-group">
                                                    <TextField required variant="outlined" className="form-imputs" id="email" label="Email" value={email} onChange={onChangeEmail} />
                                                </div>
                                                <div className="form-group">
                                                    <TextField required variant="outlined" type="password" className="form-imputs" id="password" label="Senha" value={senha} onChange={onChangePass} />
                                                </div>
                                            </form>
                                            <div className="row p-4">
                                                {/* <button className="btn btn-outline-primary btn-lg" onClick={toSave}>Salvar</button> */}
                                                <Button variant="contained" color="primary" onClick={toLog}>Logar</Button>
                                            </div>

                                            <div className="inline">
                                                <a className="card-link" onClick={onChangeTypeViewLogin}>Cadastre-se</a>
                                                <a className="card-link"> Esqueceu a senha? </a>
                                            </div>

                                        </div>
                                    </div>
                                    <Snackbar
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                            color: "#5C6BC0",
                                        }}
                                        open={open}
                                        autoHideDuration={3000}
                                        onClose={handleClose}
                                        message="Usuário Logado"
                                        className="snackbar"
                                        action={
                                            <React.Fragment>
                                                <Button className="icon-close" color="#FAFAFA" size="small" onClick={handleClose}>
                                                    Fechar
                                                </Button>
                                                <IconButton size="small" aria-label="close" severity="success" onClick={handleClose}>
                                                    <GrClose fontSize="small" />
                                                </IconButton>
                                            </React.Fragment>
                                        }
                                    />
                                </div>
                            );
                        case "Esqueceu":
                            return (
                                <div>
                                    <p>esqueceu neh</p>
                                </div>
                            );
                        default: return "#FFFFFF";
                    }
                })()}


            </div>

        </div>


    )
}