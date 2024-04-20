import classnames from 'classnames';
import type { FC } from 'react';
import { memo } from 'react';

import CSS from './Sidebar.module.scss';
import { SidebarContent } from './components/SidebarContent';
import type { TSidebar } from './types';

const Sidebar: FC<TSidebar> = (props) => {
    return (
        <aside className={classnames(CSS.sidebar, props.className)}>
            <SidebarContent />
        </aside>
    );
};

export default memo(Sidebar);
