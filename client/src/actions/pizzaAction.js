export const getAllPizzas = () => async dispatch => {

    dispatch({ type: 'GET_PIZZAS_REQUEST' })

    try {
        const response = await fetch('/api/pizzas/getAllPizzas')
        const data = await response.json()
        dispatch({ type: 'GET_PIZZAS_SUCCESS', payload: data })
    } catch (error) {
        dispatch({ type: 'GET_PIZZAS_FAILED', payload: error })
    }

} 