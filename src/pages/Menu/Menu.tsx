import { Flex } from 'antd';
import { memo } from 'react';

import { CardMenu } from 'components/CardMenu';
import { Weekday } from 'components/Weekday';

export const Menu = memo(() => {
    const data = {
        id: 1,
        dayTitle: 'Понедельник',
        data: [
            {
                id: 1,
                name: 'Борщ',
                img: 'https://www.foodiesfeed.com/wp-content/uploads/2019/06/flat-brown-rice-with-vegetables-and-mushrooms-1-500x500.jpg',
                text: 'Борщ с говядиной',
            },
            {
                id: 2,
                name: 'Хлеб',
                img: 'https://www.foodiesfeed.com/wp-content/uploads/2019/06/flat-brown-rice-with-vegetables-and-mushrooms-1-500x500.jpg',
                text: 'Борщ с говядиной',
            },
        ],
    };
    return (
        <Flex vertical gap={20}>
            <Weekday />
            <Flex vertical gap={15}>
                <CardMenu props={data} />
            </Flex>
        </Flex>
    );
});
