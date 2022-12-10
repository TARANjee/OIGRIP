export const GeoLocation = () => async dispatch => {

    dispatch({ type: 'USER_LOCATION_REQUEST' })

    try {
        const position={}
        navigator.geolocation.getCurrentPosition((loc) => {
           position=loc
        })
        console.log("location",position)
        dispatch({ type: 'USER_LOCATION_SUCCESS'})
       
    } catch (error) {
        dispatch({ type: 'USER_LOCATION_FAILED', payload: error })
    }
}

export default GeoLocation