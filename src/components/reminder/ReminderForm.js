import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import Form from 'react-bootstrap/Form';
import Paper from '@material-ui/core/Paper';
import { CirclePicker } from 'react-color';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    }
}))

const days = moment.weekdaysShort();

export default function ReminderForm({reminder}) {
    const classes = useStyles();
    const [updatedReminder, setUpdatedReminder] = React.useState(reminder)
    
    const handleStartTimeChange = evt => {
        const updatedTime = evt.target.value;
        if(updatedTime < moment().format('HH:mm')) return;
        setUpdatedReminder({
            ...updatedReminder,
            startTime:updatedTime
        })
    }

    const handleDayChange = evt => {
        setUpdatedReminder({
            ...updatedReminder,
            day: evt.target.value
        })
    }

    const handleColorChange = color => {
        setUpdatedReminder({
            ...updatedReminder,
            color: color.hex
        })
    }
    
    const handleDescriptionChange = evt => {
        setUpdatedReminder({
            ...updatedReminder,
            text: evt.target.value
        })
    }

    const handleCityChange = evt => {
        setUpdatedReminder({
            ...updatedReminder,
            city: evt.target.value
        })
    }
    return (
        <div className={classes.root}>
            <Paper style={{padding: '20px'}}>
                <div style={{backgroundColor: updatedReminder.color, width: '100%', height: '10px'}}></div>
                <Form>
                    <Form.Row>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={updatedReminder.text}
                                placeholder="Enter description"
                                onChange={handleDescriptionChange}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group>
                            <Form.Label>Day</Form.Label>
                            <Form.Control 
                                as="select"
                                value={updatedReminder.day}
                                onChange={handleDayChange}>
                                {days.map((day,index) => (
                                    <option key={index}>{day}</option>
                                ))}
                            </Form.Control>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Time</Form.Label>
                            <input type="time" value={updatedReminder.startTime} onChange={handleStartTimeChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>City</Form.Label>
                            <Form.Control 
                                type="text" 
                                value={updatedReminder.city}
                                onChange={handleCityChange}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group>
                        <Form.Label>Color</Form.Label>
                            <CirclePicker 
                                color={reminder.color}
                                onChangeComplete={handleColorChange}/>
                        </Form.Group>
                    </Form.Row>
                </Form>
            </Paper>
        </div>
    )
}
