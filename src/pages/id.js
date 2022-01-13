import React, { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { searchRoom } from '../services/RoomService';
import { join } from '../services/RoomService';

import './../assets/css/libraryCard.css';
import moment from 'moment';
export default function PageId() {
    const [data, setData] = useState('')
    const [message, setMessage] = useState('')
    var id_room = window.location.search.substr(1).split('&');

    useEffect(() => {
        serachRoomById()
    })

    const serachRoomById = () => {
        var id = id_room[0]
        searchRoom(id)
            .then(res => {
                setData(res[0])
                setMessage('')
            })
            .catch(err => {
                console.log(err)
                setMessage('Essa sala não existe')
                setData('')
            })
    }

    const joinUser = (id_room) => {
        const id_user = localStorage.getItem('user-id')
        join({ id_room, id_user })
            .then(res => {
                setMessage(res)
            })
            .catch(erro =>{
                console.log(erro)
                setMessage('Não é possivel')
            })
    }
    return (
        <div className="row pb-3 justify-content-center box-library">
            {data.length === 0 ? (
                <div className="row pb-3 justify-content-center box-library">
                    {message}
                </div>
            ) : (
                <div className="m-2 p-0 col-12 col-md-4 col-sm-6 borda" key={data.room_id}>
                    <Card >
                        <div className='action-option-two' >
                            <CardHeader
                                title={data.name !== undefined ? data.name : ''}
                                subheader={moment(data.date).format("DD/MM/YYYY")}
                            />
                            <CardMedia
                                component='img'
                                image={data.result ? data.result : `${process.env.PUBLIC_URL}/image/no-image.jpg`}
                                title={data.nome}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {data.description_room}
                                </Typography>
                            </CardContent>
                        </div>
                        <CardActions disableSpacing>
                            {localStorage.getItem('user-id') !== data.dono ? (
                                <Button className="icon-close" color="#FAFAFA" size="small" onClick={() => joinUser(data.room_id)} >
                                    Juntar-se a sala
                                </Button>
                            ) : null}
                        </CardActions>
                    </Card>
                </div>
            )}
        </div>
    )

}

