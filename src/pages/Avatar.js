import React, { useState, useEffect } from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from "react-router-dom";
import Link from '@material-ui/core/Link';
import { NavLink } from 'react-router-dom';
import { imgClient } from '../services/ClientService';
import { MdAccountCircle } from "react-icons/md";

const StyledBadge = withStyles((theme) => ({
    badge: {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: '$ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}))(Badge);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        cursor: 'pointer',
    },
}));

export default function BadgeAvatars() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [img, setImg] = React.useState('')
    useEffect(() => {
        loadAvatar()
    }, [])

    const loadAvatar = () => {
        const user_id = localStorage.getItem('user-id')
        imgClient(user_id)
        .then(res => {
            setImg(res);
        }).catch(err => console.log(err))
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {

        setAnchorEl(null);
    };

    const exitAplicattion =()=>{
        console.log('entrei na funcao do avatar')
        localStorage.setItem('user-token',"false")
        // history.push('/')
    }

    return (
        <div className={classes.root}>

            <StyledBadge
                overlap="circular"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                variant="dot"
                title='Perfil'
            >

                <Avatar alt="Perfil" src={img? img.result: <MdAccountCircle/>} className={classes.large} onClick={handleClick} />
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem>
                        <Link href="/perfil" className='link'>
                            Perfil
                        </Link>
                    </MenuItem>
                    <MenuItem >
                        {/* <NavLink to="/" className="link" onClick={exitAplicattion}> Sair </NavLink> */}
                        <Link href="/" className='link'onClick={exitAplicattion} >
                            Sair
                        </Link>
                    </MenuItem>
                </Menu>

            </StyledBadge>
        </div>
    );
}
