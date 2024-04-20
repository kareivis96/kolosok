import type { FC } from 'react';
import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { APP_LINKS } from 'constants/routes';

import { AppLayout } from 'layouts/AppLayout';

import { Attendance } from 'pages/Attendance';
import { Home } from 'pages/Home';
import { PageNotFound } from 'pages/PageNotFound';
import { Schedule } from 'pages/Schedule';
import { Students } from 'pages/Students';
import { Teachers } from 'pages/Teachers';

const AppRoutes: FC = () => {
    return (
        <Routes>
            <Route path='/' element={<AppLayout />}>
                <Route index element={<Home />} />

                <Route path={APP_LINKS.schedule.link} element={<Schedule />} />
                <Route path={APP_LINKS.students.link} element={<Students />} />
                <Route path={APP_LINKS.teachers.link} element={<Teachers />} />
                <Route path={APP_LINKS.attendance.link} element={<Attendance />} />
            </Route>
            <Route path='*' element={<PageNotFound />} />
        </Routes>
    );
};

export default memo(AppRoutes);
