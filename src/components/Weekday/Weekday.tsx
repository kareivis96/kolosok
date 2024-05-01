import type { RadioChangeEvent } from 'antd';
import { Flex, FloatButton, Radio } from 'antd';
import type { FC } from 'react';
import { memo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { WEEKDAYS } from './constants';

export const Weekday: FC = memo(() => {
    const navigate = useNavigate();
    const param = useParams();
    const [day, setDay] = useState(param.day);

    const onClick = (e: RadioChangeEvent) => {
        const dayNav = e.target.value;
        navigate(`/menu/${dayNav}`);
        setDay(dayNav);
    };

    return (
        <Flex>
            <Radio.Group value={day} onChange={(e) => onClick(e)}>
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
