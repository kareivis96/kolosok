import type { FC } from 'react';
import { memo } from 'react';

import { PageHeading } from 'components/layout/PageHeading';

import type { TAttendance } from './types';

const Attendance: FC<TAttendance> = (props) => {
    return (
        <div>
            <PageHeading title={props.title} />
        </div>
    );
};

export default memo(Attendance);
