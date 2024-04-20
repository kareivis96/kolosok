import { Button } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import CSS from './SidebarLink.module.scss';
import type { TSidebarLink } from './types';

const SidebarLink: FC<TSidebarLink> = (props) => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(props.link);
    };

    return (
        <Button className={CSS.sidebar_link} onClick={onClick} disabled={props.isDiabled}>
            {props.title}
        </Button>
    );
};

export default memo(SidebarLink);
