import React from "react"
import { SearchBlock } from "./SearchBlock/SearchBlock"
import SortBlock from "./sortBlock/SortBlock"
import styles from '../../scss/style.scss'
import { ThreadTitle } from "./ThreadTitle/ThreadTitle"

function Header() {
    return (
        <header className={styles.header}>
            <SearchBlock />
            <ThreadTitle />
            <SortBlock />
        </header>
    )
}

export default Header