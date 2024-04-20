import classnames from 'classnames';
import type { FC } from 'react';
import { memo } from 'react';

import CSS from './Header.module.scss';
import type { THeader } from './types';

const Header: FC<THeader> = (props) => {
    return <header className={classnames(CSS.header, props.className)}>Header</header>;
};

export default memo(Header);
