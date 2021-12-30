import React from 'react';
import { useHistory } from "react-router-dom";

export default function Classroom() {
    const history = useHistory();

    const { id } = history.location.state
    return (
        <div className="row pb-3 justify-content-center box-library"> 
            oi sala {id}
        </div>


    )
}