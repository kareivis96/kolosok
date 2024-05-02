import type { TLesson } from 'types/schedule';

export type TLessonCard = {
    lesson: TLesson;
    onRemoveCard: (lesson: TLesson) => void;
};
