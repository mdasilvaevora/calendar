import React from 'react';
import Modal from '@material-ui/core/Modal';
import Day from './Day';
import ReminderContainer from '../reminder/ReminderContainer';

export default function DayContainer({day}) {
    const [reminderForm, setReminderForm] = React.useState(false);
    const [reminder, setReminder] = React.useState()
    const handleOpenReminder = evt => {
        setReminderForm(true)
    }
    const handleCloseReminder = evt => {
        setReminderForm(false)
    }
    return (
        <>
        <Day day={day} addReminder={handleOpenReminder}/>
        <Modal 
            open={reminderForm}
            onClose={handleCloseReminder}
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <ReminderContainer reminder={reminder} date={day} />
        </Modal>
        </>
    )
}
