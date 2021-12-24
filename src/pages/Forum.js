import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import '../assets/css/forum.css';
import Error from './Error';
import { getPost } from '../services/PostService'
import moment from 'moment';


export default function AutoGridNoWrap() {
    const [post, setPost] = useState('');
    const [postError, setPostError] = useState('')

    useEffect(() => {
        loadPost()
    }, [])

    const loadPost = () => {
        getPost()
            .then(res => {
                console.log(res)
                setPost(res)
            })
            .catch(err => {
                setPostError(err)
            })
    }
    const lookPost = () => {
        console.log('cliquei')
    }
    return (
        <Box className='box'>
            {
                post.length == 0
                    ? (
                        <Error />
                    )
                    : post.map(p => (
                        <Paper className='paper' onClick={lookPost}  key={p.post_id}>
                            <Grid container wrap="nowrap" spacing={2} >
                                <Grid item>
                                    <Typography noWrap><p>{p.title}</p></Typography>
                                </Grid>

                                <Divider orientation="vertical" flexItem className="divider" />

                                <Grid item xs zeroMinWidth>
                                    <Typography noWrap>{p.description_post}</Typography>
                                </Grid>
                                <Divider orientation="vertical" flexItem className="divider" />
                                <Grid item>
                                    <Typography noWrap><p>{moment(p.date_post).format("DD/MM/YYYY")}</p></Typography>
                                </Grid>
                            </Grid>
                        </Paper>
                    ))
            }
        </Box>

    );
}
