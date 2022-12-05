import { useEffect } from 'react'
import Pizza from '../components/Pizza'

import { getAllPizzas } from '../actions/pizzaAction'

import { useDispatch, useSelector } from 'react-redux'
import Banner from '../components/Banner'

const Homescreen = () => {
    const dispatch = useDispatch()

    const pizzasState = useSelector(state => state.getAllPizzasReducer)

    const { pizzas, error, loading } = pizzasState

    useEffect(() => {
        dispatch(getAllPizzas())
    }, [])


    return (
        <div >
            <div className='main-banner mb-5 '>
                <div className="bg-text">
                    <div >
                        <h1>Less Waiting </h1>
                        <h1>More Eating</h1>
                    </div>
                </div>
            </div>
            <div className='mb-4 d-flex justify-content-center'>
                <h3 className='font-italic'>Featured product</h3>
            </div>

            <div className='row justify-content-center' >
                {loading ? (
                    <h1>Loading..</h1>
                ) : error ? (
                    <h1 className='text-muted' >Something Wrong</h1>
                ) : (
                    pizzas.map((pizza) => (
                        <div key={pizza._id} className=' m-3 col-md-3'>
                            <Pizza pizza={pizza} />
                        </div>
                    ))
                )
                }
            </div>



        </div >
    )
}

export default Homescreen