import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

export default function CalendarMonth() {
    const { currentMonth } = useSelector(
        (state) => ({ currentMonth: state.calendar.currentMonth }),
        shallowEqual
      );

    return (
        <tbody>
            {currentMonth.weeks.map((week,index) => (
                <tr key={index}>
                    {week.days.map((day,index) => (
                        <td key={index}>
                            {day.date.format('D')}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    )
}
