export type TMonthAttendance = {
    [key: string]: boolean;
};

export type TYearAttendance = {
    [key: string]: TMonthAttendance;
};

export type TAttendance = {
    [key: string]: TYearAttendance;
};
