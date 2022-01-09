import React, { useState } from 'react';
import { MdCloudUpload } from "react-icons/md";
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import '../assets/css/tooltip.css';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import '../assets/css/editor.css';
import '../assets/css/tooltip.css';
import { FaUpload } from "react-icons/fa";
import ReactFileReader from 'react-file-reader';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '3px solid #3F51B5',
    boxShadow: 24,
    p: 4,
};


export default function TooltipFile() {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);
    const [editorState, setEditor] = useState(EditorState.createEmpty())
    const [inputFileName, setInputName] = useState('');

    const onEditorStateChange = (editorState) => {
        setEditor(editorState);
        // event.target.value
    };
    const createClass = () => {
        setOpen(true);
    }

    const toCreate = () => {
        console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))
    }
    const handleFiles = files => {
        setInputName('Arquivo: ' + files.fileList[0].name + " escolhido")
        console.log(files.base64)
        console.log(files.fileList[0].name)
    }
    const toSave = () =>{
        console.log('ko')
    }
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <Tooltip title="Fazer Upload de arquivos" aria-label="add" arrow onClick={createClass} >
                <Fab color="secondary" className='create-file'>
                    <MdCloudUpload />
                </Fab>
            </Tooltip>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='pt-3'>
                        <span> {inputFileName ? inputFileName : 'Anexe arquivos para auxiliar no estudo'} </span> &nbsp;&nbsp;
                        <label htmlFor="upload-photo">
                            <ReactFileReader handleFiles={handleFiles} fileTypes='.doc, .pdf, .txt' base64={true} >
                                <Fab
                                    accept=".txt"
                                    color="secondary"
                                    size="small"
                                    component="span"
                                    aria-label="add"
                                    variant="extended"
                                >
                                    <FaUpload className="pr-2 pl-2" /> &nbsp; Escolher Arquivo
                                </Fab>
                            </ReactFileReader>
                        </label>
                        <br />
                        <Button className='mt-4' variant="contained" color="primary" onClick={toSave}>Salvar</Button>

                    </div>
                </Box>
            </Modal>
        </Breadcrumbs>
    );
}
