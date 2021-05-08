import React from 'react';
import styles from './cardcontent.scss';
const img = require('../../../../img/CardContent.jpg')

export function CardContent() {
  return (
    <div className={styles.cardContent}>
      <p className={styles.cardContent__text}>
      А также базовые сценарии поведения пользователей сервиса
      </p>
      <span className={styles.cardContent__time}>10 часов назад</span>
      <img src={img} alt="d" />
    </div>
  );
}
