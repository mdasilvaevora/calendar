import { combineReducers } from "redux";
import calendarReducer from './calendarReducer';

export default combineReducers({
    calendar: calendarReducer
})