import axios from 'axios'

export const weatherAPI = cityName => {
    
    return axios.get(`https://api.weatherbit.io/v2.0/current?city=${cityName}&key=6accba4c460e4434ba36f3d1a5ac1031`)
        .then(res => {
            console.log('res', res.data.data[0]);
            return res.data.data[0]
        })
        .catch(err => {
            console.error(err)
        })
}