import type { FC } from 'react';
import { memo } from 'react';

import { APP_LINKS } from 'constants/routes';

import { SidebarLink } from '../SidebarLink';
import CSS from './SidebarContent.module.scss';

const SidebarContent: FC = () => {
    const { menu, students, attendance, schedule, teachers } = APP_LINKS;

    return (
        <div className={CSS.sidebar_content}>
            <SidebarLink title={students.title} link={students.link} isDiabled={students.isDisabled} />
            <SidebarLink title={menu.title} link={'/menu/pn'} isDiabled={menu.isDisabled} />
            <SidebarLink title={attendance.title} link={attendance.link} isDiabled={attendance.isDisabled} />
            <SidebarLink title={schedule.title} link={schedule.link} isDiabled={schedule.isDisabled} />
            <SidebarLink title={teachers.title} link={teachers.link} isDiabled={teachers.isDisabled} />
        </div>
    );
};

export default memo(SidebarContent);
