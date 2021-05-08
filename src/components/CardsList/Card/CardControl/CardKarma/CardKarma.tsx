import React from 'react';
import styles from '../../CardControl/cardcontrol.scss';

export function CardKarma() {
  return (
    <div className={styles.cardControl__karma}>
      <button className={styles.cardControl__karma_up}></button>
      <span className={styles.cardControl__karma_text}>145</span>
      <button className={styles.cardControl__karma_down}></button>
    </div>
  );
}
