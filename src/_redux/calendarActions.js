import * as types from './types';

export const postReminder = ({reminder,date}) => ({
    type: types.POST_REMINDER,
    payload: {reminder, date}
})