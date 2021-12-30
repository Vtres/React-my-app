import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { MdMenu } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdModeEdit, MdDelete } from "react-icons/md";
import './../assets/css/libraryCard.css';
import { clientRoom, getClient, getClientById } from '../services/ClientService';
import { erase } from '../services/RoomService'
import moment from 'moment';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

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

export default function Library() {
  // const history = createHashHistory()
  const classes = useStyles();
  const [room, setRoom] = useState('');
  const [roomError, setClientError] = useState('')
  const history = useHistory();

  useEffect(() => {
    loadCard()
  }, [])

  const loadCard = () => {
    const user_id = localStorage.getItem('user-id')
    clientRoom(user_id)
      .then(res => {
        setRoom(res)
      })
      .catch(err => {
        setClientError(err)
      })
  }
  const onDelete = (room_id) => {
    erase(room_id)
      .then((res) => {
        loadCard()
      })
      .catch(err => setClientError(err))
  }

  const loadClass = (id) => {
    history.push('/class', { id })
  }
  return (
    <div className="row pb-3 justify-content-center box-library">
      {room.length == 0
        ? (
          <div className='text-center borda'>
            <h4>Você não participa de nenhuma Sala</h4>
          </div>
        )
        : room.map(data => (
          <div className="m-2 p-0 col-12 col-md-4 col-sm-6 borda" key={data.room_id}>
            <Card className={classes.root}>
              <div className='action' >
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
              </div>
              {data.type == 'D' ? (
                <CardActions disableSpacing>
                  <IconButton >
                    <MdModeEdit />
                  </IconButton>
                  <IconButton >
                    <MdDelete onClick={() => {
                      if (window.confirm('Certeza que deseja excluir?')) {
                        onDelete(data.room_id)
                      }
                    }} />
                  </IconButton>
                </CardActions>
              ) : (
                <CardActions disableSpacing>
                </CardActions>
              )}
              <Button className="icon-close" color="#FAFAFA" size="small" onClick={() => loadClass(data.room_id)}>
                Entrar
              </Button>
            </Card>
          </div>

        ))
      }
    </div>
  )

}
