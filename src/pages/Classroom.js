import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import '../assets/css/classroom.css';
import Error from './Error';
import { showClassByIdRoom,postClass } from '../services/ClassService'
import moment from 'moment';
import { useHistory } from "react-router-dom";

export default function Classroom() {
    const [classe, setClasse] = useState('');
    const [classeError, setClasseError] = useState('')
    const history = useHistory();

    const { id } = history.location.state
    const {type} = history.location.state
    useEffect(() => {
        console.log(id)
        console.log(type)
        loadClass()
    }, [])

    const loadClass = () => {
        showClassByIdRoom(id)
            .then(res => {
                setClasse(res)
            })
            .catch(err => {
                setClasseError(err)
            })
    }
    const lookPost = () => {
        console.log('cliquei')
    }
    return (
        <Box className='box'>
            {
                classe.length == 0
                    ? (
                        <div>sem aualas</div>
                        // <Error />
                    )
                    : classe.map(p => (
                        <Paper className='paper class' onClick={lookPost}  key={p.class_id}>
                            <Grid container wrap="nowrap" spacing={2} >
                                <Grid item className='grid-title'>
                                    <Typography className='text-center' noWrap><p>{p.title}</p></Typography>
                                </Grid>

                                <Divider orientation="vertical" flexItem className="divider" />
                                <Grid item className='grid-data'>
                                    <Typography noWrap><p>{moment(p.date_class).format("DD/MM/YYYY")}</p></Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    ))
            }
        </Box>

    );
}
