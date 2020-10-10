import * as types from './types';

export const postReminder = ({reminder,day}) => ({
    type: types.POST_REMINDER,
    payload: {reminder, day}
})