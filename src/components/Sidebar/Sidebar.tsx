import classnames from 'classnames';
import type { FC } from 'react';
import { memo } from 'react';

import CSS from './Sidebar.module.scss';
import type { TSidebar } from './types';

const Sidebar: FC<TSidebar> = (props) => {
    return <aside className={classnames(CSS.sidebar, props.className)}>Sidebar</aside>;
};

export default memo(Sidebar);
