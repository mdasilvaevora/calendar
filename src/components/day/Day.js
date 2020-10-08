import React from 'react';
import moment from 'moment';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    today:{
        color: 'green'
    },
    weekday:{
        color: 'black'
    },
    weekend: {
        color: 'blue'
    }
}))

const getDayClass = (day) => {
    console.log(day.date)
    const today = moment();
    if(today.isSame(day.date,'d')) return 'today';
    if(day.date.day() === 0 || day.date.day() === 6) return 'weekend';
    else return 'weekday';
}

export default function Day({day}) {
    const classes = useStyles();

    return (
        <div className={classes[getDayClass(day)]}>
            {day.date.format('D')}
        </div>
    )
}
