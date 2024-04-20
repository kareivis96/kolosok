export enum EAppLinks {
    Home = 'home',
    Menu = 'menu',
    Students = 'students',
    Attendance = 'attendance',
    Schedule = 'schedule',
    Teachers = 'teachers',
}

export type TAppLinks = {
    [K in EAppLinks]: TAppLink;
};

export type TAppLink = {
    title: string;
    link: string;
    isDisabled?: boolean;
};
