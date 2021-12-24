import React from 'react';

import Drawer from './Drawer';
import Forum from './Forum';
import TooltipForum from './TooltipRoom'

export default function Dashboard() {

    return (
        <div>
            <Drawer />
            <Forum />
            <TooltipForum />
        </div>

    )
}