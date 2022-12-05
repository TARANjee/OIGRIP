import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {
  const cartState = useSelector(state => state.cartReducer)
  const cartItems = cartState.cartItems

  return (
    <div className='cart-margin' >
      {/* <Banner /> */}
      <Link to='/' className='d-flex mt-5  text-dark' >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg>
        <h4 className='ml-3'>Shopping Continue</h4>
      </Link>

      <hr className='' ></hr>

      <div className='mt-5 '>
        <div className=' row d-flex justify-content-between '>
          <div className=' col-6 '>
            <div>
              <h4>Shopping cart</h4>
              <p>You Have {cartItems.length} item in your cart</p>
            </div>
            <div>
              {cartItems.map(item => (
                <CartItem  item={item} />
              ))}

            </div>
          </div>


          <div className='col '>
            <div className='w-100  ' >
              <h5 >Choose a delivery address</h5>
              <div className='d-flex mt-5 cart-detail' >
                <div >
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="green" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                </div>
                <div className='ml-5 w-100'>
                  <p className='font-weight-bold' >Current Address</p>
                  <p className='text-muted' >87/18/1A tyagi road, Dehradun</p>
                  <button className='btn btn-link ' >Edit Address</button>
                </div>
                <div>
                  <button className='btn btn-danger' >Change</button>
                </div>
              </div>
              <h5 className='mt-5 '>Price Details</h5>

              <div className='mt-4 cart-detail' >
                <div className='d-flex justify-content-between p-2'  >
                  <h6>Sub Total</h6>
                  <h6>₹3192</h6>
                </div>
                <div className='d-flex justify-content-between p-2'  >
                  <h6>Discount</h6>
                  <h6>-</h6>
                </div>
                <div className='d-flex justify-content-between p-2'  >
                  <h6>Taxes and Charges</h6>
                  <h6>₹199.60</h6>
                </div>
                <div className='d-flex justify-content-between p-2'  >
                  <h6>Grand Total</h6>
                  <h6>₹3391.60</h6>
                </div>
                <button className='btn btn-danger btn-block p-2 mt-4  ' >Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart