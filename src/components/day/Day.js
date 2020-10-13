import React from 'react';
import moment from 'moment';

import { makeStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import ReminderList from '../reminder/ReminderList';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '125px',
        height: '125px',
        '& $addIcon': {
            display:"none"
        },
        '&:hover':{
            '& $addIcon':{
                display: 'inline-flex'
            }
        }
    },
    today:{
        color: 'green'
    },
    weekday:{
        color: 'black'
    },
    weekend: {
        color: 'blue'
    },
    outbound: {
        color: 'grey'
    },
    action: {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    addIcon: {
        '&:focus': {
            outline: 'none'
        }
    }
}))

const isSameMonth = (d1,d2) => {
    return d1.month() === d2.month()
}

const isSameDay = (d1,d2) => {
    return d1.isSame(d2, 'd')
}

const isWeekend = (d1) => {
    return d1.day() === 0 || d1.day() === 6
}

const getDayClass = (day, classes) => {
    const today = moment();
    const dayClasses = []
    if(!isSameMonth(day.date, today)) dayClasses.push(classes.outbound)
    if(isSameDay(day.date, today)) dayClasses.push(classes.today);
    if(isWeekend(day.date)) dayClasses.push(classes.weekend);
    else dayClasses.push(classes.weekday);
    return dayClasses.join(' ');
}

export default function Day({day, addReminder, editReminder, removeReminder}) {
    const classes = useStyles();
    
    return (
    <div className={classes.root}>
        <div className={getDayClass(day,classes)}>
            {day.date.format('D')}
        </div>
        <ReminderList 
            reminders={day.reminders}
            editReminder={editReminder}
            removeReminder={removeReminder}
        /> 

        {isSameMonth(day.date, moment()) && 
            <div className={classes.action}>
                <Fab className={classes.addIcon}
                    onClick={addReminder} 
                    color="primary" 
                    size="small">
                    <AddIcon/>
                </Fab>
            </div>
        }
    </div>
    )
}
