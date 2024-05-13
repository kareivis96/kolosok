import { MOCK_GROUP_1, MOCK_GROUP_2, MOCK_GROUP_3 } from 'mocks/groups';

import type { TTeacher } from 'types/teacher';

export const MOCK_TEACHERS: TTeacher[] = [
    {
        id: '123qwetdfg235',
        name: 'Иванова Галина Ивановна',
        group: MOCK_GROUP_2,
        stage: '2 года',
    },
    {
        id: 'gfh67jgfch4w5',
        name: 'Зинина Екатерина Сергеевна',
        group: MOCK_GROUP_3,
        stage: '6 месяцев',
    },
    {
        id: 'sfgre67urjvcnz3e4r',
        name: 'Терникова Зинаида Константиновна',
        group: MOCK_GROUP_1,
        stage: '1 год',
    },
];
