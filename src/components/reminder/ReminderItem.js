import React from 'react';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';

export default function ReminderItem({reminder, editReminder, removeReminder}) {
    const reminderText = reminder.text.length > 10?
                            `${reminder.text.slice(0,10)}...`
                            :
                            reminder.text
    const handleClick = evt => {
        evt.stopPropagation();
        editReminder(reminder)
    }
    return (
        <Tooltip title={reminder.text}>
            <Chip 
                label={reminderText} 
                onClick={handleClick}
                onDelete={e=>removeReminder(reminder)}
                style={{
                    backgroundColor: reminder.color, 
                    marginTop: '5px',
                    height: '20px'}}
            />
        </Tooltip>
    )
}
