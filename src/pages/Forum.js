import React, { useState, useEffect } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core//ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import '../assets/css/forum.css';
import { getPost } from '../services/PostService'
import moment from 'moment';

export default function Forum() {
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
    const lookPost = (id_post) => {
        window.location.href = "http://localhost:3000/comment/?" + id_post;
    }
    return (
        <Box className='box'>
            {post.length == 0 ? null :
                post.map(p => (
                    <Paper className='paper' onClick={() => lookPost(p.post_id)} key={p.post_id}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt={p.name_user + p.surname}  />
                            </ListItemAvatar>
                            <ListItemText
                                primary={p.title}
                                secondary={
                                    <React.Fragment>
                                        <Typography noWrap>{p.name_user + " " + p.surname} - {moment(p.date_post).format("DD/MM/YYYY")}</Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </Paper>
                ))}
        </Box >
    );
}

