import React, { useContext } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { WeatherContext } from '../context/WeatherContextProvider';
import { ICON_MAP } from '../iconMap';


export const TodayHourlyWeather = () => {

    const {forecastHours, currentHour} = useContext(WeatherContext)
    const HOUR_FORMATTER = new Intl.DateTimeFormat('en-US', {hour: 'numeric'})

    let settings = {
      className: "center",
      infinite: false,
      centerPadding: "60px",
      slidesToShow: 10,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 3,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className='carouselContainer'>
        {/* <p>Sunny conditions will continue all day</p> */}
      <Slider {...settings}>
        {
          forecastHours.filter((el) => el.time_epoch >= currentHour).map((el, index) => {
            const hours = el.time_epoch * 1000
            const currentIcon = ICON_MAP.get(el.condition.code)

            return (
              <div key={index} className='card'>
                <div className='cardElements'>
                  <p>{index === 0 ? 'NOW' : HOUR_FORMATTER.format(hours)}</p>
                  <p>{Math.round(el.temp_c)}&deg;</p>
                  <img src={require(`../assets/icons/${currentIcon}.png`)} alt='#' />
                </div>
              </div>
            )
          })
        }
        {/* {
          forecastHours.map((el, index) => {
            const hours = el.time_epoch * 1000
            return (
              <div key={index}>
                <p>{HOUR_FORMATTER.format(hours)}</p>
                <p>{Math.round(el.temp_c)}&deg;</p>
              </div>
            )
          }).filter((el) => el.time_epoch >= currentHour)
        } */}
      </Slider>
      </div>
    );
  
}
