import React from 'react';
import { ReactComponent as anonim } from '@icons/Desktop/anonim.svg';
import Icon from '@/lib/Icon/Icon';
import Typography from '@/lib/Typography/Typography';
import axios from 'axios';

import style from './styles.module.less';

const REDIRECT_URI = 'http://localhost:8080/auth';

interface IUserDara {
    name?: string;
    iconImg?: string;
}

const Profile: React.FC = () => {
    const [data, setData] = React.useState<IUserDara>({});

    React.useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        if (accessToken) {
            void axios
                .get('https://oauth.reddit.com/api/v1/me?raw_json=1', {
                    headers: {
                        Authorization: `bearer ${accessToken}`,
                    },
                })
                .then(resp => {
                    const userData = resp.data;
                    setData({
                        name: userData.name,
                        iconImg: userData.icon_img,
                    });
                    console.log(userData);
                })
                .catch(e => console.log(e));
        }
    }, []);

    if (data.iconImg) {
        console.log(data.iconImg.toString());
    }

    return (
        <div>
            <a
                href={`https://www.reddit.com/api/v1/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&state=random_string&redirect_uri=${REDIRECT_URI}&scope=read submit identity`}
                className={style.profile}
            >
                {data.iconImg ? (
                    <img src={data.iconImg} className={style.profile__avatar} />
                ) : (
                    <Icon component={anonim} />
                )}
                <Typography className={style.profile__text} As="span" weight={500} size={20}>
                    {data.name ? data.name : 'Аноним'}
                </Typography>
            </a>
        </div>
    );
};

export default Profile;
