import { Flex } from 'antd';
import type { FC} from 'react';
import { memo } from 'react';

import { CardMenu } from 'components/CardMenu';
import { Weekday } from 'components/Weekday';

import { BACKEND_MENU } from 'mocks/menu';

export const Menu: FC = memo(() => {
    return (
        <Flex vertical gap={20}>
            <Weekday />
            <Flex vertical gap={15}>
                {BACKEND_MENU.map((card) => (
                    <CardMenu key={card.id} cardsFood={card.cardsFood} dayTitle={card.dayTitle} />
                ))}
            </Flex>
        </Flex>
    );
});
