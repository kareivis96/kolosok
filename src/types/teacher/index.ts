import type { TGroup } from 'types/group';

export type TTeacher = {
    id: string;
    name: string;
    group: TGroup;
    stage: string;
};
