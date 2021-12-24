import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GrAdd } from "react-icons/gr";
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { RiChatNewLine, RiUserFollowFill } from "react-icons/ri";
import '../assets/css/tooltip.css';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { FaUpload } from "react-icons/fa";
import ReactFileReader from 'react-file-reader';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import { styled } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  perfil: {
    backgroundColor: '#f44336',
    color: '#FFF',
  },
}));
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '3px solid #3F51B5',
  boxShadow: 24,
  p: 4,
};

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
  listStyleType: "none",
  display:"inline-block"
}));

export default function SimpleTooltips() {
  const classes = useStyles();
  const url = window.location.href;
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [inputFileResult, setInputResult] = useState('');
  const [inputFileName, setInputName] = useState('Pesonalize sua sala com uma imagem que a represente:');
  const [room, setRoom] = useState('');

  const onChangeRoom = (event) => {
    setRoom(event.target.value)
  }
  // PROFILE
  const [inputFileProfile, setInputProfile] = useState('Pesonalize sua sala com uma imagem que a represente:');
  const [inputFileResultProfile, setInputResultProfile] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');

  const handleFilesProfile = files => {
    setInputResultProfile(files.base64)
    setInputProfile(files.fileList[0].name)
  }
  const onChangeName = (event) => {
    setName(event.target.value)
  }

  const onChangeSurname = (event) => {
    setSurname(event.target.value)
  }

  const onChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const onChangePass = (event) => {
    setPass(event.target.value)
  }

  const createRoom = () => {
    setOpen(true);
  }
  const createProfile = () => {
    setOpen(true);
  }
  const createForum = () => {
    console.log('cliquei')
  }

  const handleFiles = files => {
    setInputResult(files.base64)
    setInputName(files.fileList[0].name)
  }
  const toSave = (event) => {
    event.preventDefault()
    console.log(room)
    console.log(inputFileResult)
    console.log(inputFileName)
  }

  const toUpdate = (event) => {
    event.preventDefault()
  }

  // Tópicos
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
    { key: 5, label: 'CodeIgniter' },
    { key: 6, label: 'ReactNative' },
    { key: 7, label: 'C++' },
    { key: 8, label: 'Python' },

  ]);

  const topicDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };


  return (
    <Breadcrumbs aria-label="breadcrumb">
      {(() => {
        if (url.includes('/dashboard')) {

          return (
            <div>
              <Tooltip title="Criar Sala" aria-label="add" arrow onClick={createRoom} >
                <Fab color="secondary" className='absolute'>
                  <GrAdd />
                </Fab>
                </Tooltip>

              
            </div>
          )
        } else if (url.includes('/perfil')) {
          return (
            <div>
              
            </div>
          )
        } else if (url.includes('/forum')) {
          return (
            <Tooltip title="Criar Post" aria-label="add" arrow onClick={createForum}>
              <Fab color="primary" className='absolute'>
                <RiChatNewLine />
              </Fab>
            </Tooltip>
          )
        }
      })()}
    </Breadcrumbs>
  );
}
