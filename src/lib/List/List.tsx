import React from 'react';
import cn from 'classnames';

import style from './styles.module.less';

export type ListItemType = {
    id: string;
    text: string;
    As?: 'a' | 'li' | 'button' | 'div';
    href?: string;
    component?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type ListProps = {
    // list: ListItemType[];
    id: string;
    text: string;
    className?: string;
    As?: 'a' | 'li' | 'button' | 'div';
    href?: string;
    component?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    onClick?: (id: string) => void;
    onMouseEnter?: (id?: string) => void;
};

const List: React.FC<ListProps> = ({
    As = 'div',
    text,
    className,
    id,
    href,
    component: Component,
    onClick,
    onMouseEnter,
}) => {
    const handleClick = React.useCallback(() => onClick && onClick(id), [id, onClick]);
    const handleMouseEnter = React.useCallback(() => onMouseEnter && onMouseEnter(id ? id : undefined), [
        id,
        onMouseEnter,
    ]);

    return (
        <As className={className} onClick={handleClick} key={id} href={href} onMouseEnter={handleMouseEnter}>
            {Component && <Component />}
            <p className={cn({ [style.text]: Component })}>{text}</p>
        </As>
    );
};

export default List;
