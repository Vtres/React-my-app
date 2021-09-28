import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GrAdd } from "react-icons/gr";
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { RiChatNewLine, RiUserFollowFill } from "react-icons/ri";
import '../assets/css/tooltip.css';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
  perfil:{
    backgroundColor: '#f44336',
    color: '#FFF',
  },
}));

export default function SimpleTooltips() {
  const classes = useStyles();
  const url = window.location.href;

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {(() => {
        if (url.includes('/dashboard')) {
          return (
            <Tooltip title="Criar Sala" aria-label="add" arrow>
              <Fab color="secondary" className='absolute'>
                <GrAdd />
              </Fab>
            </Tooltip>
          )
        } else if (url.includes('/perfil')) {
          return (
            <Tooltip title="Salvar Perfil" aria-label="add" arrow>
              <Fab color="info" className='absolute cor-perfil'>
                <RiUserFollowFill />
              </Fab>
            </Tooltip>
          )
        } else if (url.includes('/forum')) {
          return (
            <Tooltip title="Criar Post" aria-label="add" arrow>
              <Fab color="primary" className='absolute'>
                <RiChatNewLine />
              </Fab>
            </Tooltip>
          )
        }
      })()}
    </Breadcrumbs>
  );
}
