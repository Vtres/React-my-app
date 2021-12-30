import React, { useState, useEffect } from 'react';
import { index } from '../services/TopicService';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useHistory } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Topic() {
    const [topic, setTopic] = useState('')
    const topicos = []
    const history = useHistory();

    useEffect(() => {
        loadTopic()
    }, [])

    const loadTopic = () => {
        index()
            .then(res => {
                // console.log(res)
                res.map(data => {
                    topicos.push(data)
                })
                setTopic(topicos)
            })
            .catch(err => console.log(err))
    }

    const searchRoomTopic = (id)=>{
        history.push('/show-rooms', { id })
    }
    return (
        <div className="row box-topic">
            <h4 className='text-center'>Tópicos da Plataforma </h4><hr
                style={{
                    color: '#000000',
                    backgroundColor: '#000000',
                    height: 2,
                    borderColor: '#000000'
                }}
            />
            <Box sx={{ flexGrow: 1 }} className=" container justify-content-center box-library">
                <Grid container spacing={2}>
                    {topic ?
                        topic.map(data => (

                            <Grid item xs={6} sm={6} md={3} key={data.topic_id} className="action style-grid" onClick={()=>searchRoomTopic(data.topic_id)}>
                                <Item className="style-font">{data.name}</Item>
                            </Grid>

                        )) : null
                    }
                </Grid>
            </Box>
        </div>
    )
}