import classnames from 'classnames';
import type { FC } from 'react';
import { memo } from 'react';

import CSS from './Main.module.scss';
import type { TMain } from './types';

const Main: FC<TMain> = (props) => {
    return <aside className={classnames(CSS.main, props.className)}>Main</aside>;
};

export default memo(Main);
