import React from 'react';
import moment from 'moment';

import { makeStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100px',
        height: '100px',
        '& $addIcon': {
            display:"none"
        },
        '&:hover':{
            '& $addIcon':{
                display: 'inline-flex'
            }
        }
    },
    day:{

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

    }
}))

const getDayClass = (day, classes) => {
    const today = moment();
    const dayClasses = [classes.day]
    if(day.date.month() !== today.month()) dayClasses.push(classes.outbound)
    if(today.isSame(day.date,'d')) dayClasses.push(classes.today);
    if(day.date.day() === 0 || day.date.day() === 6) dayClasses.push(classes.weekend);
    else dayClasses.push(classes.weekday);
    return dayClasses.join(' ');
}

export default function Day({day}) {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <div className={getDayClass(day,classes)}>
            {day.date.format('D')}
        </div>
        <div className={classes.action}>
            <Fab className={classes.addIcon} color="primary" size="small"><AddIcon/></Fab>
        </div>
    </div>
    )
}
