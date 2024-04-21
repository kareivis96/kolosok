import { Flex } from 'antd';
import { memo } from 'react';

import { CardMenu } from 'components/CardMenu';
import { Weekday } from 'components/Weekday';

export const Menu = memo(() => {
    return (
        <Flex vertical gap={20}>
            <Weekday />
            <Flex vertical gap={15}>
                <CardMenu />
            </Flex>
        </Flex>
    );
});
