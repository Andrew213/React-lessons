import React from 'react';
import styles from './styles.module.less';

type ContentProps = {
    children?: React.ReactNode;
};

const Content: React.FC<ContentProps> = ({ children }) => {
    return <main className={styles.content}>{children}</main>;
};

export default Content;
