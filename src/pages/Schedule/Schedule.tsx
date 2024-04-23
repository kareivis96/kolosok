import type { RadioChangeEvent } from 'antd';
import { Flex, Radio } from 'antd';
import type { FC } from 'react';
import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import { PageHeading } from 'components/layout/PageHeading';

import { MOCK_SCHEDULE } from 'mocks/schedule';

import { selectScheduleDays, setSchedule } from 'store/reducers/scheduleReducer';

import { englishDayToRussian } from 'tools/englishDayToRussian';

import type { TSchedule } from './types';

const Schedule: FC<TSchedule> = (props) => {
    const dispach = useDispatch();
    const scheduleDays = useSelector(selectScheduleDays);
    const [searchParams, setSearchParams] = useSearchParams();

    const currentDay = searchParams.get('day') || null;

    const onDayChange = (event: RadioChangeEvent) => {
        console.log(event.target.value);
        setSearchParams({ day: event.target.value });
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
            <Radio.Group value={currentDay} onChange={onDayChange}>
                {scheduleDays.map((day) => (
                    <Radio.Button key={day} value={day}>
                        {englishDayToRussian(day)}
                    </Radio.Button>
                ))}
            </Radio.Group>
        </Flex>
    );
};

export default memo(Schedule);
