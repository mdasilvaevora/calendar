import React from 'react';
import CalendarContainer from './components/calendar/CalendarContainer';
import { Provider } from 'react-redux';
import store from './_redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CalendarContainer/>
      </div>
    </Provider>
  );
}

export default App;
