import React from "react"
import styles from '../../scss/style.scss'
import { Card } from "./Card/Card"

function CardsList() {
    return (
        <ul className={styles.CardsList}>
            <Card/>
        </ul>
    )
}


export default CardsList