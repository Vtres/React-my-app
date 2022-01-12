import React, { useEffect, useState } from 'react';
import Drawer from './Drawer';
import { searchRoom } from '../services/RoomService';
// 
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { BiDotsVerticalRounded } from "react-icons/bi";
import Button from '@material-ui/core/Button';

import './../assets/css/libraryCard.css';
import moment from 'moment';
export default function PageId() {
    const [data, setData] = useState('')
    const [message, setMessage] = useState('')
    var id_room = window.location.search.substr(1).split('&');
    console.log(id_room[0])

    useEffect(() => {
        console.log('cheguei')
        console.log(id_room[0])
        serachRoomById()
    })

    const serachRoomById = () => {

            searchRoom(id_room[0])
            .then(res => {
                setData(res[0])
                setMessage('')
                console.log(data)
            })
            .catch(err => {
                setMessage('Essa sala não existe')
                setData('')
            })
            
        
    }
    return (
        <div >
            <Drawer />
            {message ? (
                <div className="row pb-3 justify-content-center box-library">
                    {message}
                </div>
            ) : (
                <div className="row pb-3 justify-content-center box-library">

                    <div className="m-2 p-0 col-12 col-md-4 col-sm-6 borda" key={data.room_id}>
                        <Card >
                            <div className='action-option-two' >
                                <CardHeader
                                    action={
                                        <IconButton aria-label="settings">
                                            <BiDotsVerticalRounded />
                                        </IconButton>
                                    }
                                    title={data.name != undefined  ? data.name : ''}
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
                                {localStorage.getItem('user-id') != data.dono ? (
                                    <Button className="icon-close" color="#FAFAFA" size="small" >
                                        Entrar
                                    </Button>
                                ) : null}
                            </CardActions>
                        </Card>
                    </div>
                </div>
            )}

        </div>
    )

}