import React, { useState, useEffect } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core//ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import '../assets/css/forum.css';
import { getOwnerPost } from '../services/PostService'
import moment from 'moment';
import { Divider } from '@material-ui/core';

export default function Forum() {
    const [post, setPost] = useState('');
    const [postError, setPostError] = useState('')
    var params = window.location.search.substr(1).split('&');

    useEffect(() => {
        loadPost()
    }, [])

    const loadPost = () => {
        getOwnerPost(params)
            .then(res => {
                console.log(res)
                setPost(res)
            })
            .catch(err => {
                setPostError(err)
            })
    }

    return (
        <Box className='box'>
            {post.length == 0 ? null :
                (
                    <Paper className='paper-owner' key={post.post_id}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt={post.name + " " + post.surname} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={post.title}
                                secondary={
                                    <React.Fragment>
                                        <Typography noWrap>{post.name + " " + post.surname} - {moment(post.date_post).format("DD/MM/YYYY")}</Typography>
                                        <Divider className="divider-owner" />
                                        <p className='descriptionComment"'>{post.description_post}</p>
                                        {post.result ? (
                                            <img alt="Minha Figura" src={post.result ? post.result : null} />
                                        ) : null}

                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                    </Paper>
                )}
        </Box >
    );
}

