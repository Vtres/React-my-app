import React, { useState } from 'react';
import '../assets/css/form.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { GrClose } from "react-icons/gr";
import { useHistory } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { checkToken, postSignIn } from '../services/AuthService'

export default function LognIn() {
    const [open, setOpen] = React.useState(false);
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [senha, setPass] = useState('');
    const [message, setMessage] = useState('')

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }
    const onChangePass = (event) => {
        setPass(event.target.value)
    }

    const toLog = (e) => {
        if (!email.match(/\S+@\S+\.\S+/)) {
            setMessage('Email Vazio ou com formato Inválido')
            setOpen(true);
            setEmail('')
        } else if (!senha) {
            setMessage('Senha está vazia')
            setOpen(true);
            setPass('')
        } else {
            postSignIn({ email, senha }).then(token => {
                if (token) {
                    checkToken(token).then(res => {
                        if (res.status) {
                            localStorage.setItem('user-token', token)
                            // history.push('/dashboard')
                            window.location.reload(false); 
                        }
                    }).catch(err => {
                        console.log(err)
                        setMessage('Não foi possível logar')
                        setEmail('')
                        setPass('')
                        setOpen(true);

                    })
                }
            }).catch(err => {
                console.log(err.message)
                setMessage('Email ou Senha Inválidos')
                setEmail('')
                setPass('')
                setOpen(true);
            })
            // setTimeout(function () { history.push('/dashboard') }, 2000);
        }
        // setEmailInvaid('error')



        // history.push('/dashboard')
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const reload = () => {
        history.push('/dashboard')
        document.location.reload(true);
    }

    return((() => {
        if (localStorage.getItem('user-token')) {
            return(
                <Redirect to="/dashboard" />        
            )
        } else {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <h4 className="text-center mt-3 titleLogar">Logar-se</h4>
                            <div className="card-form">
                                <div className="card-body mt-4">
                                    <form action="">
                                        <div className="form-group">
                                            <TextField required variant="outlined" className="form-imputs" id="email" label="Email" value={email} onChange={onChangeEmail} autoFocus/>
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
                                        <NavLink to="/addClient" className="card-link" > Cadastre-se </NavLink>
                                        <NavLink to="/recovery" className="card-link" > Esqueceu a senha? </NavLink>
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
                                message={message ? message : 'tudo certo'}
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
    })())
}