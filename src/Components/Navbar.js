import React from 'react'
import { Button } from '@mui/material';
import styles from '../styles/Navbar.module.css'
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.NavbarLogo}>
                    <NavLink to="/" >VolcanoNerd</NavLink>
                </div>
                <div className={styles.NavBarLinks}>
                    <div className={styles.linkItem}><NavLink to="/search" >Search</NavLink></div>
                    <NavLink to={sessionStorage.getItem("jwt") == null ? '/Login' : '/Logout'}><Button style={{ height: '2.7em', width: '8em' }} className={styles.login} variant='contained'>{sessionStorage.getItem("jwt") == null ? 'Sign In' : 'Log Out'}</Button></NavLink>


                </div>


            </div>
        </div>
    )
}

export default Navbar