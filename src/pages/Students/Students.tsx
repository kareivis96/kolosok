import type { FC } from 'react';
import { memo } from 'react';

import { PageHeading } from 'components/layout/PageHeading';

import type { TStudents } from './types';

const Students: FC<TStudents> = (props) => {
    return (
        <div>
            <PageHeading title={props.title} />
        </div>
    );
};

export default memo(Students);
