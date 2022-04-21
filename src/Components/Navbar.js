import React from 'react'
import styles from '../styles/Navbar.module.css'
import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.navbar}>
                <div className={styles.NavbarLogo}>
                    🌋 VolcanoNerd.com
                </div>
                <div className={styles.NavBarLinks}>

                    <div className={styles.linkItem}><NavLink to="/" >Home</NavLink></div>
                    <div className={styles.linkItem}><NavLink to="/search" >Search</NavLink></div>
                    <div className={styles.linkItem}><NavLink to="/login" >Login</NavLink></div>

                </div>
            </div>
        </div>
    )
}

export default Navbar