import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import ReminderItem from './ReminderItem';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    }
}))

const compareTimeOrder = (r1,r2) => {
    if(r1.startTime > r2.startTime) return 1;
    else return -1;
}


export default function ReminderList({reminders, editReminder, removeReminder}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           {reminders.sort(compareTimeOrder).map(reminder => (
                <ReminderItem reminder={reminder} editReminder={editReminder} removeReminder={removeReminder}/>
            ))}
        </div>
    )
}
