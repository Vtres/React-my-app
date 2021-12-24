import React from 'react';

import Drawer from './Drawer';
import LibraryCard from './LibraryCards';
import TooltipRoom from './TooltipRoom'

export default function Dashboard() {

    return (
        <div>
            <Drawer />
            <LibraryCard />
            <TooltipRoom />
        </div>

    )
}