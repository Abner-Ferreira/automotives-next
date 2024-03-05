import React from 'react'
import styles from './footer.module.css'

export default function Footer() {

    const data = new Date()

    const ano = data.getFullYear()

    
    return (
        <>
            <div className={styles.copy}>
                <p>Copyright © BASF SA {ano}</p>
                <p><a href="https://shop.basf.com/PrivacyPolicyHome/" target='_blank' rel="noreferrer">Política de Privacidade</a></p>
            </div>
        </>
    )
}
