import { memo } from 'react';

import { Weekday } from 'components/Weekday';

export const Menu = memo(() => {
    return (
        <div>
            <Weekday />
        </div>
    );
});
