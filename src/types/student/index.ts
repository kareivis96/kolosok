import type { TGroup } from 'types/group';

export type TStudent = {
    id: string;
    name: string;
    birthdate: string;
    group: TGroup;
};
