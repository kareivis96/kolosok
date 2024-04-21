import type { FC } from 'react';
import { memo } from 'react';

import { PageHeading } from 'components/layout/PageHeading';

import type { THome } from './types';

const Home: FC<THome> = (props) => {
    return (
        <div>
            <PageHeading title={props.title} />
        </div>
    );
};

export default memo(Home);
