import React from 'react'
import styles from "./Header.module.css"
import {VscMenu} from "react-icons/vsc"
const Header = () => {
    return (
        <header className={styles.header}>
            <VscMenu style={{fontSize: "1.4rem", cursor: "pointer", fontWeight: "bold", color: "#100D0B"}}/>            
            
            
        </header>
    )
}

export default Header
