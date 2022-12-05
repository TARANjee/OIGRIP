import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../actions/cartAction'
const CartItem = ({ item }) => {
    const dispatch = useDispatch()
    return (
        <div>
            <div className=' item p-4 rounded mb-4' >
                <div className='d-flex'>
                    <div className='d-flex justify-content-center align-items-center mb-3'>
                        <img src={item.image} alt='' width={150} />
                    </div>
                    <div className='ml-3 mr-5 w-100' >
                        <h4>{item.name}</h4>
                        <p className='text-muted ' >{item.description}</p>
                        <p className='text-muted font-weight-bold ' >{item.variant}</p>
                    </div>
                    <div className='text-center mr-2 d-flex flex-column  justify-content-between  ' >
                        <div>
                            <h5 className='text-danger' >₹{item.price}.00</h5>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <button type="button" className="btn btn-danger" onClick={() => dispatch(addToCart(item, item.quantity - 1, item.variant))} >{item.quantity <= 1 ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-trash3  " viewBox="0 0 16 16">
                                        <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                    </svg>
                                ) : '-'
                                }</button>
                                <p className="m-2 text-danger ">{item.quantity}</p>
                                <button type="button" className="btn btn-danger" onClick={() => dispatch(addToCart(item, item.quantity + 1, item.variant))} >+</button>
                            </div>
                        </div>
                        <div className=' align-items-center'>
                            <button style={{ width: 'fit-content' }} className='btn btn-success ' onClick={() => dispatch(removeFromCart(item))} >

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash3  " viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default CartItem