import * as types from './types';

export const addReminder = ({reminder,date}) => ({
    type: types.ADD_REMINDER,
    payload: {reminder, date}
})