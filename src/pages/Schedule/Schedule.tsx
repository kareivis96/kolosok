import type { FC } from 'react';
import { memo } from 'react';

import { PageHeading } from 'components/layout/PageHeading';

import type { TSchedule } from './types';

const Schedule: FC<TSchedule> = (props) => {
    return (
        <div>
            <PageHeading title={props.title} />
        </div>
    );
};

export default memo(Schedule);
