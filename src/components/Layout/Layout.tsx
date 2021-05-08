import React, { useState } from 'react';
import styles from '../../scss/style.scss'

interface ILayoutProps {
    children?: React.ReactNode;
}

function Layout({ children }: ILayoutProps) {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    )
}

export default Layout