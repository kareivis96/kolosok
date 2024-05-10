import type { CalendarProps } from 'antd';
import { Badge, Calendar, Flex, Select, Typography } from 'antd';
import type { Dayjs } from 'dayjs';
import type { FC } from 'react';
import { memo, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PageHeading } from 'components/layout/PageHeading';

import { MOCK_ATTENDANCE } from 'mocks/attendance';
import { BACKEND_GROUPS } from 'mocks/groups';
import { BACKEND_STUDENTS } from 'mocks/students';

import { selectStudentById, selectStudents, setGroups, setStudets } from 'store/reducers/studentsReducer';

import type { TMonthAttendance } from 'types/attendance';

import type { TAttendance } from './types';

const Attendance: FC<TAttendance> = (props) => {
    const dispatch = useDispatch();
    const students = useSelector(selectStudents);
    const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
    const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
    const currentStudent = useSelector(selectStudentById(selectedStudentId));
    const [currentAttendance, setCurrentAttendance] = useState<TMonthAttendance | null>(null);

    const onDateChange = (date: Dayjs) => {
        setSelectedMonth(date.format('MM.YYYY'));
    };

    const cellRender: CalendarProps<Dayjs>['cellRender'] = (current) => {
        const currentDay = current.format('DD');
        console.log(currentAttendance, selectedMonth);

        if (!!currentAttendance && !!currentAttendance[currentDay]) {
            return <Badge status='success' text='Присутствовал' />;
        }
        return undefined;
    };

    useEffect(() => {
        if (selectedMonth && selectedMonth in MOCK_ATTENDANCE) {
            setCurrentAttendance(MOCK_ATTENDANCE[selectedMonth]);
        } else {
            setCurrentAttendance(null);
        }
    }, [selectedMonth, currentStudent]);

    useEffect(() => {
        dispatch(setGroups(BACKEND_GROUPS));
        dispatch(setStudets(BACKEND_STUDENTS));
        return () => {
            dispatch(setGroups([]));
            dispatch(setStudets([]));
        };
    }, []);

    const attendanceContent = useMemo(() => {
        if (!currentStudent) {
            return <Typography.Title level={5}>Выберите ребенка</Typography.Title>;
        }
        return <Calendar cellRender={cellRender} onPanelChange={onDateChange} />;
    }, [currentStudent, selectedMonth]);

    return (
        <Flex vertical gap={20}>
            <PageHeading title={props.title} />
            <Flex gap={20}>
                <Select
                    placeholder={'Выберите ребенка'}
                    allowClear
                    onChange={setSelectedStudentId}
                    options={students.map((student) => {
                        return { label: student.name, value: student.id };
                    })}
                />
            </Flex>
            {attendanceContent}
        </Flex>
    );
};

export default memo(Attendance);
