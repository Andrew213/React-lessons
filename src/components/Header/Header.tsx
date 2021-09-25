import React from 'react';
import Sort from './Search/Search';
import Search from './Search/Search';
import Thread from './Thread/Thread';

import styles from './styles.module.less';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.visuallyHidden}>{'Самый крутой сайт'}</h1>
            <Search />
            <Thread />
            <Sort />
        </header>
    );
};

export default Header;
