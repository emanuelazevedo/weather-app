import React, { useEffect, useState} from 'react'
import mtz from 'moment-timezone'

export const Weather = ({weather}) => {
    const [sunrise, setSunrise] = useState('');
    const [sunset, setSunset] = useState('');
    // const [icon, setIcon] = useState();


    useEffect(() => {
        // use momento.js to get todays date
        const dateNow = mtz().tz(weather.timezone).format('YYYY-MM-DD');
        // use momento.js to get sunrise and sunset hour
        const sunrise = mtz(dateNow + ' ' + weather.sunrise).tz(weather.timezone).format('HH:mm');
        const sunset = mtz(dateNow + ' ' + weather.sunset).tz(weather.timezone).format('HH:mm');

        setSunrise(sunrise);
        setSunset(sunset);
        // const icon = require(`../icons/${weather.weather.icon}.png`);
        // setIcon(icon);

    }, [weather.timezone, weather.sunrise, weather.sunset])

    return (
        <div className="weather-container text-center col-3 m-5">
            <div className="city-name mt-4">
                {weather.city_name}
            </div>
            <div className="temp-container my-5 mx-auto">
                <span className="temp-data">
                    {weather.temp}ºC
                </span>
            </div>
            <div className="weather-desc pt-5 ">
                {/* <span><img src={icon} alt=""  /></span> */}
                {weather.weather.description}
            </div>
            <div className="sunset-sunrise mt-5">
                <span className="sunrise mr-3">
                    <label>Sunrise:</label> {sunrise}
                </span>
                <span className="sunset ml-3">
                    <label>Sunset:</label> {sunset}
                </span>
            </div>
        </div>
    )
}
