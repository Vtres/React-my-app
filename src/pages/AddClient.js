import React, { useState } from 'react';
// import { postClient } from '../services/ClientService'
import '../assets/css/form.css';
import { FaUserCircle } from 'react-icons/fa';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { GrClose } from "react-icons/gr";
import { NavLink } from 'react-router-dom';
import { postAddClient } from '../services/AuthService'
import { Redirect } from 'react-router-dom';

export default function ClientForm() {
    const [open, setOpen] = React.useState(false);
    const history = useHistory();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setPass] = useState('');
    const [message, setMessage] = useState('')

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

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const toSave = (event) => {
        event.preventDefault()
        if (name.length <= 0 || surname.length <= 0 || email.length <= 0 || senha.length <= 0) {
            setOpen(true);
            setMessage('Dados do cadastro estão inválidos')
        } else {
            postAddClient({ name, surname, email, senha })
                .then(res => {
                    setOpen(true);
                    setMessage('Cadastrado com SUCESSO!');
                    <Redirect to="/singin" /> 
                })
                .catch(err =>{
                    setOpen(true);
                    setMessage('ERRO no cadastro, reveja as informações');
                });
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <FaUserCircle className="fas" />
                    <div className="card-form mb-4">
                        <h4 className="text-center mt-3 titleCadastro">Cadastre-se</h4>
                        <div className="card-body">
                            <form action="">
                                <div className="form-group">
                                    <TextField required variant="outlined" className="form-imputs" id="name" label="Nome" value={name} onChange={onChangeName} autoFocus />
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
                                <NavLink to="/singin" className="card-link" > Logar </NavLink>
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
                        message={message}
                        className="snackbar"
                        action={
                            <React.Fragment>
                                <IconButton size="small" aria-label="close" severity="success" onClick={handleClose}>
                                    <GrClose fontSize="small" />
                                </IconButton>
                            </React.Fragment>
                        }
                    />
                </div>
            </div>
        </div>
    )
}