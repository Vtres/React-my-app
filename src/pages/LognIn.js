import React, { useState } from 'react';
import '../assets/css/form.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import { GrClose } from "react-icons/gr";
import { useHistory } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import { Redirect } from 'react-router-dom';
import { checkToken, postSignIn } from '../services/AuthService'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function LognIn() {
    const [open, setOpen] = React.useState(false);
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [senha, setPass] = useState('');
    const [message, setMessage] = useState('')
    const [statusToken, setStatusToken] = useState(false)
    const [eye, setEye] = useState(false)
    const [signinError, setSigninError] = useState('')
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
            postSignIn({email, senha}).then(res_1 =>{
                if(res_1.data[0]){
                    localStorage.setItem('user-token', res_1.data[0])
                    localStorage.setItem('user-id', res_1.data[1])
                    window.location.reload(false);
                }else{
                    setSigninError(res_1.signin_error)
                    setMessage('Email ou Senha Inválidos')
                    setEmail('')
                    setPass('')
                    setOpen(true);
                }
            }).catch(err=>{
                console.log(err)
                setMessage('Email ou Senha Inválidos')
                setOpen(true);
            })
            // postSignIn({ email, senha }).then(response => {
            //     if (response.data[0]) {
            //         checkToken(response.data[0]).then(res => {
            //             console.log(res)
            //             if (res.status) {
            //                 localStorage.setItem('user-token', response.data[0])
            //                 localStorage.setItem('user-id', response.data[1])
            //                 // history.push('/dashboard')
            //                 reload()
            //                 window.location.reload(false);
            //             }
            //         }).catch(err => {
            //             console.log(err.response.status)
            //             console.log(err.response.data)

            //             setMessage('Não foi possível logar')
            //             setEmail('')
            //             setPass('')
            //             setOpen(true);

            //         })
            //     }
            // }).catch(err => {
            //     console.log(err.response.status)
            //     console.log(err.response.data)
            //     setMessage('Email ou Senha Inválidos')
            //     setEmail('')
            //     setPass('')
            //     setOpen(true);
            // })
            // setTimeout(function () { history.push('/dashboard') }, 2000);
        }
        // setEmailInvaid('error')



        // history.push('/dashboard')
    };

    const handleKeyDown = (event) =>{
        if(event.key === 'Enter'){
            toLog()
        }
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const onEye = () => {
        setEye(!eye)
    }

    const reload = () => {
        history.push('/dashboard')
        // document.location.reload(true);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4 className="text-center mt-3 titleLogar">Logar-se</h4>
                    <div className="card-form">
                        <div className="card-body mt-4">
                            <form action="">
                                <div className="form-group">
                                    <TextField required variant="outlined" className="form-imputs" id="email" label="Email" value={email} onChange={onChangeEmail} autoFocus />
                                </div>
                                <div className="form-group input-group">
                                    {/* <TextField required variant="outlined" type={eye ? 'text' : 'password'} id="password" label="Senha" value={senha} onChange={onChangePass} /> */}
                                    <FormControl className="form-imputs" variant="outlined">
                                    <InputLabel className="label-imput" htmlFor="outlined-adornment-password">Senha</InputLabel>
                                    <OutlinedInput
                                        required
                                        variant="outlined"
                                        id="password"
                                        type={eye ? 'text' : 'password'}
                                        value={senha}
                                        onChange={onChangePass}
                                        onKeyDown={handleKeyDown}
                                        
                                        label="Senha"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={onEye}
                                                    onMouseDown={onEye}
                                                    edge="end"
                                                >
                                                    {eye ? <FaEye /> : < FaEyeSlash />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        
                                    />
                                     </FormControl>
                                    {/* <span className='input-group-text' > </span> */}
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