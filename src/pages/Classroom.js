import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import '../assets/css/classroom.css';
import Error from './Error';
import { showClassByIdRoom,postClass,deleteClassById } from '../services/ClassService'
import moment from 'moment';
import { useHistory } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import IconButton from '@material-ui/core/IconButton';

export default function Classroom() {
    const [classe, setClasse] = useState('');
    const [classeError, setClasseError] = useState('')
    const history = useHistory();

    const { id } = history.location.state
    const {type} = history.location.state
    useEffect(() => {
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
    const onDelete =(id)=>{
        deleteClassById(id)
            .then(() =>{
                loadClass()
            })
            .catch(err => setClasseError(err))
    }
    const onContent = (class_id) => {
        localStorage.setItem('type', type)
        window.location.href = "http://localhost:3000/content/?"+class_id;
        // history.push('/content')
    }
    return (
        <Box className='box'>
            {
                classe.length == 0
                    ? (
                        <div>sem aulas</div>
                        // <Error />
                    )
                    : classe.map(p => (
                        <Paper className='paper class'  key={p.class_id}>
                            <Grid container wrap="nowrap" spacing={2} >
                                <Grid item className='grid-title'  onClick={() => onContent(p.class_id)}>
                                    <Typography className='text-center' noWrap><p>{p.title}</p></Typography>
                                </Grid>

                                <Divider orientation="vertical" flexItem className="divider-class" />
                                <Grid item className='grid-data'>
                                    <Typography noWrap><p>{moment(p.date_class).format("DD/MM/YYYY")}</p></Typography>
                                    {type == 'D' ? (
                                        <IconButton >
                                        <MdDelete className='btn-actions' title='Deletar' onClick={() => {
                                          if (window.confirm('Certeza que deseja excluir?')) {
                                            onDelete(p.class_id)
                                          }
                                        }} />
                                      </IconButton>
                                    ):null}
                                </Grid>
                            </Grid>
                            <Typography><p>{classeError}</p></Typography>
                        </Paper>
                    ))
            }
        </Box>

    );
}
