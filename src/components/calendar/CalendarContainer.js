import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import Calendar from './CalendarMonth';

export default function CalendarContainer() {
    const { calendar } = useSelector(
        (state) => ({ calendar: state.calendar }),
        shallowEqual
      );

    return (
        <>
            <Calendar month={calendar.year[calendar.currentMonthIndex]}/>
        </>
    )
}
