import type { TDaysOfWeek } from 'types/daysOfWeek';

const daysMap = {
    monday: 'Понедельник',
    tuesday: 'Вторник',
    wednesday: 'Среда',
    thursday: 'Четверг',
    friday: 'Пятница',
    saturday: 'Суббота',
    sunday: 'Воскресенье',
};

export const englishDayToRussian = (engDay: TDaysOfWeek) => {
    return daysMap[engDay];
};
