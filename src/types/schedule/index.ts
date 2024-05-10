import type { TDaysOfWeek } from 'types/daysOfWeek';

export type TLesson = {
    id: string;
    day: TDaysOfWeek;
    name: string;
    time: string;
    teacher: string;
};
