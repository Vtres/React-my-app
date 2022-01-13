import React, { useState } from 'react';
import { GrAdd } from "react-icons/gr";
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import '../assets/css/tooltip.css';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ReactFileReader from 'react-file-reader';
import { FaUpload } from "react-icons/fa";
import { create } from '../services/PostService';

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

export default function TooltipForum() {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('')
  const [inputFileName, setInputName] = useState('');
  const [inputFileResult, setInputResult] = useState('');

  const handleFiles = files => {
    setInputResult(files.base64)
    setInputName(files.fileList[0].name)
  }
  const createClass = () => {
    setOpen(true);
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
  }
  const toSave = () => {
    console.log()
    var id_user = localStorage.getItem('user-id')
    var name = inputFileName
    var result = inputFileResult
    console.log({ id_user, title, description, name, result })
    create({ id_user, title, description, name, result })
      .then(res => {
        console.log(res)

        setOpen(false);
        document.location.reload(true);

      })
      .catch(erro => { console.log(erro) })
  }

  const onChangeDescription = (event) => {
    setDescription(event.target.value)
  }

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Tooltip title="Criar Post" aria-label="add" arrow onClick={createClass} >
        <Fab color="secondary" className='absolute create-class'>
          <GrAdd />
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 600, height: 500 }}>
          <h3 id="child-modal-title" className='text-center'>Crie post no fórum</h3>
          <form action="">
            <div className='pt-4 pb-4'>
              <TextField required fullWidth label="titulo do post" id="room" value={title} onChange={onChangeTitle} />
            </div>
            <div className='pb-4'>
              <TextareaAutosize
                aria-label="maximum height"
                maxRows={4}
                minRows={3}
                placeholder="Descrição do post"
                value={description}
                onChange={onChangeDescription}
                style={{ width: '100%', maxHeight: '150px' }}
              />
            </div>
            <div className='pt-4 pb-4'>
              <span> {inputFileName ? inputFileName : 'Você pode subir 1 arquivo para auxiliar na dúvida:'} </span> &nbsp;&nbsp;
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
          </form>
          <Button variant="contained" color="primary" onClick={toSave}>Criar Post</Button>
        </Box>
      </Modal>
    </Breadcrumbs>
  );
}
