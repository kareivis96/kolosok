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
} as const;
