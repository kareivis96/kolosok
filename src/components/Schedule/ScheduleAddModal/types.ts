import type { Dayjs } from 'dayjs';

import type { TDaysOfWeek } from 'types/daysOfWeek';

export type TScheduleAddModal = {
    isOpen: boolean;
    onSubmit: (values: TAddLessonFormValues) => void;
    onClose: () => void;
};

export type TAddLessonFormValues = {
    day: TDaysOfWeek;
    name: string;
    teacher: string;
    time: Dayjs;
};
