import React from 'react'
import { useParams } from "react-router-dom";

const Volcano = () => {
    let params = useParams();
    return (
        <div>{params.volcanoID}</div>
    )
}

export default Volcano