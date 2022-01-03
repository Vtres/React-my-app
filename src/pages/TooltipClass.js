import React, { useState } from 'react';
import { GrAdd } from "react-icons/gr";
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import '../assets/css/tooltip.css';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { postClass } from '../services/ClassService'
import { useHistory } from "react-router-dom";

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


export default function SimpleTooltips() {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [title, setClassTile] = useState('');
  const [info, setInfo] = useState('Criar Aula')
  const history = useHistory();
  const [id_room,setIdRoom] = useState(history.location.state.id)
  const [type,setYpe] = useState(history.location.state.type)

  const createClass = () => {
    setOpen(true);
  }

  const onChangeTitle = (event) => {
    setClassTile(event.target.value)
  }

  const toSave = () => {
    if (title.length == 0) {
      setInfo('Informe um nome a sua aula')
    } else {
      postClass({title, id_room})
    }
  }
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Tooltip title="Criar Aula" aria-label="add" arrow onClick={createClass} >
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
        <Box sx={style}>
          <Typography className="title-perfil" id="modal-modal-title" variant="h6" component="h2">
            {info}
          </Typography>
          <form action="">
            {/* nome da aula */}
            <div className='pt-4 pb-4'>
              <TextField required fullWidth label="nome da aula" id="class" value={title} onChange={onChangeTitle} />
            </div>
          </form>
          <Button variant="contained" color="primary" onClick={toSave}>Criar Aula</Button>

        </Box>
      </Modal>
    </Breadcrumbs>
  );
}
