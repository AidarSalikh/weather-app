import React, { useContext } from 'react'
import { WeatherContext } from '../context/WeatherContextProvider'
import { ICON_MAP } from '../iconMap'

export const WeeklyWeatherTable = () => {
  const {forecastDays} = useContext(WeatherContext)
  const DAY_FORMATTER = new Intl.DateTimeFormat('en-US', {weekday: 'short'})

  return (
    <div className='weeklyContainer'>
      <div className='weeklyTable'>

        <p>10-DAY FORECAST</p>
        {forecastDays.map((dayInfo, index) => {
          const dayDate = dayInfo.date_epoch * 1000
          const day = dayInfo.day
          const conditionIcon = ICON_MAP.get(day.condition.code)

          return (
            <div key={index} className='dayForecast'>
              <h5>{index === 0 ? 'Today' : DAY_FORMATTER.format(dayDate)}</h5>
              <img src={require(`../assets/icons/${conditionIcon}.png`)} alt='#'/>
              <p>{Math.round(day.mintemp_c)}</p>
              <p>{Math.round(day.maxtemp_c)}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
