import { Flex } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';

import { CardFood } from 'components/CardMenu/CardFood';

import type { TFood } from 'types/menu';

import CSS from './CardMenu.module.scss';
import type { TCardMenu } from './types';

export const CardMenu: FC<TCardMenu> = memo((props) => {
    return (
        <>
            <h2>{props.dayTitle}</h2>
            <Flex className={CSS.cardMenu}>
                {props.cardsFood.map((item: TFood) => (
                    <CardFood key={item.id} name={item.name} img={item.img} text={item.text} id={item.id} />
                ))}
            </Flex>
        </>
    );
});
