import React from 'react';
import { CardComments } from './CardComments';
import styles from './cardcontrol.scss';
import { CardKarma } from './CardKarma/CardKarma';
import { CardSave } from './CardSave';
import { CardShare } from './CardShare';

export function CardControl() {
  return (
    <div className={styles.cardControl}>
        <CardKarma/>
        <CardComments/>
        <CardShare/>
        <CardSave/>
    </div>
  );
}
