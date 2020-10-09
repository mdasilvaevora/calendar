import React from 'react'

export default function ReminderItem({reminder, editReminder}) {
    return (
        <div onClick={e => editReminder(reminder)}>
            <span>{reminder.text}</span>
        </div>
    )
}
