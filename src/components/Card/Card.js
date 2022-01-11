import React from 'react'
import styles from "./Card.module.css"
const Card = ({img, title, address, logo}) => {
    return (
        <aritcle className={styles.article}>
            <div className={styles.cardImage}>
                <img src={img} alt={title} />
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardContentHeader}>
                    <div className={styles.cardContentLeft}>
                        <img src={logo} alt={title} />

                    </div>
                    <div className={styles.cardContentRight}>
                        <p className={styles.cardTitle}>{title}</p>
                        <p className={styles.cardAddress}>{address}</p>

                    </div>
                     
                </div>
                <button className={styles.cardButton}>Book now</button>

            </div>
            
        </aritcle>
    )
}

export default Card
