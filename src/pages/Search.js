import React, { useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import { FaSearch } from "react-icons/fa";
import '../assets/css/search.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



export default function SearchAppBar() {
  const classes = useStyles();
  const [id_room, setIdRoom] = useState('')

  const popover = (event) => {
    if (event.key === 'Enter') {
      if(!isNaN(parseFloat(id_room)) && isFinite(id_room)){
        console.log('enter')
        // history.push('/room-id', {id_room})
        localStorage.setItem('room-id', id_room)
        window.location.href = "http://localhost:3000/room-id/?"+id_room;
      }
    }
  }

  const onChangeSearch=(event)=>{
    setIdRoom(event.target.value)
  }
  
  return (
    <div className={classes.root}>
      <div className={classes.search} >
        <div className={classes.searchIcon}>
          <FaSearch />
        </div>
        <InputBase
          placeholder="Pesquisar salas (ID)"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          value={id_room}
          onChange={onChangeSearch}
          onKeyDown={popover}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>   
    </div>
  );
}
