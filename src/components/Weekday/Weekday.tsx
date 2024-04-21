import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import type { FC } from 'react';
import { memo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { WEEKDAY } from './constants';

export const Weekday: FC = memo(() => {
    const navigate = useNavigate();
    const params = useParams<{ day: string }>();
    const [size, setSize] = useState(params.day);

    const onClick = (e: RadioChangeEvent) => {
        setSize(e.target.value);
        navigate(`/menu/${e.target.value}`);
    };

    return (
        <Radio.Group value={size} onChange={(e) => onClick(e)}>
            {WEEKDAY.map((day) => (
                <Radio.Button key={day.id} value={day.href}>
                    {day.name}
                </Radio.Button>
            ))}
        </Radio.Group>
    );
});
