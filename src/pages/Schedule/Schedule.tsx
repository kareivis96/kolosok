import { PlusOutlined } from '@ant-design/icons';
import type { RadioChangeEvent } from 'antd';
import { Button, Flex, Radio, Tooltip, Typography } from 'antd';
import type { FC } from 'react';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { LessonCard } from 'components/Schedule/LessonCard';
import { ScheduleAddModal } from 'components/Schedule/ScheduleAddModal';
import type { TAddLessonFormValues } from 'components/Schedule/ScheduleAddModal/types';
import { PageHeading } from 'components/layout/PageHeading';

import { MOCK_LESSONS } from 'mocks/schedule';

import { addLesson, removeLesson, selectLessonsByDay, setLessons } from 'store/reducers/scheduleReducer';

import { englishDayToRussian } from 'tools/englishDayToRussian';
import { getRandomString } from 'tools/getRandomString';

import { EDaysOfWeek, type TDaysOfWeek } from 'types/daysOfWeek';
import type { TLesson } from 'types/schedule';

import type { TSchedule } from './types';

const Schedule: FC<TSchedule> = (props) => {
    const dispach = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const currentDay = (searchParams.get('day') as TDaysOfWeek) || null;
    const lessonsByDay = useSelector(selectLessonsByDay(currentDay));
    const isLessons = !!lessonsByDay.length;

    const onDayChange = (event: RadioChangeEvent) => {
        setSearchParams({ day: event.target.value });
    };

    const onAddLessonClick = () => {
        setIsModalOpen(true);
    };

    const onAddLesson = (values: TAddLessonFormValues) => {
        const lesson = {
            ...values,
            time: values.time.format('HH:mm'),
        };
        const backendResponse = {
            id: getRandomString(),
            ...lesson,
        };
        dispach(addLesson(backendResponse));
        setIsModalOpen(false);
    };

    const onRemoveLesson = (lesson: TLesson) => {
        dispach(removeLesson(lesson));
    };

    const onCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        dispach(setLessons(MOCK_LESSONS));
        setSearchParams({ day: 'monday' });
        return () => {
            dispach(setLessons([]));
        };
    }, []);

    return (
        <Flex vertical gap={20}>
            <PageHeading title={props.title} />
            <Flex gap={8} wrap={'wrap'}>
                <Radio.Group value={currentDay} onChange={onDayChange}>
                    {Object.entries(EDaysOfWeek).map(([key, value]) => (
                        <Radio.Button key={key} value={value}>
                            {englishDayToRussian(value)}
                        </Radio.Button>
                    ))}
                </Radio.Group>
                <Tooltip title={'Добавить урок'}>
                    <Button shape={'circle'} icon={<PlusOutlined />} onClick={onAddLessonClick} />
                </Tooltip>
            </Flex>
            <Flex gap={8} wrap={'wrap'}>
                {isLessons ? (
                    lessonsByDay.map((lesson) => (
                        <LessonCard key={lesson.id} lesson={lesson} onRemoveCard={onRemoveLesson} />
                    ))
                ) : (
                    <Typography.Title level={5}>В этот день нет занятий</Typography.Title>
                )}
            </Flex>
            <ScheduleAddModal isOpen={isModalOpen} onClose={onCloseModal} onSubmit={onAddLesson} />
        </Flex>
    );
};

export default memo(Schedule);
