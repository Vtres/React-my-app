import React, { useState } from 'react';

import Drawer from './Drawer';
import LibraryCard from './LibraryCards';

export default function Dashboard({ history }) {

    return (
        <div>
            <Drawer />
            <LibraryCard />
        </div>

    )
}