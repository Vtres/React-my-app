import React, { useState } from 'react';
import { GrAdd } from "react-icons/gr";
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import '../assets/css/tooltip.css';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import { create } from '../services/CommentService';

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
    var params = window.location.search.substr(1).split('&');
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const [message, setMessage] = useState('')


    const createClass = () => {
        setOpen(true);
    }

    const toSave = () => {
        console.log()
        var id_client = localStorage.getItem('user-id')
        var id_post = params[0];
        create({ message, id_post, id_client})
            .then(res => {
                console.log(res)
                setOpen(false);
                document.location.reload(true);

            })
            .catch(erro => { console.log(erro) })
    }

    const onChangeMessage = (event) => {
        setMessage(event.target.value)
    }

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Tooltip title="Responder Post" aria-label="add" arrow onClick={createClass} >
                <Fab  className='absolute create-comment'>
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
                    <h3 id="child-modal-title" className='text-center'>Responda este Post</h3>
                    <form action="">
                        <div className='pt-4 pb-4'>
                            <TextareaAutosize
                                aria-label="maximum height"
                                maxRows={7}
                                minRows={7}
                                placeholder="Resposta ao post"
                                value={message}
                                onChange={onChangeMessage}
                                style={{ width: '100%', maxHeight: '150px' }}
                            />
                        </div>
                    </form>
                    <Button variant="contained" color="primary" onClick={toSave}>Responder</Button>
                </Box>
            </Modal>
        </Breadcrumbs>
    );
}
