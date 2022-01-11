import React from 'react'
import Header from '../components/Header/Header'
import styles from "./Layout.module.css"
const Layout = ({children}) => {
    return (
        <>
            <Header />
            {children}
            
        </>
    )
}

export default Layout
