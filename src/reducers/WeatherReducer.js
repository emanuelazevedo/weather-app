const weatherReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_CITY':
            console.log('action.payload', action.payload)
            return {
                ...state,
                weatherData: [action.payload, ...state.weatherData]
            }
        default:
            return state;
    }
}

export default weatherReducer