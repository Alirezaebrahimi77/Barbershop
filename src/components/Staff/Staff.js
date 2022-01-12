import React from 'react'
import styles from "./staff.module.css"
import {FaTimes} from "react-icons/fa"
import {FiChevronDown} from "react-icons/fi"
import SingleStaff from '../SingleStaff/SingleStaff'
import shop1 from "../../images/shop1.jpg"
import shop2 from "../../images/shop2.jpg"
import shop3 from "../../images/shop3.jpg"
const Staff = ({showModal, setShowModal}) => {

    const singleStaffData = [
        {
            id: 1,
            avatar: shop1,
            description: "Available today",
            name: "Derek L."

        },
        {
            id: 2,
            avatar: shop2,
            description: "from Oct 5th",
            name: "Brendan B."

        },
        {
            id: 3,
            avatar: shop3,
            description: "Available today",
            name: "Isaias G."

        },
        {
            id: 4,
            avatar: shop1,
            description: "Available today",
            name: "John D."

        },
        {
            id: 5,
            avatar: shop3,
            description: "from Oct 7th",
            name: "Daniel F.",

        },
        {
            id: 6,
            avatar: shop2,
            description: "from Oct 5th",
            name: "Ramos J.",

        },
    ]

    
    return (
        <div className={`${styles.staff} ${showModal ? styles.show : ""}`}>
        <div className={styles.staffHeader}>
            <p className={styles.staffHeaderText}>Choose a professional</p>
            <div className={styles.staffCloseWrapper}>
                <FaTimes style={{color: "#B7B9C2", cursor: "pointer"}} onClick={()=> setShowModal(!showModal)}/>
                <div className={`${styles.staffArrow} ${!showModal ? styles.invisible : ""}`}>
                    <FiChevronDown style={{fontSize: "80px"}}/>
                </div>
            </div>

        </div>
        <div className={styles.staffContent}>
            {
                singleStaffData && singleStaffData.map(item => (
                    <SingleStaff key={item.id} avatar={item.avatar} description={item.description} name={item.name}/>

                ))
            }


        </div>


    </div>
    )
}

export default Staff
