import type { FC } from 'react';
import { memo } from 'react';

import { Weekday } from 'components/Weekday';
import { PageHeading } from 'components/layout/PageHeading';

import type { TMenu } from './types';

export const Menu: FC<TMenu> = memo((props) => {
    return (
        <>
            <PageHeading title={props.title} />
            <div>
                <Weekday />
            </div>
        </>
    );
});
