import React from 'react'
import moment from 'moment';

export default function CalendarHeader() {
    const weekDays = moment.weekdays();
    return (
        weekDays.map(day => {
            return (
                <th key={day} className="week-day">
                    {day}
                </th>
            )
        })
    )
}
