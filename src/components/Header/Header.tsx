import { Button } from 'antd';
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
            <Button onClick={onClick} type='text'>
                Колосок
            </Button>
        </header>
    );
};

export default memo(Header);
