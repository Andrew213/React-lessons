import React from 'react';
import cn from 'classnames';

import style from './styles.module.less';

type DropDownProps = {
    trigger: React.ReactNode;
    children: React.ReactNode;
    isOpen?: boolean;
    onOpen?: () => void;
    onClose?: () => void;
    onTriggerClick?: (isOpen: boolean) => void;
    className?: string;
    triggerActive?: string;
};

const noop = () => {};

const DropDown: React.FC<DropDownProps> = ({
    trigger,
    children,
    isOpen,
    onClose = noop,
    onOpen = noop,
    className,
    onTriggerClick,
    triggerActive,
}) => {
    const [isDropDownOpen, setIsDropDownOpen] = React.useState<boolean>(isOpen);

    React.useEffect(() => {
        setIsDropDownOpen(isOpen);
    }, [isOpen]);

    const rootEl = React.useRef(null);

    React.useEffect(() => {
        isDropDownOpen ? onOpen() : onClose();
    }, [isDropDownOpen, onClose, onOpen]);

    const handleOpen = React.useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            if (isOpen === undefined) {
                setIsDropDownOpen(!isDropDownOpen);
            }
        },
        [isDropDownOpen, isOpen]
    );

    React.useEffect(() => onTriggerClick && onTriggerClick(isDropDownOpen), [isDropDownOpen, onTriggerClick]);
    React.useEffect(() => {
        const onClick = (e: MouseEvent) => rootEl.current.contains(e.target) || setIsDropDownOpen(false);
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);
    const handleOnItemClick = React.useCallback(() => setIsDropDownOpen(false), []);

    return (
        <div className={style.conatainer}>
            <div ref={rootEl} className={style.trigger} onClick={handleOpen}>
                {trigger}
            </div>
            {isDropDownOpen && (
                <div className={style.listContainer}>
                    <div className={cn(style.list, className)} onClick={handleOnItemClick}>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropDown;
