import React from 'react'
import styles from "./singleStaff.module.css"
const SingleStaff = ({avatar, description, name}) => {
    return (
        <div className={styles.singleStaffContainer}>

            <div className={styles.avatarContainer}>
                <img src={avatar} alt={description} />

            </div>
            <h3 className={styles.name}>{name}</h3>
            <p className={styles.description}>{description}</p>
            <hr className={styles.hr}/>
            <a className={styles.about}>About {name}</a>

            
        </div>
    )
}

export default SingleStaff
