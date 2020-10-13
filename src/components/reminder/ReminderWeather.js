import React from 'react';
import ReactWeather from 'react-open-weather';
import { OPEN_WEATHER_API_KEY } from '../../constants/index';

export default function ReminderWeather({location}) {
    return (
        <div s>
            <ReactWeather
                forecast={"today"}
                type={"city"}
                city={location}
                apikey={OPEN_WEATHER_API_KEY}
            />
        </div>
    )
}
