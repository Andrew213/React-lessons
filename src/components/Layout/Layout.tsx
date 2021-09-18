import React, { useState } from 'react';
import styles from './styles.module.less';

type LayoutProps = {
    children?: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return <div className={styles.layout}>{children}</div>;
};

// function Layout({ children }: ILayoutProps) {
//     return <div className={styles.layout}>{children}</div>;
// }

export default Layout;
