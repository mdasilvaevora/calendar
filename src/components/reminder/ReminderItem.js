import React from 'react';
import Chip from '@material-ui/core/Chip';

export default function ReminderItem({reminder, editReminder, removeReminder}) {
    return (
            <Chip 
                label={reminder.text} 
                onClick={e=>editReminder(reminder)}
                onDelete={e=>removeReminder(reminder)}
                style={{backgroundColor: reminder.color, marginBottom: '5px'}}/>
    )
}
