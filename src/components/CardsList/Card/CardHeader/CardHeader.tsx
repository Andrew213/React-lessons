import React from 'react';
import styles from './cardheader.scss';

const img = require('../../../../img/avatar.png')

export function CardHeader() {
  return (
    <div className={styles.cardheader}>
      <a href="#">
        <img className={styles.cardheader__avatar} src={img} alt="d" />
        <p className={styles.cardheader__name}>Владимир Петров</p>
        <button className={styles.cardheader__btn} data-label='Действия'></button>
      </a>
    </div>
  );
}
