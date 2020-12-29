import React, {createContext, useReducer} from 'react'
import WeatherReducer from '../reducers/WeatherReducer'

import {weatherAPI} from '../api/WeatherAPI'


const initialState = {
    weatherData: []
}
        // {
        //     "rh": 80,
        //     "pod": "d",
        //     "lon": -8.64554,
        //     "pres": 1015.5,
        //     "timezone": "Europe\/Lisbon",
        //     "ob_time": "2020-12-27 14:25",
        //     "country_code": "PT",
        //     "clouds": 100,
        //     "ts": 1609079100,
        //     "solar_rad": 72.9,
        //     "state_code": "02",
        //     "city_name": "Aveiro",
        //     "wind_spd": 0.45,
        //     "wind_cdir_full": "east",
        //     "wind_cdir": "E",
        //     "slp": 1017.7,
        //     "vis": 5,
        //     "h_angle": 36,
        //     "sunset": "17:14",
        //     "dni": 734.36,
        //     "dewpt": 5.7,
        //     "snow": 0,
        //     "uv": 3.8878,
        //     "precip": 0,
        //     "wind_dir": 82,
        //     "sunrise": "07:56",
        //     "ghi": 364.37,
        //     "dhi": 85.64,
        //     "aqi": 26,
        //     "lat": 40.64427,
        //     "weather": {
        //         "icon": "c04d",
        //         "code": 804,
        //         "description": "Overcast clouds"
        //     },
        //     "datetime": "2020-12-27:14",
        //     "temp": 8.9,
        //     "station": "D5475",
        //     "elev_angle": 22.89,
        //     "app_temp": 8.9
        
        // }


export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(WeatherReducer, initialState);

    async function addCity(cityName) {
        // console.log('1', cityName);
        const cityData =  await weatherAPI(cityName);
        // console.log('2', cityData)
        dispatch({
            type: 'ADD_CITY',
            payload: cityData
        })
    }

    return (
        <GlobalContext.Provider value={{
            weatherData: state.weatherData,
            addCity
        }}>
            {children}
        </GlobalContext.Provider>
    )
}