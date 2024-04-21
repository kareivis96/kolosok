import { Flex } from 'antd';
import type { FC} from 'react';
import { memo } from 'react';

import { CardFood } from 'components/CardMenu/CardFood';

import type { TDayMenu } from 'types/menu';

import CSS from './CardMenu.module.scss';

export const CardMenu: FC<TDayMenu> = memo(({ props }) => {
    console.log(props);

    return (
        <Flex className={CSS.cardMenu}>
            <h2>{props.dayTitle}</h2>
            {props.data.map((item) => (
                <CardFood key={item.id} props={item} />
            ))}
        </Flex>
    );
});
