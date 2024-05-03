import { PlusOutlined } from '@ant-design/icons';
import { Button, Flex, Select, Tooltip } from 'antd';
import type { FC } from 'react';
import { memo, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { TAddStudentsFormValues } from 'components/Students/StudentsAddModal';
import { StudentsAddModal } from 'components/Students/StudentsAddModal';
import { StudentsCard } from 'components/Students/StudentsCard';
import { PageHeading } from 'components/layout/PageHeading';

import { BACKEND_GROUPS } from 'mocks/groups';
import { BACKEND_STUDENTS } from 'mocks/students';

import {
    addStudent,
    removeStudent,
    selectGroups,
    selectStudents,
    setGroups,
    setStudets,
} from 'store/reducers/studentsReducer';

import { getRandomString } from 'tools/getRandomString';

import type { TStudent } from 'types/student';

import CSS from './Students.module.scss';
import type { TStudents } from './types';

const Students: FC<TStudents> = (props) => {
    const dispatch = useDispatch();
    const groups = useSelector(selectGroups);
    const students = useSelector(selectStudents);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

    const onAddStudentClick = () => {
        setIsModalOpen(true);
    };

    const onAddStudent = (values: TAddStudentsFormValues) => {
        const id = getRandomString();
        const birthdate = values.birthdate.format('DD.MM.YYYY');
        const group = groups.find((el) => el.name === values.group);
        const name = values.name;

        if (!group) {
            return;
        }
        const newStudent = { id, name, birthdate, group };

        dispatch(addStudent(newStudent));
        setIsModalOpen(false);
    };

    const onRemoveStudent = (student: TStudent) => {
        dispatch(removeStudent(student));
    };

    const onCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        dispatch(setGroups(BACKEND_GROUPS));
        dispatch(setStudets(BACKEND_STUDENTS));
        return () => {
            dispatch(setGroups([]));
            dispatch(setStudets([]));
        };
    }, []);

    return (
        <Flex className={CSS.students} vertical gap={20}>
            <PageHeading title={props.title} />
            <Flex gap={8} wrap={'wrap'}>
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
                <Tooltip title={'Добавить урок'}>
                    <Button shape={'circle'} icon={<PlusOutlined />} onClick={onAddStudentClick} />
                </Tooltip>
            </Flex>
            <Flex gap={8} wrap={'wrap'}>
                {filteredStudents.map((student) => (
                    <StudentsCard key={student.id} student={student} onRemoveCard={onRemoveStudent} />
                ))}
            </Flex>
            <StudentsAddModal groups={groups} isOpen={isModalOpen} onClose={onCloseModal} onSubmit={onAddStudent} />
        </Flex>
    );
};

export default memo(Students);
