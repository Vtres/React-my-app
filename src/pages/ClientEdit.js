import React, { useState, useEffect } from 'react';
import { getClientById, putClient } from '../services/ClientService'
import '../assets/css/form.css';

export default function ClientEdit({ history }) {
    const { user_id } = history.location.state

    const [nome, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setPass] = useState('');
    const [nick_name, setNick_name] = useState('');
    const [client, setClient] = useState({});
    const [err, setError] = useState('');
    
    useEffect(() => {
        getClientById(user_id)
            .then(res => {
                setClient(res)
                setName(res.name)
                setSurname(res.surname)
                setEmail(res.email)
                setPass(res.senha)
                setNick_name(res.nick_name)
            })
            .catch(err => setError(err))
    }, [user_id])

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
    const onChangeNickName = (event) =>{
        setNick_name(event.target.value)
    }
    

    const toEdit = (event) => {
        event.preventDefault()
        client.email = email;
        client.senha = senha;
        client.nick_name = nick_name;
        client.name = nome;
        client.surname = surname;


        putClient(user_id, client)
            .then(() => {
                history.push('/clientes')
            })
            .catch(err => setError(err))
    }

    if (err) {
        return (
            <div>
                <h2 className="text-danger">Alguma coisa esta errada</h2>
            </div>
        )
    } else {
        return (
            <div className="row p-2">
                <div className="col-md-4 p-2"></div>
                <div className="col-md-4 p-2">
                    <div className="card card-editt">
                        <div className="card-header text-center">
                            <h4>Edite seus dados</h4>
                        </div>
                        <div className="card-body cb">
                            <form action="">
                                <div className="form-group">
                                    <label htmlFor="name" className="form-control-label">Nome:</label>
                                    <input type="text" id="name" className="form-control" value={nome} onChange={onChangeName} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="surname" className="form-control-label">Sobrenome:</label>
                                    <input type="text" id="surname" className="form-control" value={surname} onChange={onChangeSurname} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-control-label">Email:</label>
                                    <input type="email" id="email" className="form-control" value={email} onChange={onChangeEmail} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="form-control-label">Senha:</label>
                                    <input type="password" id="password" className="form-control" value={senha} onChange={onChangePass}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="nick" className="form-control-label">NickName:</label>
                                    <input type="text" id="nick" className="form-control" value={nick_name} onChange={onChangeNickName} />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-outline-primary rounded-circle btn-lg" onClick={toEdit}>Editar</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 p-2"></div>

            </div>
        )
    }


}