import type { FC } from 'react';
import { memo } from 'react';

import type { TFood } from 'types/menu';

import CSS from './CardFood.module.scss';

export const CardFood: FC<TFood> = memo((props) => {
    return (
        <div className={CSS.CardFood}>
            <div className={CSS.CardFood__imgContainer}>
                <img src={props.img} alt='imgFood' className={CSS.CardFood__img} />
            </div>
            <h3 className={CSS.CardFood__title}>{props.name}</h3>
            <p className={CSS.CardFood__text}>{props.text}</p>
        </div>
    );
});
