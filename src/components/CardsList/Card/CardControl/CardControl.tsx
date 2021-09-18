import React from 'react';

import styles from './styles.module.less';

type CardControlProps = {
    KarmaControl: React.FC;
};

const CardControl: React.FC<CardControlProps> = ({ KarmaControl }) => {
    return (
        <div className={styles.controlWrapper}>
            <button className={styles.cardMenu} />
            <KarmaControl />
        </div>
    );
};

export default CardControl;
