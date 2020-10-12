import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/styles';
import Form from 'react-bootstrap/Form';
import Paper from '@material-ui/core/Paper';
import {CirclePicker} from 'react-color';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    colorDisplay: {
        width: '100%',
        height: '20px',
        borderRadius: '5px',
        marginBottom: '8px'
    },
    colorPicker: {
        marginRight: '0 !important',
        marginBottom: '0 !important',
        width: '400px !important',
        justifyContent: 'center'
    }
}))

const days = moment.weekdaysShort();

export default function ReminderForm({reminder, updateReminder}) {
    const classes = useStyles();
    const [updatedReminder, setUpdatedReminder] = React.useState(reminder);
    const isNewReminder = reminder.id === undefined;
    
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

    const handleSubmit = evt => {
        updateReminder(updatedReminder)
    }

    return (
        <div className={classes.root}>
            <Paper style={{padding: '20px'}}>
                <div 
                    className={classes.colorDisplay}
                    style={{backgroundColor: updatedReminder.color}}
                />
                <Form>
                    <Form.Row>
                        <Form.Group style={{width: '100%'}}>
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

                        <Form.Group style={{display:'flex', flexDirection:'column'}}>
                            <Form.Label>Time</Form.Label>
                            <input 
                                style={{height: '100%'}}
                                type="time" 
                                value={updatedReminder.startTime} 
                                onChange={handleStartTimeChange}/>
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
                        <Form.Group style={{width: '100%'}}>
                        <Form.Label>Color</Form.Label>
                            <CirclePicker 
                                className={classes.colorPicker}
                                color={reminder.color}
                                onChangeComplete={handleColorChange}/>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Button 
                            variant="primary" 
                            onClick={handleSubmit}
                            style={{
                                backgroundColor: updatedReminder.color,
                                borderColor: updatedReminder.color,
                                marginRight: '8px'}}>
                            {isNewReminder? 'Crear' : 'Actualizar'}
                        </Button>
                    </Form.Row>
                </Form>
            </Paper>
        </div>
    )
}
