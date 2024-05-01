import { Flex, Typography } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';

import { CardMenu } from 'components/CardMenu';
import { Weekday } from 'components/Weekday';

import { BACKEND_MENU } from 'mocks/menu';

import type { TMenu } from './types';

export const Menu: FC<TMenu> = memo((props) => {
    return (
        <Flex vertical gap={20}>
            <Typography.Title level={2}>{props.title}</Typography.Title>
            <Weekday />
            <Flex vertical gap={15}>
                {BACKEND_MENU.map((card) => (
                    <CardMenu key={card.id} cardsFood={card.cardsFood} dayTitle={card.dayTitle} />
                ))}
            </Flex>
        </Flex>
    );
});
