import React, { createContext, useEffect, useState, useMemo} from "react";
import axios from "axios";

export const WeatherContext = createContext(null)


export const WeatherContextProvider = ({children}) => {

    const [weather, setWeather] = useState(null)
    const [city, setCity] = useState('Samsun')

      
        const options =  useMemo(() => ({
            method: 'GET',
            url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
            params: {
              q: `${city}`,
              days: '3'
            },
            headers: {
              'X-RapidAPI-Key': 'ba2844ae9emshfeecf16dc273583p1222dfjsn7a7f7d28dc07',
              'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
          }), [city] )

      useEffect(() => {
        async function getWeather () {
            try {
                const response = await axios.request(options)
                setWeather(response.data)
            } catch (error) {
                console.log(error.message)
                }
            }
        getWeather()
            
      }, [options])

    if (!weather) return null
    
    console.log(weather)
    
    const {
        feelslike_c: feelsLikeCel,
        temp_c: currentTemp,
        last_updated_epoch: currentHour
    } = weather.current


    const forecastDays = weather.forecast.forecastday

    const forecastHours = forecastDays[0].hour.concat(forecastDays[1].hour)

    console.log('forecastHours', forecastHours)

    const {
        maxtemp_c: currentMaxTemp,
        mintemp_c: currentMinTemp,
        condition,

    } = forecastDays[0].day

    console.log('forecastDays', forecastDays)
    console.log('condition', condition)

    const contextValues = {
        currentHour,
        forecastHours,
        currentMaxTemp,
        currentMinTemp,
        currentTemp,
        condition,
        setCity,
        city,
        feelsLikeCel,
        forecastDays,
        
    }

    return (
        <WeatherContext.Provider value={contextValues}>
            {children}
        </WeatherContext.Provider>
    )
}
