import React from 'react';

import Drawer from './Drawer';
import Perfil from './Perfil';
import TooltipPerfil from './TooltipPerfil'

export default function Dashboard() {

    return (
        <div>
            <Drawer />
            <Perfil />
            <TooltipPerfil />
        </div>

    )
}