import React from 'react'
import { useEffect } from 'react'
const Logout = () => {
    useEffect(() => {
        sessionStorage.removeItem("jwt")
        window.location.href = "/"
    }, [])
    return (

        <></>
    )
}

export default Logout