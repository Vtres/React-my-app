import React,{useState,useEffect} from 'react';
import {getClient} from '../services/ClientService';
import moment from 'moment';
export default function ClientList(){

    const [clients, setClient] = useState([])
    const [clientError, setClientError] = useState('')
    useEffect(()=>{
        reloadClient()
    }, [])

    const reloadClient = () =>{
        getClient()
            .then(res => setClient(res))
            .catch(err => setClientError(err))
    }
    return(
        <div className="card">
            <div className="card-body">
                <div className="row">
                    {
                        clientError
                        ?(
                            <div> 
                                <h2>Tivemos erros</h2>
                                console.log({clientError})
                            </div>
                        )
                        : clients.map( c => (
                            <div className="col-md-3 p-2" key={c.user_id}>
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-text text-center">{c.name}</h4>
                                    </div>
                                    <div className="card-body">
                                        <p>{c.surname}</p>
                                    
                                    {
                                        c.nick_name.length>1 ? 
                                            <p>NickName: {c.nick_name}</p>
                                        : '' 
                                    }
                                    </div>
                                    <div className="card-footer">
                                        <span>Entrou em: {moment(c.date).format("DD/MM/YYYY")}</span>
                                    </div> 
                                                                       
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        
    )
}