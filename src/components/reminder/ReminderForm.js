import React from 'react';
import moment from 'moment';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/styles';
import Form from 'react-bootstrap/Form';
import Paper from '@material-ui/core/Paper';
import {CirclePicker} from 'react-color';
import Button from 'react-bootstrap/Button';

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

const ReminderFormSchema = Yup.object().shape({
    text: Yup.string()
                .max(30, 'Ooops, description is to long. Should be less than 30 characters.')
                .required('You should write a description')
})

const days = moment.weekdaysShort();

export default function ReminderForm({reminder, updateReminder}) {
    const classes = useStyles();
    const [updatedReminder, setUpdatedReminder] = React.useState(reminder);
    const isNewReminder = reminder.id === undefined;

    const handleSubmit = values => {
        updateReminder(values)
    }

    return (
        <div className={classes.root}>
            <Paper style={{padding: '20px'}}>
                <div 
                    className={classes.colorDisplay}
                    style={{backgroundColor: updatedReminder.color}}
                />

                <Formik
                    validationSchema={ReminderFormSchema}
                    onSubmit={handleSubmit}
                    initialValues={updatedReminder}
                >
                {({ values, errors, touched, handleSubmit, handleChange, setValues}) => (
                    <Form noValidate onSubmit={handleSubmit} >
                        <Form.Row>
                            <Form.Group style={{width: '100%'}}>
                                <Form.Label>Description</Form.Label>
                                <Form.Control 
                                    name="text"
                                    type="text" 
                                    value={values.text}
                                    placeholder="Enter description"
                                    onChange={handleChange}
                                    isInvalid={touched.text && errors.text}
                                    isValid={touched.text && !errors.text}/>
                                <Form.Control.Feedback type="invalid">
                                    {errors.text}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group>
                                <Form.Label>Day</Form.Label>
                                <Form.Control 
                                    name="day"
                                    as="select"
                                    value={values.day}
                                    onChange={handleChange}>
                                    {days.map((day,index) => (
                                        <option key={index}>{day}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>

                            <Form.Group style={{display:'flex', flexDirection:'column'}}>
                                <Form.Label>Time</Form.Label>
                                <input 
                                    name="startTime"
                                    style={{height: '100%'}}
                                    type="time" 
                                    value={values.startTime} 
                                    onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>City</Form.Label>
                                <Form.Control 
                                    name="city"
                                    type="text" 
                                    value={values.city}
                                    onChange={handleChange}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group style={{width: '100%'}}>
                            <Form.Label>Color</Form.Label>
                                <CirclePicker 
                                    className={classes.colorPicker}
                                    color={values.color}
                                    onChangeComplete={color => setValues({color: color.hex})}/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Button 
                                variant="primary" 
                                type="submit"
                                style={{
                                    backgroundColor: updatedReminder.color,
                                    borderColor: updatedReminder.color,
                                    marginRight: '8px'}}>
                                {isNewReminder? 'Crear' : 'Actualizar'}
                            </Button>
                        </Form.Row>
                    </Form>
                )}
                </Formik>
            </Paper>
        </div>
    )
}
