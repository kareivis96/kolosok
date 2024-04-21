import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';
import type { FC } from 'react';
import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { WEEKDAY } from './constants';

export const Weekday: FC = memo(() => {
    const navigate = useNavigate();
    const [size, setSize] = useState('pn');

    const onClick = (e: RadioChangeEvent) => {
        navigate(`/menu/${size}`);
        setSize(e.target.value);
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
