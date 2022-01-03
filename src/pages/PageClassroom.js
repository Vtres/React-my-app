import React from 'react';
import { useHistory } from "react-router-dom";
import Editorr from './Editor'
export default function Classroom() {
    const history = useHistory();

    const { id } = history.location.state
    return (
        <div className="row pb-3 justify-content-center box-library"> 
            {/* oi sala {id} */}
            <Editorr />
        </div>
        

    )
}