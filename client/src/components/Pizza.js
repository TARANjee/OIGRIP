import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartAction'

const Pizza = ({ pizza }) => {
    const [show, setShow] = useState(false);
    const [quantity, setQuantity] = useState(1)
    const [varient, setVarient] = useState('small')
    const dispatch = useDispatch()
    const addItemsInCart = () => {
        dispatch(addToCart(pizza, quantity, varient))
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const incrementQuantity = () => {
        setQuantity(quantity + 1)
    }
    const decrementQuantity = () => {

        setQuantity(quantity - 1)
    }
    return (
        <div className="card item p-4 ">
            <div onClick={handleShow}>
                <img className="card-img-top" src={pizza.image} alt={pizza.name} />
                <h5 className="mt-md-2 card-title ">{pizza.name}</h5>
                <h4 className='font-weight-bold mt-1 '> <span style={{ fontFamily: 'sans-serif' }} >₹</span>{pizza.prices[0][varient] * [quantity]}</h4>
            </div>
            <div className='d-flex justify-content-between '>
                <div className='d-flex flex-column p-1 '>
                    <p >Varients</p>
                    <select className="form-select p-2  "aria-label="Default select example"  value={varient} onChange={(e) => setVarient(e.target.value)} >
                        {pizza.varients.map((varient) => {
                            return <option  key={varient} value={varient}>{varient}</option>
                        })}
                    </select>
                </div>
                <div className='d-flex flex-column p-1 '>
                    <p>Quantity</p>
                    <div className='d-flex'>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-danger" disabled={quantity === 1} onClick={decrementQuantity}>-</button>
                            <p className="m-2 text-danger ">{quantity}</p>
                            <button type="button" className='btn btn-danger' onClick={incrementQuantity}>+</button>
                        </div>

                    </div>
                </div>
            </div>


            {/* <h6 className="card-subtitle mb-2 text-muted">{pizza.description}</h6> */}
            <button onClick={addItemsInCart} className='btn btn-danger d-flex justify-content-center mt-2'>
                <div className='mr-2'>Add to cart</div>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                    Add to cart <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                </svg>
            </button>


            <Modal show={show} onHide={handleClose} style={{ width: '100%' }} >

                <Modal.Header >
                    <Modal.Title>{pizza.name}</Modal.Title>

                    <svg onClick={handleClose} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                </Modal.Header>


                <Modal.Body >
                    <img className='card-img-top' src={pizza.image} alt={pizza.name} />

                    <p>{pizza.description}</p>
                    <h4 className='font-weight-bold mt-1 '> ₹{pizza.prices[0][varient] * [quantity]}</h4>

                    <p >Varients</p>
                    <select className="form-select" value={varient} onChange={(e) => setVarient(e.target.value)} >
                        {pizza.varients.map((varient) => {
                            return <option key={varient} value={varient}>{varient}</option>
                        })}
                    </select>

                </Modal.Body>



                <Modal.Footer>
                    <Button variant="danger" onClick={addItemsInCart} >
                        Add to cart
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                    </Button>

                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default Pizza