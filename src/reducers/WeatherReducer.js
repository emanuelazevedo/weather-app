const weatherReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_CITY':
            console.log('action.payload', state.weatherData.length)
            if(state.weatherData.length<3) {
                return {
                    ...state,
                    weatherData: [action.payload, ...state.weatherData]
                }
            }
            // console.log('hello there', state.weatherData.length);
            // return {
            //     ...state,
            //     weatherData: state.weatherData.splice(0, 1, action.payload)
            // }
        default:
            return state;
    }
}

export default weatherReducer