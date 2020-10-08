import moment from 'moment';
import uuid from 'react-uuid';

const getFirstDayOfMonth = () => {
    return moment().startOf('month').format('d');
}
const initialStartWeek = moment().startOf('month').add(0,'month').week();
const initialEndWeek = moment().endOf('month').add(0,'month').week();

const initMonth = (initialStartWeek,initialEndWeek) => {
    const name = moment().startOf('month').format('MMMM')
    const weeks = Array(initialEndWeek-initialStartWeek)
                    .fill({id: 0})
                    .map((week, index) => {
                        const weekIndex = index + initialStartWeek;
                        return {
                            id: uuid(),
                            weekIndex: weekIndex,
                            days: Array(7).fill({id:0})
                                        .map((day,index) => {
                                            return {
                                                id: uuid(),
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
    firstDayOfMonth: getFirstDayOfMonth(),
    currentMonth: initMonth(initialStartWeek,initialEndWeek)
}


export default function(state = initialState, action) {
    switch(action.type){
        default:
            return state;
    }
}