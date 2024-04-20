import { Button, Flex } from 'antd';
import type { FC} from 'react';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { WEEKDAY } from './constants';

export const Weekday: FC = memo(() => {
    const navigate = useNavigate();

    return (
        <Flex gap={20}>
            {WEEKDAY.map((dey) => (
                <Button key={dey.id} onClick={() => navigate(`/menu/${dey.href}`)}>
                    {dey.name}
                </Button>
            ))}
        </Flex>
    );
});
