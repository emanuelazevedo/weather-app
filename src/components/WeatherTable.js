import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const WeatherTable = () => {

    const { weatherData } = useContext(GlobalContext)

    console.log('teste', weatherData);
    return (
        <div className="row">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {weatherData.map(weather => <th key={weather.city_name}>{weather.city_name}</th>)}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>temp</th>
                        {weatherData.map(weather => <td key={weather.city_name}>{weather.temp}</td>)}
                    </tr>
                    <tr>
                        <th>sunrise</th>
                        {weatherData.map(weather => <td key={weather.city_name}>{weather.sunrise}</td>)}
                    </tr>
                    <tr>
                        <th>sunset</th>
                        {weatherData.map(weather => <td key={weather.city_name}>{weather.sunset}</td>)}
                    </tr>
                </tbody>
            </table>

        </div>
    )
}
