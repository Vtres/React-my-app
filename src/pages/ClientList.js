import React, { useState, useEffect } from 'react';
import { getClient, deleteClientById } from '../services/ClientService';
import moment from 'moment';
import Error from './Error';
import { FaPencilAlt, FaRegTrashAlt} from 'react-icons/fa';

export default function ClientList({ history }) {

    const [clients, setClient] = useState([])
    const [clientError, setClientError] = useState('')
    useEffect(() => {
        reloadClient()
    }, [])

    const reloadClient = () => {
        getClient()
            .then(res => setClient(res))
            .catch(err => setClientError(err))
    }

    const onEdit = (user_id) => {
        // client-edit é uma rota
        history.push('/client-edit', { user_id })
    }
    const onDelete = (user_id) => {
        deleteClientById(user_id)
            .then(() =>{
                reloadClient()
            })
            .catch(err => setClientError(err))
    }
    return (
        <div className="row">
            {
                clientError
                    ? (
                        <Error />
                    )
                    : clients.map(c => (
                        <div className="col-lg-3 col-md-4 col-sm-6 p-3" key={c.user_id}>
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="text-center">{c.name}</h4>
                                </div>
                                <div className="card-body">
                                    <p>{c.surname}</p>
                                    {
                                        c.nick_name !== "" ?
                                            <p>NickName: {c.nick_name}</p>
                                            : ''
                                    }
                                    <span>Entrou em: {moment(c.date).format("DD/MM/YYYY")}</span>
                                </div>
                                <div className="card-footer d-flex justify-content-end">
                                    
                                    <button className="btn btn-outline-warning mx-1
                                            border-0" onClick={() => onEdit(c.user_id)}>
                                        <FaPencilAlt />
                                    </button>
                                    <button className="btn btn-outline-danger mx-1
                                            border-0" onClick={() => {
                                            if (window.confirm('Certeza que deseja excluir?')) {
                                                onDelete(c.user_id)
                                            }
                                        }}>
                                        <FaRegTrashAlt />
                                    </button>

                                </div>

                            </div>
                        </div>
                    ))
            }
        </div>

    )
}