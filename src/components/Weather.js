import React from 'react'

export const Weather = ({weather}) => {
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
                {weather.weather.description}
            </div>
            <div className="sunset-sunrise mt-5">
                <span className="sunrise mr-3">
                    <label>Sunrise:</label> {weather.sunrise}
                </span>
                <span className="sunset ml-3">
                    <label>Sunset:</label> {weather.sunset}
                </span>
            </div>
        </div>
    )
}
