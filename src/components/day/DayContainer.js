import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteReminder } from '../../_redux/calendarActions';
import Modal from '@material-ui/core/Modal';
import Day from './Day';
import ReminderFormContainer from '../reminder/ReminderFormContainer';

export default function DayContainer({day}) {
    const dispatch = useDispatch();
    const [reminderForm, setReminderForm] = React.useState(false);
    const [reminder, setReminder] = React.useState()
    
    const handleAddReminder = evt => {
        setReminder(undefined)
        setReminderForm(true)
    }
    
    const handleCloseReminder = () => {
        setReminderForm(false)
    }

    const handleEditReminder = reminder => {
        setReminder(reminder)
        setReminderForm(true)
    }

    const handleRemoveReminder = reminder => {
        dispatch(deleteReminder({reminder,day}))
    }
    return (
        <>
        <Day 
            day={day} 
            addReminder={handleAddReminder}
            editReminder={handleEditReminder}
            removeReminder={handleRemoveReminder}/>
        <Modal 
            open={reminderForm}
            onClose={handleCloseReminder}
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <ReminderFormContainer 
                    handleCloseReminder={handleCloseReminder}
                    reminder={reminder}
                    day={day} />
        </Modal>
        </>
    )
}
