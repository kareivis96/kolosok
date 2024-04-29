import { MOCK_GROUP_1, MOCK_GROUP_2, MOCK_GROUP_3 } from 'mocks/groups';

import type { TStudent } from 'types/student';

export const MOCK_STUDENT_1: TStudent = {
    id: '123',
    name: 'Иванов Иван Иванович',
    birthdate: '11.10.2018',
    group: MOCK_GROUP_1,
};
export const MOCK_STUDENT_2: TStudent = {
    id: '2345',
    name: 'Константинопольский Василий Дмитртиевич',
    birthdate: '11.10.2017',
    group: MOCK_GROUP_2,
};
export const MOCK_STUDENT_3: TStudent = {
    id: 'sdf234',
    name: 'Соколов Виталий Иванович',
    birthdate: '11.08.2018',
    group: MOCK_GROUP_1,
};
export const MOCK_STUDENT_4: TStudent = {
    id: 'wer2355',
    name: 'Пушкин Александр Сергеевич',
    birthdate: '14.10.2016',
    group: MOCK_GROUP_3,
};

export const BACKEND_STUDENTS = [MOCK_STUDENT_1, MOCK_STUDENT_2, MOCK_STUDENT_3, MOCK_STUDENT_4];
