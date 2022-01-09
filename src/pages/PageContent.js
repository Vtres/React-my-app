import React from 'react';
import Drawer from './Drawer';
import Content from './Content';

import { useHistory } from "react-router-dom";
import Editorr from './Editor'
import TooltipContent from './TooltipContent';
import TooltipFile from './TooltipFile';
import ContentFile from './ContentFile'
export default function ContentClass() {

    return (
        <div>
            <Drawer />
            <Content />
            <ContentFile/>
            {localStorage.getItem('type')==='D' ? <TooltipContent /> : null}
            {localStorage.getItem('type')==='D' ? <TooltipFile /> : null}

            {/* <TooltipForum /> */}
        </div>


    )
}