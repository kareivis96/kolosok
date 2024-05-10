import type { TMonthAttendance } from 'types/attendance';

export type TAttendanceState = {
    year: string;
    month: string;
    days: TMonthAttendance | null;
};
