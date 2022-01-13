import React from 'react';
import Drawer from './Drawer';
import Comment from './Comment';
import OwnerPost from './OwnerPost'
import TooltipComment from './TooltipComment'
export default function ContentClass() {

    return (
        <div>
            <Drawer />
            <OwnerPost />
            <Comment />
            <TooltipComment/>
        </div>


    )
}