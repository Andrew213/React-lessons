import React from "react"
import styles from '../../scss/style.scss'


interface IContentProps {
    children?: React.ReactNode
}

function Content({ children }: IContentProps) {
    return (
        <main className={styles.content}>
            {children}
        </main>
    )
}

export default Content

