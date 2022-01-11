import React from 'react'
import styles from "./Home.module.css"
import {FiMapPin} from "react-icons/fi"
import {AiOutlineSearch} from "react-icons/ai"
import Card from '../../components/Card/Card'
import logo1 from "../../images/logo.png"
import logo2 from "../../images/logo2.png"
import logo3 from "../../images/logo3.png"
import shop1 from "../../images/shop1.jpg"
import shop2 from "../../images/shop2.jpg"
import shop3 from "../../images/shop3.jpg"


const cardData = [
    {
        id: 1,
        img: shop1,
        address: "66 Rivington Street, New York",
        logo: shop3,
        title: "Rosemont Barbershop"
    },
    {
        id: 2,
        img: shop2,
        address: "66 Rivington Street, New York",
        logo: shop1,
        title: "Rosemont Barbershop"
    },
    {
        id: 3,
        img: shop3,
        address: "66 Rivington Street, New York",
        logo: shop1,
        title: "Rosemont Barbershop"
    },
    {
        id: 4,
        img: shop2,
        address: "66 Rivington Street, New York",
        logo: shop1,
        title: "Rosemont Barbershop"
    },
]
const Home = () => {
    return (
        <main className={styles.main}>
            <div className={styles.intro}>

                <h1>It's time to book <br/> your next haircut</h1>

            </div>

            <div className={styles.contectWrapper}>

                <div className={styles.contentHeader}>


                    <div className={styles.featureItem}>
                        <span className={styles.featureItemText}>Kokkola</span>
                        <FiMapPin style={{fontSize: ".9rem", marginLeft: "3px"}}/>
                    </div>

                    <div className={styles.featureItem}>
                        <span className={styles.featureItemText}>Search</span>
                        <AiOutlineSearch style={{fontSize: ".9rem", marginLeft: "3px"}}/>
                    </div>
                    


                </div>

                <div className={styles.cardWrapper}>

                    {cardData && cardData.map(c => (
                        <Card key={c.id} img={c.img} address={c.address} title={c.title} logo={c.logo}/>

                    ))}

                </div>



            </div>
            
        </main>
    )
}

export default Home

