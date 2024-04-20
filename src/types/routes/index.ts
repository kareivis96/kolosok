export enum EAppLinks {
    Home = 'home',
    Menu = 'menu',
}

export type TAppLinks = {
    [K in EAppLinks]: TAppLink;
};

export type TAppLink = {
    title: string;
    link: string;
    isDisabled?: boolean;
};
