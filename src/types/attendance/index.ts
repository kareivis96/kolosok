export type TMonthAttendance = {
    [key: string]: boolean;
};

export type TAttendance = {
    [key: string]: TMonthAttendance;
};
