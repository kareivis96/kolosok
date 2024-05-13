import { UserOutlined } from '@ant-design/icons';
import { Avatar, Card, Flex, Typography } from 'antd';
import type { FC } from 'react';
import { memo, useEffect, useState } from 'react';

import { PageHeading } from 'components/layout/PageHeading';

import { MOCK_TEACHERS } from 'mocks/teachers';

import type { TTeacher } from 'types/teacher';

import type { TTeachers } from './types';

const Teachers: FC<TTeachers> = (props) => {
    const [teachers, setTeachers] = useState<TTeacher[]>([]);

    useEffect(() => {
        setTeachers(MOCK_TEACHERS);
    }, []);

    return (
        <Flex vertical gap={20}>
            <PageHeading title={props.title} />
            <Flex gap={20} wrap='wrap'>
                {teachers.map((teacher) => (
                    <Card key={teacher.id} hoverable title={teacher.name} bordered style={{ width: 300 }}>
                        <Flex vertical gap={8} wrap={'wrap'}>
                            <Avatar size={'large'} shape={'square'} icon={<UserOutlined />} />
                            <Typography.Text>Группа: {teacher.group.name}</Typography.Text>
                            <Typography.Text>Стаж: {teacher.stage}</Typography.Text>
                        </Flex>
                    </Card>
                ))}
            </Flex>
        </Flex>
    );
};

export default memo(Teachers);
