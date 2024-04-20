import { Radio } from 'antd';
import type { ChangeEvent, FC } from 'react';
import { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { WEEKDAY } from './constants';

export const Weekday: FC = memo(() => {
    const navigate = useNavigate();
    const [size, setSize] = useState('pn');

    const onClick = (e: ChangeEvent<HTMLInputElement>) => {
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
