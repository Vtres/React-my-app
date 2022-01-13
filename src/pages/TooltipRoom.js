import React, { useState} from 'react';
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
import { index, topicCreate } from '../services/TopicService';
import { create } from '../services/RoomService';
import { MdClose } from "react-icons/md";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

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
    const topic = []
    event.preventDefault()
    chipData.map(data => {
      topic.push(data.name)
    })

    const name = room
    const description_room = description
    const nome = inputFileName
    const result = inputFileResult
    const id_user = localStorage.getItem('user-id')
    const id_public = true
    create({name, description_room, nome, result, id_user, id_public, topic})
      .then(res => {
        if(res.message == 'OK'){
          setOpen(false);
          document.location.reload(true);
        }
      })
      .catch(err => console.log(err))
  }

  // Tópicos
  const [chipData, setChipData] = React.useState([]);
  const allTopic = []

  const topicDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.topic_id !== chipToDelete.topic_id));
  };

  function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const [topicData, setTopicData] = React.useState([]);
    const [nameTopic, setNameTopic] = React.useState('')
    const [labelInfo, setLabelInfo] = React.useState("Informe o nome do tópico para criar");
    const topicos = []
    const handleOpen = () => {
      setOpen(true);
      loadTopic();
    };
    const handleClose = () => {
      setOpen(false);
      setChipData(allTopic)
    };

    const loadTopic = () => {
      index()
        .then(res => {
          // console.log(res)
          res.map(data => {
            topicos.push(data)
          })
          setTopicData(topicos)
        })
        .catch(err => console.log(err))
    }

    const onChangeNameTopic = (event) => {
      setNameTopic(event.target.value)
    }

    const toCreated = (event) => {
      event.preventDefault()
      topicCreate(nameTopic)
        .then(res => {
          if (res == 201) {
            loadTopic()
            setLabelInfo('Procure esse tópico na lista de cima')
          }
        })
        .catch(err => setLabelInfo(err.response.data.error))
    }

    const topicSelected = (chipToSelected) => () => {
      allTopic.push(chipToSelected)
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
          <Box sx={{ ...style, width: 600, height: 500 }}>
            <h3 id="child-modal-title" className='text-center'>Pesquise por tópicos</h3>
            <div>
              <p>Escolha entre os tópicos existentes:</p>
              <Paper
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                  listStyle: 'none',
                  p: 0.5,
                  m: 0,
                }}
                className="paperStyle"
                component="ul"
              >
                {topicData.map((data) => {
                  return (
                    <ListItem key={data.topic_id}>
                      <Chip
                        label={data.name}
                        onClick={topicSelected(data)}
                      />
                    </ListItem>
                  );
                })}
              </Paper>
            </div>
            <div>
              <p> Não é o que busca, você pode criar seus tópicos:</p>
              <TextField required fullWidth label={labelInfo} id="topico" value={nameTopic} onChange={onChangeNameTopic} />
              <Button className='mt-2' variant="contained" color="primary" onClick={toCreated}>Criar</Button>
            </div>

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
              maxRows={4}
              minRows={3}
              placeholder="Descrição da sala"
              value={description}
              onChange={onChangeDescription}
              style={{ width: '100%',maxHeight:'150px' }}
            />
            {/* upload foto */}
            <div className='pt-4 pb-4'>
              <span> {inputFileName ? inputFileName : 'Pesonalize sua sala com uma imagem que a represente:'} </span> &nbsp;&nbsp;
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
            <span> Procure tópicos que represente o assunto da sua sala, tópicos ajuda usuários a encontrar sua sala! </span> <br />
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
                {chipData.length > 0 ? (
                  chipData.map((data) => {
                    return (
                      <ListItem key={data.topic_id}>
                        <Chip
                          label={data.name}
                          onDelete={topicDelete(data)}
                        />
                      </ListItem>
                    );
                  })
                ) : (
                  <div></div>
                )}
              </Paper>
            </div>
          </form>
          <Button variant="contained" color="primary" onClick={toSave}>Criar</Button>

        </Box>
      </Modal>
    </Breadcrumbs>
  );
}
