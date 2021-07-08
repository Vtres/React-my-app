import React, {useState} from 'react';
import {postClient} from '../services/ClientService'
import '../assets/css/form.css';

export default function ClientForm({history}){

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setPass] = useState('');
    const [showButton, setButton] = useState(false);

    const onChangeName = (event) =>{
        setName(event.target.value)
    }
    const onChangeSurname = (event) =>{
        setSurname(event.target.value)
    }
    const onChangeEmail = (event) =>{
        setEmail(event.target.value)
    }
    const onChangePass = (event) =>{
        setPass(event.target.value)
    }

    const toSave = (event) =>{
        event.preventDefault()
        if(name.length <= 0 || surname.length <= 0 || email.length <= 0 || senha.length <= 0){
            setButton(true)
        }else{
            setButton(false)
            postClient({name,surname,email,senha})
                .then(res => {
                    console.log(res)
                    if(res.name){
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

    return(
        <div className="row p-2">
            <div className="col-md-4 p-2"></div>
            <div className="col-md-4 p-2">
                <div className="card">
                    <div className="card-header text-center">
                        <h4>Cadastre-se</h4>
                        <span className="red" style={{visibility: showButton ? 'visible' : 'hidden' }}>Há Campo(s) em Branco(s)</span>
                    </div>
                    <div className="card-body">
                        <form action="">
                            <div className="form-group">
                                <label htmlFor="name" className="form-control-label">Nome:</label>
                                <input type="text" id="name" className="form-control" value={name} onChange={onChangeName}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="surname" className="form-control-label">Sobrenome:</label>
                                <input type="text" id="surname" className="form-control" value={surname} onChange={onChangeSurname} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-control-label">Email:</label>
                                <input type="email" id="email" className="form-control" value={email} onChange={onChangeEmail}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-control-label">Senha:</label>
                                <input type="password" id="password" className="form-control" value={senha} onChange={onChangePass} />
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-outline-primary rounded-circle btn-lg" onClick={toSave}>Salvar</button>
                    </div>
                </div>
            </div>
            <div className="col-md-4 p-2"></div>
            
        </div>
    )
}