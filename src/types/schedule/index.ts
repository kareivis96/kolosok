import type { EDaysOfWeek } from 'types/daysOfWeek';

export type TSchedule = {
    [K in EDaysOfWeek]?: {
        id: string;
        lessons: TLesson[];
    };
};

export type TLesson = {
    id: string;
    name: string;
    time: string;
    teacher: string;
};
