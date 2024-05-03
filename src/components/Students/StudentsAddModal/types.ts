import type { Dayjs } from 'dayjs';

import type { TGroup } from 'types/group';

export type TStudentsAddModal = {
    groups: TGroup[];
    isOpen: boolean;
    onSubmit: (values: TAddStudentsFormValues) => void;
    onClose: () => void;
};

export type TAddStudentsFormValues = {
    group: string;
    name: string;
    birthdate: Dayjs;
};
