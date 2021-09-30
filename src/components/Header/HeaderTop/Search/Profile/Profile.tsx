import React from 'react';
import { ReactComponent as anonim } from '@icons/Desktop/anonim.svg';

import style from './styles.module.less';
import Icon from '@/lib/Icon/Icon';
import Typography from '@/lib/Typography/Typography';

const CLIENT_ID = 'Tmkg5W551ffqPxozPiiY-Q';
const REDIRECT_URI = 'http://localhost:8080/auth';

const Profile: React.FC = () => {
    return (
        <div>
            <a
                href={`https://www.reddit.com/api/v1/authorize?client_id=${CLIENT_ID}&response_type=token&
                state=random_string&redirect_uri=${REDIRECT_URI}&scope=read submit identity`}
                className={style.profile}
            >
                <Icon component={anonim} />
                <Typography className={style.profile__text} As="span" weight={500} size={20}>
                    Константин
                </Typography>
            </a>
        </div>
    );
};

export default Profile;
