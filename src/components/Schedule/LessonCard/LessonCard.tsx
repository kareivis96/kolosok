import { CloseOutlined } from '@ant-design/icons';
import { Button, Card, Flex, Typography } from 'antd';
import type { FC } from 'react';
import { memo } from 'react';

import type { TLessonCard } from './types';

const LessonCard: FC<TLessonCard> = (props) => {
    return (
        <Card
            key={props.lesson.id}
            hoverable
            title={props.lesson.name}
            bordered
            style={{ width: 300 }}
            extra={
                <Button
                    size='small'
                    shape={'circle'}
                    icon={<CloseOutlined />}
                    onClick={() => props.onRemoveCard(props.lesson)}
                />
            }
        >
            <Flex gap={8} vertical wrap={'wrap'}>
                <Typography.Text>Учитель: {props.lesson.teacher}</Typography.Text>
                <Typography.Text>Время: {props.lesson.time}</Typography.Text>
            </Flex>
        </Card>
    );
};

export default memo(LessonCard);
