import React, { useState } from 'react';
import { GrAdd } from "react-icons/gr";
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import '../assets/css/tooltip.css';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import '../assets/css/editor.css';
import { create } from '../services/ContentService';

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
    const [param, setParam] = React.useState(window.location.search.substr(1).split('&'));
    const [type, setType] = React.useState(localStorage.getItem('type'));
    const [editorState, setEditor] = useState(EditorState.createEmpty())

    const handleClose = () => setOpen(false);
    const onEditorStateChange = (editorState) => {
        setEditor(editorState);
        // event.target.value
    };
    const createClass = () => {
        setOpen(true);
    }

    const toCreate = () => {
        var action = 'N';
        var text = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        var id_class = param[0]
        create({text,id_class,action})
            .then(res=>{
                console.log(res)
                setOpen(false)
                window.location.reload();
            })
            .catch(erro =>{
                console.log(erro)
            })
    }
    const toJoin=()=>{
        var action = 'J';
        var text = draftToHtml(convertToRaw(editorState.getCurrentContent()))
        var id_class = param[0]
        create({text,id_class,action})
            .then(res=>{
                console.log(res)
                setOpen(false)
                window.location.reload();
            })
            .catch(erro =>{
                console.log(erro)
            })
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

                    <Button variant="contained" color="primary" onClick={() => {
                        if (window.confirm('Essa opção salva esse conteúdo e substitui todo conteúdo preexistente!')) {
                            toCreate()
                        }
                    }}>Finalizar e Salvar</Button> &nbsp;&nbsp;&nbsp;
                    <Button variant="contained" color="primary" onClick={() => {
                        if (window.confirm('Essa opção irá juntar esse conteúdo com o todo conteúdo preexistente!')) {
                            toJoin()
                        }
                    }}>Juntar esse Conteúdo</Button>
                </Box>
            </Modal>
        </Breadcrumbs>
    );
}
