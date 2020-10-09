import React from 'react'
import moment from 'moment';
import { useDispatch } from 'react-redux';
import ReminderForm from './ReminderForm';
import { addReminder } from '../../_redux/calendarActions';

const newReminder = {
    startTime: `${moment().format('HH')}:${moment().minutes()}`,
    text: '',
    color: '#4D4D4D',
    city: '',
    day: moment().format('ddd')
}

export default function ReminderContainer({reminder, date}) {
    const dispatch = useDispatch();
    const addNewReminder = (reminder) => {
        dispatch(addReminder({reminder, date}))
    }
    return (
        <ReminderForm 
            reminder={reminder? reminder : newReminder}
        />
    )
}
