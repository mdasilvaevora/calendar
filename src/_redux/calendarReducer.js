import moment from 'moment';
import uuid from 'react-uuid';

const initMonth = (initialStartWeek,initialEndWeek) => {
    const month = moment().startOf('month');
    const name = month.format('MMMM');
    const index = month.month()
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
        index,
        weeks
    }
}

const initialStartWeek = moment().startOf('month').add(0,'month').week();
const initialEndWeek = moment().endOf('month').add(0,'month').week();
const currentMonth = initMonth(initialStartWeek,initialEndWeek);

const initialState = {
    currentMonthIndex: currentMonth.index,
    year: {[currentMonth.index]: currentMonth}
}

const addReminder = (remindersList,newReminder) => {
    const updatedReminderList = remindersList.filter(reminder => reminder.id !== newReminder.id);
    updatedReminderList.push(newReminder);
    return updatedReminderList;
}

const removeReminder = (remindersList,deletedReminder) => {
    return remindersList.filter(reminder => reminder.id !== deletedReminder.id )
}

const updateReminderInMonth = (action, reminder, day, month) => {
    const reminderToUpdate = reminder.id? reminder : {
        ...reminder,
        id: uuid()
    }

    const updatedWeeks = month.weeks.map(week => {
        if(week.id === day.weekId) {
            const updatedDays = week.days.map(weekDay => {
                if(day.id === weekDay.id) {
                    return {
                        ...day,
                        reminders: action(day.reminders,reminderToUpdate)
                    }
                }
                else return weekDay;
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
        ...month,
        weeks: updatedWeeks
    }

    return updatedMonth;
}

export default function(state = initialState, action) {
    switch(action.type){
        case 'POST_REMINDER': {
            const {reminder,day} = action.payload;
            const updatedMonth = updateReminderInMonth(addReminder,reminder, day, state.year[state.currentMonthIndex]);
            return {
                ...state,
                year: {
                    ...state.year,
                    [updatedMonth.index]: updatedMonth
                },
            }
        }
        case 'DELETE_REMINDER' : {
            const {reminder, day} = action.payload;
            const updatedMonth = updateReminderInMonth(removeReminder,reminder,day,state.year[state.currentMonthIndex]);
            return {
                ...state,
                year: {
                    ...state.year,
                    [updatedMonth.index]: updatedMonth
                },
            }
        }
        default:
            return state;
    }
}