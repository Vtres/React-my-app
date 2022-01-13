import React, { useState, useEffect } from 'react';
import { show } from '../services/CommentService'
import './../assets/css/libraryCard.css';
import '../assets/css/forum.css';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core//ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import '../assets/css/forum.css';
import moment from 'moment';
import { Divider } from '@material-ui/core';

export default function Comment() {
  var params = window.location.search.substr(1).split('&');
  const [comment, setComment] = useState('')
  useEffect(() => {
    loadComment()
  }, [])

  const loadComment = () => {
    show(params)
      .then(res => {
        console.log(res)
        setComment(res)
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <Box className='box box-comment'>
      {comment.length == 0 ? null :
        comment.map(c => (
          <Paper className='paper-comment' key={c.comment_id}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={c.name + " " + c.surname} src={c.result ? c.result : null} />
              </ListItemAvatar>
              <ListItemText
                secondary={
                  <React.Fragment>
                    <Typography noWrap>{c.name + " " + c.surname} - {moment(c.date_post).format("DD/MM/YYYY")}</Typography>
                    <Divider className="divider-owner" />
                    <p className='descriptionComment"'>{c.message}</p>
                  </React.Fragment>
                }
              />
            </ListItem>
          </Paper>
        ))}
    </Box >
  )

}


