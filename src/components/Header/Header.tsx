import { Typography } from 'antd';
import classnames from 'classnames';
import type { FC } from 'react';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import CSS from './Header.module.scss';
import type { THeader } from './types';

const Header: FC<THeader> = (props) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/');
    };

    return (
        <header className={classnames(CSS.header, props.className)}>
            <Typography.Title className={CSS.header__logo} onClick={onClick} style={{ margin: 0 }}>
                Колосок
            </Typography.Title>
        </header>
    );
};

export default memo(Header);
