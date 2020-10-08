import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Calendar from './Calendar';

export default function CalendarContainer() {
    const { calendar } = useSelector(
        (state) => ({ calendar: state.calendar }),
        shallowEqual
      );

    return (
        <>
            <Calendar month={calendar.currentMonth} weekDays={calendar.weekDays}/>
        </>
    )
}
