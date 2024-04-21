export type TFood = {
    id: number;
    name: string;
    img: string;
    text: string;
};

export type TDayMenu = {
    dayTitle: string;
    data: TFood[];
};

export type TCardMenu = {
    dayMenu: TDayMenu[];
};
