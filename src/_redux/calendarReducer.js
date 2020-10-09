import moment from 'moment';
import uuid from 'react-uuid';

const initialStartWeek = moment().startOf('month').add(0,'month').week();
const initialEndWeek = moment().endOf('month').add(0,'month').week();

const initMonth = (initialStartWeek,initialEndWeek) => {
    const name = moment().startOf('month').format('MMMM');
    const weeks = Array((initialEndWeek-initialStartWeek)+1)
                    .fill({id: 0})
                    .map((week, index) => {
                        const weekIndex = index + initialStartWeek;
                        const weekId = uuid();
                        return {
                            id: weekId,
                            weekIndex: weekIndex,
                            days: Array(7).fill({id:0})
                                        .map((day,index) => {
                                            return {
                                                id: uuid(),
                                                weekId,
                                                date: moment()
                                                            .week(weekIndex)
                                                            .startOf('week')
                                                            .clone()
                                                            .add(index, 'day'),
                                                reminders: []
                                            }
                                        })
                        }
                    })
    return {
        name,
        weeks
    }
}

const initialState = {
    weekDays: moment.weekdays(),
    currentMonth: initMonth(initialStartWeek,initialEndWeek)
}


export default function(state = initialState, action) {
    switch(action.type){
        case 'POST_REMINDER': {
            const {reminder,date} = action.payload;

            const reminderToEdit = reminder.id? reminder : {
                ...reminder,
                id: uuid()
            }
            
            const updatedWeeks = state.currentMonth.weeks.map(week => {
                if(week.id === date.weekId) {
                    const updatedDays = week.days.map(day => {
                        if(day.id === date.id) {
                            const updatedReminders = day.reminders.filter(reminder => reminder.id !== reminderToEdit.id );
                            updatedReminders.push(reminderToEdit)
                            return {
                                ...day,
                                reminders: updatedReminders
                            }
                        }
                        else return day;
                    })
                    const updatedWeek = {
                        ...week,
                        days: updatedDays
                    }
                    return updatedWeek
                }
                else return week
            })

            const updatedMonth = {
                ...state.currentMonth,
                weeks: updatedWeeks
            }

            return {
                ...state,
                currentMonth: updatedMonth
            }
        }
        default:
            return state;
    }
}