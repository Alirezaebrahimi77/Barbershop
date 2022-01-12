import React from 'react'
import styles from "./staff.module.css"
import {FaTimes} from "react-icons/fa"
const Staff = ({showModal, setShowModal}) => {
    return (
        <div className={`${styles.staff} ${showModal ? styles.show : ""}`}>
        <div className={styles.staffHeader}>
            <p className={styles.staffHeaderText}>Choose a professional</p>
            <div className={styles.staffCloseWrapper}>
                <FaTimes style={{color: "#B7B9C2", cursor: "pointer"}} onClick={()=> setShowModal(!showModal)}/>
            </div>

        </div>


    </div>
    )
}

export default Staff
