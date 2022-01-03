import React from 'react';
import Classroom from './Classroom';
import Drawer from './Drawer';
import TooltipClass from './TooltipClass'
import { useHistory } from "react-router-dom";

export default function PageClass() {
    const history = useHistory();

    const { id } = history.location.state
    const {type} = history.location.state

    return (
        <div>
            <Drawer />
            <Classroom />
            {type == 'D'? <TooltipClass />  : null}
        </div>
    )

}