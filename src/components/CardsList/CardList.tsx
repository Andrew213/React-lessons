import React from 'react';
import useMountEffect from '@/hooks/useMountEffect';
import nanoid from 'nanoid';
import pic from '@img/pic.jpg';
import pic2 from '@img/pic2.jpg';
import avatar from '@img/avatar.png';
import avatar2 from '@img/avatar2.png';

import Card, { CardProps } from './Card/Card';

import styles from './styles.module.less';
import DropDown from '@/lib/DropDown/DropDown';

type CardListProps = {
    cardList: CardProps[];
};

const users = [
    {
        userName: 'Констанин Кодов',
        title: 'Реплицированные с зарубежных источников возможности',
        publicTime: 1,
        id: nanoid(5),
        img: pic,
        avatar,
    },
    {
        userName: 'Петров Владимир',
        title: 'Следует отметить, что новая модель организационной деятельности...',
        publicTime: 5,
        id: nanoid(5),
        img: pic2,
        avatar: avatar2,
    },
];

const CardsList: React.FC = () => {
    const [cardsInfo, setCardsInfo] = React.useState<CardProps[]>(users);
    return (
        <>
            <ul className={styles.cardsList}>
                {cardsInfo.map(({ userName, title, publicTime, id, img, avatar }) => {
                    return (
                        <Card
                            key={id}
                            userName={userName}
                            title={title}
                            publicTime={publicTime}
                            id={id}
                            img={img}
                            avatar={avatar}
                        />
                    );
                })}
            </ul>
        </>
    );
};

export default CardsList;
