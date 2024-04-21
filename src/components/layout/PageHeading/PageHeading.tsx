import { Typography } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';

import CSS from './PageHeading.module.scss';
import type { TPageHeading } from './types';

const PageHeading: FC<TPageHeading> = (props) => {
    return (
        <div className={CSS.page_heading}>
            <Typography.Title level={2}>{props.title}</Typography.Title>
        </div>
    );
};

export default memo(PageHeading);
