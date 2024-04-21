import { Button } from 'antd';
import classnames from 'classnames';
import type { FC } from 'react';
import { memo, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import CSS from './SidebarLink.module.scss';
import type { TSidebarLink } from './types';

const SidebarLink: FC<TSidebarLink> = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isActive = useMemo(() => {
        return location.pathname.includes(props.link);
    }, [location.pathname]);

    const onClick = () => {
        navigate(props.link);
    };

    const buttonClasses = classnames(CSS.sidebar_link, {
        [CSS.sidebar_link__active]: isActive,
    });

    return (
        <Button size={'large'} className={buttonClasses} onClick={onClick} disabled={props.isDiabled}>
            {props.title}
        </Button>
    );
};

export default memo(SidebarLink);
