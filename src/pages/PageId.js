import React, { useEffect, useState } from 'react';
import Drawer from './Drawer';
import { searchRoom } from '../services/RoomService';
// 
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { BiDotsVerticalRounded } from "react-icons/bi";
import Button from '@material-ui/core/Button';
import Id from './id'

import './../assets/css/libraryCard.css';
import moment from 'moment';
export default function PageId() {

    return (
        <div >
            <Drawer />
            <Id/>           

        </div>
    )

}