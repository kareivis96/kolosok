import type { RadioChangeEvent } from 'antd';
import { Flex, FloatButton, Radio } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';
import { useSearchParams } from 'react-router-dom';

import type { TDaysOfWeek } from 'types/daysOfWeek';

import { WEEKDAYS } from './constants';

export const Weekday: FC = memo(() => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentDay = (searchParams.get('day') as TDaysOfWeek) || null;

    const onDayChange = (event: RadioChangeEvent) => {
        setSearchParams({ day: event.target.value });
    };

    return (
        <Flex>
            <Radio.Group value={currentDay} onChange={(e) => onDayChange(e)}>
                {WEEKDAYS.map((el) => (
                    <Radio.Button key={el.id} value={el.href}>
                        {el.name}
                    </Radio.Button>
                ))}
            </Radio.Group>

            <FloatButton tooltip={<div>Изменить меню</div>} />
        </Flex>
    );
});
