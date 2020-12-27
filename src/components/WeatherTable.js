import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'


export const WeatherTable = () => {

    const { weatherData } = useContext(GlobalContext)

    console.log('teste', weatherData);
    return (
        <div className="row">
            {/* <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>city1</th>
                        <th>city2</th>
                        <th>city3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>---</th>
                        <td>---</td>
                        <td>---</td>
                        <td>---</td>
                    </tr>
                    <tr>
                        <th>temp</th>
                        <td>city1temp</td>
                        <td>city2temp</td>
                        <td>city3temp</td>
                    </tr>
                    <tr>
                        <th>sunrise</th>
                        <td>city1sunrise</td>
                        <td>city2sunrise</td>
                        <td>city3sunrise</td>
                    </tr>
                    <tr>
                        <th>sunset</th>
                        <td>city1sunset</td>
                        <td>city2sunset</td>
                        <td>city3sunset</td>
                    </tr>
                </tbody>
            </table> */}
            {weatherData.map(weather => weather.city_name)}
        </div>
    )
}
