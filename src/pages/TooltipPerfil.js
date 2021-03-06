import React, { useState, useEffect } from 'react';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { RiUserFollowFill } from "react-icons/ri";
import '../assets/css/tooltip.css';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import { FaUpload } from "react-icons/fa";
import ReactFileReader from 'react-file-reader';
import Button from '@material-ui/core/Button';
import { getClientById, putClient } from '../services/ClientService'

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


export default function TooltopPerfil() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    // PROFILE
    const [inputFileProfile, setInputProfile] = useState('Trocar foto de perfil:');
    const [inputFileResultProfile, setInputResultProfile] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const { user_id } = localStorage.getItem('user-id')


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

    const createProfile = () => {
        setOpen(true);
        loadInfo()
    }


    const toUpdate = (event) => {
        event.preventDefault()
        var nome = inputFileProfile
        var result = inputFileResultProfile
        putClient(user_id, {name,surname,email,nome,result})
        .then(() => {
            document.location.reload(true);
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        loadInfo()

    }, [])

    const loadInfo = () => {
        const user_id = localStorage.getItem('user-id')
        getClientById(user_id)
            .then(res => {
                console.log(res);
                setName(res.name)
                setSurname(res.surname)
                setEmail(res.email)
                setPass(res.senha)
            }).catch(err => console.log(err))
    }

    return (
        <div>
            <Tooltip title="Salvar Perfil" aria-label="add" arrow onClick={createProfile} >
                <Fab color="info" className='absolute cor-perfil'>
                    <RiUserFollowFill />
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
                        Atualizando Perfil
                    </Typography>
                    <form action="">
                        <div className='pt-2 pb-2'>
                            <TextField fullWidth label="nome" id="name" value={name} onChange={onChangeName} />
                        </div>
                        <div className='pt-2 pb-2'>
                            <TextField fullWidth label="sobrenome" id="surname" value={surname} onChange={onChangeSurname} />
                        </div>
                        <div className='pt-2 pb-2'>
                            <TextField fullWidth label="email" id="email" value={email} onChange={onChangeEmail} />
                        </div>
                        <div className='pt-2 pb-2'>
                            <span value={inputFileProfile}> {inputFileProfile} </span> &nbsp;&nbsp;
                            <label htmlFor="upload-photo">
                                <ReactFileReader handleFiles={handleFilesProfile} base64={true}>
                                    <Fab
                                        color="secondary"
                                        size="small"
                                        component="span"
                                        aria-label="add"
                                        variant="extended"
                                    >
                                        <FaUpload className="pr-2 pl-2" /> &nbsp; Upload photo
                                    </Fab>
                                </ReactFileReader>

                            </label>
                        </div>
                    </form>
                    <Button variant="contained" color="primary" onClick={toUpdate}>Atualizar</Button>
                </Box>
            </Modal>
        </div>
    );
}
