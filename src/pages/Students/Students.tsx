import { Card, Flex, Select, Typography } from 'antd';
import type { FC } from 'react';
import { memo, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PageHeading } from 'components/layout/PageHeading';

import { BACKEND_GROUPS } from 'mocks/groups';
import { BACKEND_STUDENTS } from 'mocks/students';

import { selectGroups, selectStudents, setGroups, setStudets } from 'store/reducers/studentsReducer';

import CSS from './Students.module.scss';
import type { TStudents } from './types';

const Students: FC<TStudents> = (props) => {
    const dispatch = useDispatch();
    const groups = useSelector(selectGroups);
    const students = useSelector(selectStudents);

    const [selectedGroupName, setSelectedGroupName] = useState<string | null>(null);
    const filteredStudents = useMemo(() => {
        if (selectedGroupName) {
            return students.filter((student) => student.group.name === selectedGroupName);
        }
        return students;
    }, [selectedGroupName, students]);

    const onDropdownFieldClick = (groupName: string | undefined) => {
        setSelectedGroupName(groupName || null);
    };

    useEffect(() => {
        dispatch(setGroups(BACKEND_GROUPS));
        dispatch(setStudets(BACKEND_STUDENTS));
        return () => {
            dispatch(setGroups([]));
            dispatch(setStudets([]));
        };
    });

    return (
        <Flex className={CSS.students} vertical gap={20}>
            <PageHeading title={props.title} />
            <Select
                className={CSS.filter_select}
                placeholder={'Фильтр по группам'}
                onChange={onDropdownFieldClick}
                allowClear
                value={selectedGroupName}
                options={groups.map((group) => {
                    return { value: group.name };
                })}
            />
            <Flex gap={8} wrap={'wrap'}>
                {filteredStudents.map((student) => (
                    <Card key={student.id} hoverable title={student.name} bordered style={{ width: 300 }}>
                        <Typography.Text>Группа: {student.group.name}</Typography.Text>
                    </Card>
                ))}
            </Flex>
        </Flex>
    );
};

export default memo(Students);
