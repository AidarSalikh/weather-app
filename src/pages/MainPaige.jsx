import React, { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContextProvider'


export const MainPaige = () => {

    const {feelsLikeCel, city, setCity, forecastDays, currentHour} = useContext(WeatherContext)

  return (
    <div>
        <h2>{feelsLikeCel}</h2>
        <p>{new Intl.DateTimeFormat('en-US', {hour: 'numeric'}).format(currentHour * 1000)}</p>
        {
          forecastDays.map((day, index) => (
            <p key={index}>{new Intl.DateTimeFormat('en-US', {hour: 'numeric'}).format(day.date_epoch * 1000)}</p>
          ))
        }
        <input
            className='inputField'
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
        />
    </div>
  )
}
