import React from 'react';
import Info from './Info/Info';
import Profile from './Search/Profile/Profile';
import Search from './Search/Search';

import style from './styles.module.less';

const HeaderTop: React.FC = () => {
    return (
        <div className={style.headerTopContainer}>
            <Info />
            <Search />
        </div>
    );
};

export default HeaderTop;
