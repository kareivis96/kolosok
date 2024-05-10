import type { CalendarProps } from 'antd';
import { Calendar, Checkbox, Flex, Select, Typography } from 'antd';
import type { Dayjs } from 'dayjs';
import type { FC } from 'react';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PageHeading } from 'components/layout/PageHeading';

import { MOCK_ATTENDANCE } from 'mocks/attendance';
import { BACKEND_GROUPS } from 'mocks/groups';
import { BACKEND_STUDENTS } from 'mocks/students';

import {
    selectDays,
    selectMonth,
    selectYear,
    setDays,
    setMonth,
    setYear,
    toggleDayAttendance,
} from 'store/reducers/attendanceReducer';
import { selectStudentById, selectStudents, setGroups, setStudets } from 'store/reducers/studentsReducer';

import type { TAttendance } from './types';

const Attendance: FC<TAttendance> = (props) => {
    const dispatch = useDispatch();
    const students = useSelector(selectStudents);
    const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
    const currentStudent = useSelector(selectStudentById(selectedStudentId));
    const year = useSelector(selectYear);
    const month = useSelector(selectMonth);
    const days = useSelector(selectDays);

    const setDate = (date: Dayjs) => {
        dispatch(setYear(date.format('YYYY')));
        dispatch(setMonth(date.format('MM')));
    };

    const setDayAttendance = (day: string) => {
        dispatch(toggleDayAttendance(day));
    };

    const cellRender: CalendarProps<Dayjs>['cellRender'] = (current) => {
        const currentDay = current.format('DD');
        const currentMonth = current.format('MM');

        if (currentMonth === month) {
            return (
                <Checkbox checked={!!days && !!days[currentDay]} onChange={() => setDayAttendance(currentDay)}>
                    Присутствовал
                </Checkbox>
            );
        }
    };

    useEffect(() => {
        if (year in MOCK_ATTENDANCE && month in MOCK_ATTENDANCE[year]) {
            dispatch(setDays(MOCK_ATTENDANCE[year][month]));
        } else {
            dispatch(setDays(null));
        }
    }, [year, month, currentStudent]);

    useEffect(() => {
        dispatch(setGroups(BACKEND_GROUPS));
        dispatch(setStudets(BACKEND_STUDENTS));
        return () => {
            dispatch(setGroups([]));
            dispatch(setStudets([]));
        };
    }, []);

    useEffect(() => console.log(days), [days]);

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
            {currentStudent ? (
                <Calendar cellRender={cellRender} onChange={setDate} />
            ) : (
                <Typography.Title level={5}>Выберите ребенка</Typography.Title>
            )}
        </Flex>
    );
};

export default memo(Attendance);
