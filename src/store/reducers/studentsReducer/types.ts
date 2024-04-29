import type { TGroup } from 'types/group';
import type { TStudent } from 'types/student';

export type TStudentsState = {
    groups: TGroup[];
    students: TStudent[];
};
