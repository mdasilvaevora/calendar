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
        case 'ADD_REMINDER': {
            const {reminder,date} = action.payload;
        }
        default:
            return state;
    }
}