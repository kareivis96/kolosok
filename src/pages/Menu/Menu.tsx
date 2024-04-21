import { Flex } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';
import { useParams } from 'react-router-dom';

import { CardMenu } from 'components/CardMenu';
import { Weekday } from 'components/Weekday';
import { WEEKDAY } from 'components/Weekday/constants';
import { PageHeading } from 'components/layout/PageHeading';

import type { TMenu } from './types';

export const Menu: FC<TMenu> = memo((props) => {
    const params = useParams<{ day: string }>();
    const weekday = WEEKDAY.find((day) => day.href === params.day)?.name || 'Понедельник';

    const data = {
        id: 1,
        dayTitle: weekday,
        data: [
            {
                id: 1,
                name: 'Борщ',
                img: 'https://img.iamcook.ru/old/upl/recipes/cat/u-6c6cb953201a5121d75e8233e686e184.jpg',
                text: 'Борщ с говядиной',
            },
            {
                id: 2,
                name: 'Хлеб',
                img: 'https://www.povarenok.ru/data/cache/2020nov/13/01/2790246_18522-710x550x.jpg',
                text: 'Хлеб ржаной',
            },
        ],
    };

    return (
        <Flex vertical gap={20}>
            <PageHeading title={props.title} />
            <Weekday />
            <Flex vertical gap={15}>
                <CardMenu data={data.data} dayTitle={data.dayTitle} />
            </Flex>
        </Flex>
    );
});
