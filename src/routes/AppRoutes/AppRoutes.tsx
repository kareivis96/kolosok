import type { FC } from 'react';
import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { APP_LINKS } from 'constants/routes';

import { AppLayout } from 'layouts/AppLayout';

import { Home } from 'pages/Home';
import { Menu } from 'pages/Menu';
import { PageNotFound } from 'pages/PageNotFound';

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path={APP_LINKS.menu.link} element={<Menu />} />
            </Route>
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    );
};

export default memo(AppRoutes);
