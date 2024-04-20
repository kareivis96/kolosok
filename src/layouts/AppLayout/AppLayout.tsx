import type { FC } from 'react';
import { memo } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/Header';
import { Main } from 'components/Main';
import { Sidebar } from 'components/Sidebar';

import CSS from './AppLayout.module.scss';

const AppLayout: FC = () => {
    return (
        <div className={CSS.app_layout}>
            <Header className={CSS.app_layout__header} />
            <Sidebar className={CSS.app_layout__sidebar} />
            <Main className={CSS.app_layout__main}>
                <Outlet />
            </Main>
        </div>
    );
};

export default memo(AppLayout);
