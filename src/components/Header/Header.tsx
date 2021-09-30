import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';

import styles from './styles.module.less';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.visuallyHidden}>{'Самый крутой сайт'}</h1>
            <HeaderTop />
            {/* <HeaderSort /> */}
        </header>
    );
};

export default Header;
