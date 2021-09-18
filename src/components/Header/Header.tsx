import React from 'react';
import SearchBlock from './SearchBlock/SearchBlock';
import SortBlock from './SortBlock/SortBlock';
import ThreadTitle from './ThreadTitle/ThreadTitle';

import styles from './styles.module.less';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.visuallyHidden}>{'Самый крутой сайт'}</h1>
            <SearchBlock />
            <ThreadTitle />
            <SortBlock />
        </header>
    );
};

export default Header;
