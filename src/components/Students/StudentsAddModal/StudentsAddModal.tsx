import type { FormInstance } from 'antd';
import { DatePicker, Form, Input, Modal, Select } from 'antd';
import type { FC } from 'react';
import { memo, useEffect, useState } from 'react';

import type { TAddStudentsFormValues, TStudentsAddModal } from './types';

const StudentsAddModal: FC<TStudentsAddModal> = (props) => {
    const [formInstance, setFormInstance] = useState<FormInstance>();
    const [form] = Form.useForm();

    const onSuccessClick = async () => {
        try {
            const values: TAddStudentsFormValues = await formInstance?.validateFields();
            formInstance?.resetFields();
            props.onSubmit(values);
        } catch (error) {
            console.log('Failed:', error);
        }
    };

    const onCancelClick = () => {
        formInstance?.resetFields();
        props.onClose();
    };

    useEffect(() => {
        setFormInstance(form);
    }, []);

    return (
        <Modal
            open={props.isOpen}
            title='Добавить ребенка'
            okText='Добавить'
            cancelText='Отмена'
            okButtonProps={{ autoFocus: true }}
            onCancel={onCancelClick}
            destroyOnClose
            onOk={onSuccessClick}
        >
            <Form layout='vertical' form={form} name='add_student_form' size='large'>
                <Form.Item name='group' label='Группа' rules={[{ required: true, message: 'Выберите группу' }]}>
                    <Select allowClear placeholder='Выберите группу'>
                        {props.groups.map((group) => (
                            <Select.Option key={group.id} value={group.name}>
                                {group.name}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item name='name' label='Имя ребенка' rules={[{ required: true, message: 'Укажите имя ребенка' }]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name='birthdate'
                    label='Дата рождения'
                    rules={[{ required: true, message: 'Укажите дату рождения ребенка' }]}
                >
                    <DatePicker needConfirm={false} placeholder='Выберите дату' form='DD.MM.YYYY' />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default memo(StudentsAddModal);
