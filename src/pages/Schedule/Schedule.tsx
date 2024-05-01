import { PlusOutlined } from '@ant-design/icons';
import type { RadioChangeEvent } from 'antd';
import { Button, Card, Flex, Radio, Tooltip, Typography } from 'antd';
import type { FC } from 'react';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { ScheduleAddModal } from 'components/Schedule/ScheduleAddModal';
import type { TAddLessonFormValues } from 'components/Schedule/ScheduleAddModal/types';
import { PageHeading } from 'components/layout/PageHeading';

import { MOCK_LESSONS } from 'mocks/schedule';

import { selectLessonsByDay, setLessons } from 'store/reducers/scheduleReducer';

import { englishDayToRussian } from 'tools/englishDayToRussian';

import { EDaysOfWeek, type TDaysOfWeek } from 'types/daysOfWeek';

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

    const onAddLessonSubmit = (values: TAddLessonFormValues) => {
        const lesson = {
            ...values,
            time: values.time.format('HH:mm'),
        };

        console.log('submit', lesson);
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
                        <Card key={lesson.id} hoverable title={lesson.name} bordered size='small'>
                            <Flex gap={8} vertical wrap={'wrap'}>
                                <Typography.Text>Учитель: {lesson.teacher}</Typography.Text>
                                <Typography.Text>Время: {lesson.time}</Typography.Text>
                            </Flex>
                        </Card>
                    ))
                ) : (
                    <Typography.Title level={5}>В этот день нет занятий</Typography.Title>
                )}
            </Flex>
            <ScheduleAddModal isOpen={isModalOpen} onClose={onCloseModal} onSubmit={onAddLessonSubmit} />
        </Flex>
    );
};

export default memo(Schedule);
