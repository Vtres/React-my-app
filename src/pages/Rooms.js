import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

import { useHistory } from "react-router-dom";
import { roomTopic } from '../services/TopicService';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import { BiDotsVerticalRounded } from "react-icons/bi";
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    media: {
        height: '200px'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

export default function Rooms() {
    const classes = useStyles();
    const history = useHistory();
    const [rooms, setrooms] = useState('')
    const { id } = history.location.state
    useEffect(() => {
        loadRoomIdByTopic(id)
    }, [])

    const loadRoomIdByTopic = (id) => {
        roomTopic(id).then(res => {
            console.log(res)
            setrooms(res)
        })
            .catch(err => console.log(err))
    }

    return (
        <div className="row pb-3 justify-content-center box-library">
            {rooms.length == 0
                ? (
                    <div className='text-center borda'>
                        <h4>Não há salas para esse tópico ainda</h4>
                    </div>
                )
                : rooms.map(data => (
                    <div className="m-2 p-0 col-12 col-md-4 col-sm-6 borda" >
                        {data.id_public
                            ? (<Card className={classes.root} key={data.room_id}>
                                <CardHeader
                                    action={
                                        <IconButton aria-label="settings">
                                            <BiDotsVerticalRounded />
                                        </IconButton>
                                    }
                                    title={data.name}
                                    subheader={moment(data.date).format("DD/MM/YYYY")}
                                />
                                <CardMedia
                                    className={classes.media}
                                    component='img'
                                    image={data.result ? data.result : `${process.env.PUBLIC_URL}/image/no-image.jpg`}
                                    title={data.nome}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {data.description_room}
                                    </Typography>
                                </CardContent>
                                <Button className="icon-close" color="#FAFAFA" size="small" >
                                    Entrar
                                </Button>
                                {/* onClick={() => loadClass(data.room_id)} */}
                            </Card>
                            ) : ''}
                    </div>

                ))
            }
        </div>

    )
}