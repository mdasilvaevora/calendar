import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import ReminderForm from './ReminderForm';
import { postReminder, deleteReminder } from '../../_redux/calendarActions';

const newReminder = {
    startTime: `${moment().format('HH')}:${moment().minutes()}`,
    text: '',
    color: '#4D4D4D',
    city: '',
    day: moment().format('ddd')
}

export default function ReminderContainer({reminder, day}) {
    const dispatch = useDispatch();
    const updateReminder = (reminder) => {
        dispatch(postReminder({reminder, day}))
    }
    const removeReminder = (reminder) => {
        dispatch(deleteReminder({reminder,day}))
    }
    return (
        <ReminderForm 
            reminder={reminder? reminder : newReminder}
            updateReminder={updateReminder}
            removeReminder={removeReminder}
        />
    )
}
