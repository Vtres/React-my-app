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
import Editorr from './Editor';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import '../assets/css/editor.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    bgcolor: 'background.paper',
    border: '3px solid #3F51B5',
    boxShadow: 24,
    p: 4,
};


export default function TooltipContent() {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const [editorState, setEditor] = useState(EditorState.createEmpty())
    const onEditorStateChange = (editorState) => {
      setEditor(editorState);
      // event.target.value
    };
    const createClass = () => {
        setOpen(true);
    }

    //   const toSave = () => {
    //     if (title.length == 0) {
    //       setInfo('Informe um nome a sua aula')
    //     } else {
    //       postClass({title, id_room})
    //       document.location.reload(true);
    //     }
    //   }
    const toCreate = () => {
        console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    }
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Tooltip title="Criar Conteúdo" aria-label="add" arrow onClick={createClass} >
                <Fab color="secondary" className='absolute create-content'>
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
                    <div className='editor'>
                        <Editor
                            editorState={editorState}
                            toolbarClassName="toolbarClassName"
                            wrapperClassName="wrapperClassName"
                            editorClassName="editorClassName"
                            className='style-menu-editor'
                            onEditorStateChange={onEditorStateChange}
                        />
                        
                    </div>

                    <Button variant="contained" color="primary" onClick={toCreate}>Finalizar e Salvar</Button>

                </Box>
            </Modal>
        </Breadcrumbs>
    );
}
