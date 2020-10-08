import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

export default function CalendarNav() {
    const { currentMonth } = useSelector(
        (state) => ({ currentMonth: state.calendar.currentMonth }),
        shallowEqual
      );
    return (
        <div>
            {currentMonth.name}
        </div>
    )
}
