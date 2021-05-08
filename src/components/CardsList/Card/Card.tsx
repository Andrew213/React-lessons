import React from "react"
import styles from '../../../scss/style.scss'
import { CardContent } from "./CardContent"
import { CardControl } from "./CardControl"
import { CardHeader } from "./CardHeader"


export function Card() {
    return (
        <li className={styles.card}>
            <CardHeader/>
            <CardContent/>
            <CardControl/>
        </li>
    )
}



