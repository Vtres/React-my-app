import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GrAdd } from "react-icons/gr";
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
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

import { MdClose } from "react-icons/md";

import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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
  display: "inline-block"
}));

export default function SimpleTooltips() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [openModalTopic, setOpenModalTopic] = React.useState(false);
  const closeModalTopic = () => setOpen(false);

  const [inputFileResult, setInputResult] = useState('');
  const [inputFileName, setInputName] = useState('');
  const [room, setRoom] = useState('');
  const [description, setDescription] = useState('');


  const onChangeRoom = (event) => {
    setRoom(event.target.value)
  }

  const onChangeDescription = (event) => {
    setDescription(event.target.value)
  }

  const createRoom = () => {
    setOpen(true);
  }

  const handleFiles = files => {
    setInputResult(files.base64)
    setInputName(files.fileList[0].name)
  }
  const toSave = (event) => {
    event.preventDefault()
    console.log(room)
    console.log(description)
    console.log(inputFileResult)
    console.log(inputFileName)
  }

  const searchTopic = () =>{
    setOpenModalTopic(true);
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

  function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <React.Fragment>
        <Button onClick={handleOpen} className="primaryStyle">Procurar Tópicos</Button>
        <Modal
          hideBackdrop
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 600, height:500 }}>
            <h3 id="child-modal-title" className='text-center'>Pesquise por tópicos</h3>
            <p id="child-modal-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <MdClose className='closeModal' onClick={handleClose} />
          </Box>
        </Modal>
      </React.Fragment>
    );
  }
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Tooltip title="Criar Sala" aria-label="add" arrow onClick={createRoom} >
        <Fab color="secondary" className='absolute'>
          <GrAdd />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className="title-perfil" id="modal-modal-title" variant="h6" component="h2">
            Criando Sala de estudos
          </Typography>
          <form action="">
            {/* nome da sala */}
            <div className='pt-4 pb-4'>
              <TextField required fullWidth label="nome da sala" id="room" value={room} onChange={onChangeRoom} />
            </div>
            {/* Description */}
            <TextareaAutosize
              aria-label="empty textarea"
              minRows={3}
              placeholder="Descrição da sala"
              value={description}
              onChange={onChangeDescription}
              style={{ width: '100%' }}
            />
            {/* upload foto */}
            <div className='pt-4 pb-4'>
              <span> Pesonalize sua sala com uma imagem que a represente: </span> &nbsp;&nbsp;
              <label htmlFor="upload-photo">
                <ReactFileReader handleFiles={handleFiles} base64={true}>
                  <Fab
                    color="secondary"
                    size="small"
                    component="span"
                    aria-label="add"
                    variant="extended"
                  >
                    <FaUpload className="pr-2 pl-2" /> &nbsp; Escolher Foto
                  </Fab>
                </ReactFileReader>

              </label>
            </div>
            {/* Escolher Topicos */}
            <span> Procure tópicos que represente o tema da sua sala, tópicos ajuda usuário a encontrar sua sala! </span> <br/>
            <ChildModal />
            {/* topics */}
            <div className='pt-4 pb-4'>
              <Paper
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  listStyle: 'none',
                  p: 0.5,
                  m: 0,
                }}
                component="ul"
              >
                {chipData.map((data) => {
                  return (
                    <ListItem key={data.key}>
                      <Chip
                        label={data.label}
                        onDelete={topicDelete(data)}
                      />
                    </ListItem>
                  );
                })}
              </Paper>
            </div>
          </form>
          <Button variant="contained" color="primary" onClick={toSave}>Criar</Button>
         
        </Box>
      </Modal>
    </Breadcrumbs>
  );
}
