const weatherReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_CITY':
            // console.log('action.payload', action.payload)
            if(state.weatherData.length<3) {
                return {
                    ...state,
                    weatherData: [action.payload, ...state.weatherData]
                }
            }
            // remover position 2 and add new data
            // console.log('hello there', state);
            state.weatherData.splice(2, 1);
            return {
                ...state,
                weatherData: [action.payload, ...state.weatherData]
            }
        default:
            return state;
    }
}

export default weatherReducer