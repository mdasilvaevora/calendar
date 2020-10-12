import React from 'react';
import { makeStyles } from '@material-ui/styles';
import ReminderItem from './ReminderItem';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    }
}))


export default function ReminderList({reminders, editReminder, removeReminder}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           {reminders.map(reminder => (
                <ReminderItem reminder={reminder} editReminder={editReminder} removeReminder={removeReminder}/>
            ))}
        </div>
    )
}
