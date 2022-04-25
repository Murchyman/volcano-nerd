import React from 'react'
import { Button } from '@mui/material';
import styles from '../styles/Navbar.module.css'
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.NavbarLogo}>
                    <NavLink to="/" >🌋 VolcanoNerd.com</NavLink>
                </div>
                <div className={styles.NavBarLinks}>

                    <div className={styles.linkItem}><NavLink to="/" >Home</NavLink></div>
                    <div className={styles.linkItem}><NavLink to="/search" >Search</NavLink></div>
                    <div className={styles.linkItem}><NavLink to="/login" ><Button variant='contained'>{sessionStorage.getItem("jwt") == null ? 'Sign In' : 'Log Out'}</Button></NavLink></div>

                </div>
            </div>
        </div>
    )
}

export default Navbar