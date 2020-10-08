import React from 'react';
import CalendarNav from './CalendarNav';
import CalendarHeader from './CalendarHeader';
import CalendarMonth from './CalendarMonth';

export default function Calendar() {
    return (
        <>
            <CalendarNav/>
            <CalendarHeader/>
            <CalendarMonth/>
        </>
    )
}
