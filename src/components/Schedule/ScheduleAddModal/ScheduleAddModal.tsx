import type { FormInstance } from 'antd';
import { Form, Input, Modal, Select, TimePicker } from 'antd';
import type { FC } from 'react';
import { memo, useEffect, useState } from 'react';

import { englishDayToRussian } from 'tools/englishDayToRussian';

import { EDaysOfWeek } from 'types/daysOfWeek';

import type { TAddLessonFormValues, TScheduleAddModal } from './types';

const ScheduleAddModal: FC<TScheduleAddModal> = (props) => {
    const [formInstance, setFormInstance] = useState<FormInstance>();
    const [form] = Form.useForm();

    const onSuccessClick = async () => {
        try {
            const values: TAddLessonFormValues = await formInstance?.validateFields();
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
            title='Создать новое занятие'
            okText='Создать'
            cancelText='Отмена'
            okButtonProps={{ autoFocus: true }}
            onCancel={onCancelClick}
            destroyOnClose
            onOk={onSuccessClick}
        >
            <Form layout='vertical' form={form} name='add_lesson_form' size='large'>
                <Form.Item name='day' label='День' rules={[{ required: true, message: 'Укажите день занятия' }]}>
                    <Select allowClear placeholder='Выберите день'>
                        {Object.entries(EDaysOfWeek).map(([key, value]) => (
                            <Select.Option key={key} value={value}>
                                {englishDayToRussian(value)}
                            </Select.Option>
                        ))}
                    </Select>
                </Form.Item>
                <Form.Item
                    name='name'
                    label='Название Урока'
                    rules={[{ required: true, message: 'Укажите название урока' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name='teacher'
                    label='Учитель'
                    rules={[{ required: true, message: 'Обязательно укажите учителя' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name='time'
                    label='Время'
                    rules={[{ required: true, message: 'Укажите время проведения занятия' }]}
                >
                    <TimePicker needConfirm={false} placeholder='Выберите время' format={'HH:mm'} />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default memo(ScheduleAddModal);
