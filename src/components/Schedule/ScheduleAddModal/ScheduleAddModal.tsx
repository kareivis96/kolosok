import { Modal } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';

import type { TScheduleAddModal } from './types';

// import CSS from './ScheduleAddModal.module.scss';

const ScheduleAddModal: FC<TScheduleAddModal> = (props) => {
    return (
        <Modal
            open={props.isOpen}
            title='Create a new collection'
            okText='Create'
            cancelText='Cancel'
            okButtonProps={{ autoFocus: true }}
            onCancel={props.onClose}
            destroyOnClose
            onOk={props.onSubmit}
        >
            Form
        </Modal>
    );
};

export default memo(ScheduleAddModal);
