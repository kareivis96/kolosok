import type { TAppLinks } from 'types/routes';

export const APP_LINKS: TAppLinks = {
    home: {
        title: 'Главная',
        link: '/',
    },
    menu: {
        title: 'Меню',
        link: '/menu/:day?',
    },
    students: {
        title: 'Воспитанники',
        link: '/students',
    },
    attendance: {
        title: 'Посещаемость',
        link: '/attendance',
    },
    schedule: {
        title: 'Расписание занятий',
        link: '/schedule',
    },
    teachers: {
        title: 'Воспитатели',
        link: '/teachers',
    },
} as const;
