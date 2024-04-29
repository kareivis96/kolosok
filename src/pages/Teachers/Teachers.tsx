import type { FC } from 'react';
import { memo } from 'react';

import { PageHeading } from 'components/layout/PageHeading';

import type { TTeachers } from './types';

const Teachers: FC<TTeachers> = (props) => {
    return (
        <div>
            <PageHeading title={props.title} />
        </div>
    );
};

export default memo(Teachers);
