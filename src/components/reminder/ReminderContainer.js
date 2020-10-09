import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import ReminderForm from './ReminderForm';
import { postReminder } from '../../_redux/calendarActions';

const newReminder = {
    startTime: `${moment().format('HH')}:${moment().minutes()}`,
    text: '',
    color: '#4D4D4D',
    city: '',
    day: moment().format('ddd')
}

export default function ReminderContainer({reminder, date}) {
    const dispatch = useDispatch();
    const updateReminder = (reminder) => {
        dispatch(postReminder({reminder, date}))
    }
    return (
        <ReminderForm 
            reminder={reminder? reminder : newReminder}
            updateReminder={updateReminder}
        />
    )
}
