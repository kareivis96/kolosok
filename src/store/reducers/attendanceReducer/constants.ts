import dayjs from 'dayjs';

import type { TAttendanceState } from './types';

export const initialState: TAttendanceState = {
    year: dayjs().format('YYYY'),
    month: dayjs().format('MM'),
    days: null,
};
