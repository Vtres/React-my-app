import React from 'react';
import Drawer from './Drawer';
import Content from './Content';

import { useHistory } from "react-router-dom";
import Editorr from './Editor'
import TooltipContent from './TooltipContent';
export default function ContentClass() {

    return (
        <div>
            <Drawer />
            <Content />
            {localStorage.getItem('type')==='D' ? <TooltipContent /> : null}
            {/* <TooltipForum /> */}
        </div>


    )
}