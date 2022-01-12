import React, { useState } from 'react';
import { MdCloudUpload } from "react-icons/md";
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import '../assets/css/tooltip.css';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import draftToHtml from 'draftjs-to-html';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import '../assets/css/editor.css';
import '../assets/css/tooltip.css';
import { FaUpload } from "react-icons/fa";
import ReactFileReader from 'react-file-reader';
import { createFile } from '../services/ContentService';

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
    const [inputFileName, setInputName] = useState('');
    const [nameFile, setNameFile] = useState('')
    const [result, setResult] = useState('')
    const [param, setParam] = React.useState(window.location.search.substr(1).split('&'));

    const createClass = () => {
        setOpen(true);
    }

    const toCreate = () => {
        

    }
    const handleFiles = files => {
        setInputName('Arquivo: ' + files.fileList[0].name + " escolhido")
        setResult(files.base64)
        setNameFile(files.fileList[0].name)
    }
    const toSave = () =>{
        var id_class = param[0]
        createFile({id_class,nameFile,result})
            .then(res=>{
                setOpen(false)
                window.location.reload();
            })
            .catch(erro =>{
                console.log(erro)
            })
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
