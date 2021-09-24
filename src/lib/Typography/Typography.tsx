import React from 'react';
import cn from 'classnames';

import styles from './styles.module.less';
import classNames from 'classnames';

type Tsizes = 28 | 20 | 16 | 14 | 12 | 10;

type TypographyProps = {
    As?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'div';
    size: Tsizes;
    mobileSize?: Tsizes;
    tabletSize?: Tsizes;
    desktopSize?: Tsizes;
};

const Typography: React.FC<TypographyProps> = props => {
    const { As = 'span', children, size, mobileSize, tabletSize, desktopSize } = props;

    const slasses = cn(
        styles[`s${size}`],
        { [styles[`m${mobileSize}`]]: mobileSize },
        { [styles[`t${tabletSize}`]]: tabletSize },
        { [styles[`d${desktopSize}`]]: desktopSize }
    );

    return <As className={classNames}>{children}</As>;
};
