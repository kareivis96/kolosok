import type { TStudent } from 'types/student';

export type TStudentsCard = {
    student: TStudent;
    onRemoveCard: (student: TStudent) => void;
};
