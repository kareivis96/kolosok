import type { FC } from 'react';
import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { APP_LINKS } from 'constants/routes';

import { AppLayout } from 'layouts/AppLayout';

import { Attendance } from 'pages/Attendance';
import { Home } from 'pages/Home';
import { Menu } from 'pages/Menu';
import { PageNotFound } from 'pages/PageNotFound';
import { Schedule } from 'pages/Schedule';
import { Students } from 'pages/Students';
import { Teachers } from 'pages/Teachers';

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<AppLayout />}>
                <Route index element={<Home title={APP_LINKS.home.title} />} />

                <Route path={APP_LINKS.schedule.link} element={<Schedule title={APP_LINKS.schedule.title} />} />
                <Route path={APP_LINKS.students.link} element={<Students title={APP_LINKS.students.title} />} />
                <Route path={APP_LINKS.teachers.link} element={<Teachers title={APP_LINKS.teachers.title} />} />
                <Route path={APP_LINKS.attendance.link} element={<Attendance title={APP_LINKS.attendance.title} />} />
                <Route path={APP_LINKS.menu.link} element={<Menu title={APP_LINKS.menu.title} />} />
            </Route>
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    );
};

export default memo(AppRoutes);
