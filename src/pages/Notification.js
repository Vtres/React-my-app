import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import './../assets/css/notification.css'
import { IoMdMail } from "react-icons/io";
import Tooltip from '@material-ui/core/Tooltip';

export default function PrimarySearchAppBar() {
    return (
        <Tooltip arrow title="Mensagens">
            <IconButton aria-label="show 4 new mails"  >
                <Badge badgeContent={100} arrow className="color-notification" color='secondary'  >
                    <IoMdMail />
                </Badge>
            </IconButton>
        </Tooltip>
    );
}
