import { CloseOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Flex, Typography } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';

import type { TStudentsCard } from './types';

const StudentsCard: FC<TStudentsCard> = (props) => {
    return (
        <Card
            key={props.student.id}
            hoverable
            title={props.student.name}
            bordered
            style={{ width: 300 }}
            extra={
                <Button
                    size='small'
                    shape={'circle'}
                    icon={<CloseOutlined />}
                    onClick={() => props.onRemoveCard(props.student)}
                />
            }
        >
            <Flex vertical gap={8} wrap={'wrap'}>
                <Avatar size={'large'} shape={'square'} icon={<UserOutlined />} />
                <Typography.Text>Дата рождения: {props.student.birthdate}</Typography.Text>
                <Typography.Text>Группа: {props.student.group.name}</Typography.Text>
            </Flex>
        </Card>
    );
};

export default memo(StudentsCard);
