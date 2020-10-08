import React from 'react';
import Calendar from './components/calendar/Calendar';
import { Provider } from 'react-redux';
import store from './_redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Calendar/>
      </div>
    </Provider>
  );
}

export default App;
