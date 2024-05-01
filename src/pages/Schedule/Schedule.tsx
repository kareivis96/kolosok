import { PlusOutlined } from '@ant-design/icons';
import type { RadioChangeEvent } from 'antd';
import { Button, Card, Flex, Radio, Tooltip, Typography } from 'antd';
import type { FC } from 'react';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { ScheduleAddModal } from 'components/Schedule/ScheduleAddModal';
import { PageHeading } from 'components/layout/PageHeading';

import { MOCK_SCHEDULE } from 'mocks/schedule';

import { selectScheduleByDay, selectScheduleDays, setSchedule } from 'store/reducers/scheduleReducer';

import { englishDayToRussian } from 'tools/englishDayToRussian';

import type { TDaysOfWeek } from 'types/daysOfWeek';

import type { TSchedule } from './types';

const Schedule: FC<TSchedule> = (props) => {
    const dispach = useDispatch();
    const scheduleDays = useSelector(selectScheduleDays);
    const [searchParams, setSearchParams] = useSearchParams();
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const currentDay = (searchParams.get('day') as TDaysOfWeek) || null;
    const currentSchedule = useSelector(selectScheduleByDay(currentDay || 'monday'));
    const isCurrentSchedule = !!currentSchedule?.lessons?.length;
    const currentLessons = isCurrentSchedule ? currentSchedule.lessons : [];

    const onDayChange = (event: RadioChangeEvent) => {
        setSearchParams({ day: event.target.value });
    };

    const onAddLessonClick = () => {
        setIsModalOpen(true);
    };

    const onAddLessonSubmit = () => {
        console.log('submit');
    };

    const onCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        dispach(setSchedule(MOCK_SCHEDULE));
        return () => {
            dispach(setSchedule({}));
        };
    }, []);

    return (
        <Flex vertical gap={20}>
            <PageHeading title={props.title} />
            <Flex gap={8} wrap={'wrap'}>
                <Radio.Group value={currentDay} onChange={onDayChange}>
                    {scheduleDays.map((day) => (
                        <Radio.Button key={day} value={day}>
                            {englishDayToRussian(day)}
                        </Radio.Button>
                    ))}
                </Radio.Group>
                <Tooltip title={'Добавить урок'}>
                    <Button shape={'circle'} icon={<PlusOutlined />} onClick={onAddLessonClick} />
                </Tooltip>
            </Flex>
            <Flex gap={8} wrap={'wrap'}>
                {isCurrentSchedule
                    ? currentLessons.map((lesson) => (
                          <Card key={lesson.id} hoverable title={lesson.name} bordered size='small'>
                              <Flex gap={8} vertical wrap={'wrap'}>
                                  <Typography.Text>Учитель: {lesson.teacher}</Typography.Text>
                                  <Typography.Text>Время: {lesson.time}</Typography.Text>
                              </Flex>
                          </Card>
                      ))
                    : 'Empty lessons'}
            </Flex>
            <ScheduleAddModal isOpen={isModalOpen} onClose={onCloseModal} onSubmit={onAddLessonSubmit} />
        </Flex>
    );
};

export default memo(Schedule);
