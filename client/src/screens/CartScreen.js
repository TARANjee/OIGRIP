import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { UserOrderAction } from '../actions/userAction'
import axios from 'axios'

const Cart = () => {
  const cartState = useSelector(state => state.cartReducer)
  const { currentUser } = useSelector(state => state.userReducer)
  const cartItems = cartState.cartItems
  const dispatch = useDispatch()
  const [address, setAddress] = useState('tyagi road')
  const [phoneNo, setPhoneNo] = useState('4581562489')
  const [customerName, setCustomerName] = useState('TJ')

  let subTotal = cartItems.reduce((total, item) => total + item.price, 0)
  let discount = Math.round(subTotal * (10 / 100));
  let taxes = Math.round(subTotal * (18 / 100));
  let grandTotal = subTotal + taxes - discount

  const changeAddress = (e) => {
    e.preventDefault()
    if (currentUser.phoneNo && currentUser.address) {
      currentUser.customerName = customerName
      currentUser.address = address
      currentUser.phoneNo = phoneNo
      dispatch(UserOrderAction(currentUser))
    } else {
      let user = {
        address: address,
        phoneNo: phoneNo,
        customerName: customerName,
        ...currentUser
      }

      dispatch(UserOrderAction(user))
    }

  }

  const placeOrder = async (amount) => {

    const { data: { key } } = await axios.get("/api/payment/getkey")

    const { data: { order } } = await axios.post("/api/payment/checkout", { amount })

    const options = {
      key: key,
      amount: order.amount,
      currency: "INR",
      name: currentUser.name,
      description: "Test Transaction",
      image: "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png",
      order_id: order.id,
      callback_url: "/api/payment/paymentverification",
      prefill: {
        "name": currentUser.name,
        "email": currentUser.email,
        "contact": phoneNo
      },
      notes: {
        "address": address
      },
      theme: {
        "color": "#C82333"
      }
    };
    const razor = new window.Razorpay(options);
    razor.open();


  }

  return (
    <div className='cart-margin' >
      {/* <Banner /> */}
      <Link to='/' className='d-flex mt-5  text-dark' >
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
          <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
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
                <CartItem key={item._id} item={item} />
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
                  <h6 >Current Address</h6>
                  {currentUser ? (
                    <form className='mt-4 w-100' onSubmit={changeAddress} >
                      <div className="form-group">
                        <label className='font-weight-bold ' >Name:</label>
                        <input type="text" className="form-control" value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="Enter name" />
                      </div>
                      <div className="form-group">
                        <label className='font-weight-bold '>Email address:</label>
                        <input disabled type="email" className="form-control" value={currentUser.email}  placeholder="Enter email" />
                      </div>
                      <div className="form-group">
                        <label className='font-weight-bold ' >Address:</label>
                        <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label className='font-weight-bold ' >Phone no.:</label>
                        <input type="text" className="form-control" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
                      </div>
                      <button className='btn btn-danger'  >Change</button>

                    </form>

                  ) : ''}

                  {/* <div className='mt-4'>
                      <div className='p-1'>
                        <span className='font-weight-bold mr-2' >Name: </span>
                        <span>{customerName}</span>
                      </div>
                      <div className='p-1'>
                        <span className='font-weight-bold mr-2' >Address: </span>
                        <span>{address}</span>
                      </div>
                      <div className='p-1'>
                        <span className='font-weight-bold mr-2'>Phone no. :</span>
                        <span>{phoneNo}</span>
                      </div>
                      <div className='p-1'>
                        <span className='font-weight-bold mr-2'>Email :</span>
                        <span>{currentUser.email}</span>
                      </div> */}
                  {/* </div> */}


                </div>

              </div>
              <h5 className='mt-5 '>Price Details</h5>

              <div className='mt-4 cart-detail' >
                <div className='d-flex justify-content-between p-2'  >
                  <h6>Sub Total</h6>
                  <h6>₹{subTotal}</h6>
                </div>
                <div className='d-flex justify-content-between p-2'  >
                  <h6>Discount (10% OFF ) </h6>
                  <h6>₹{discount}</h6>
                </div>
                <div className='d-flex justify-content-between p-2'  >
                  <h6>Taxes and Charges</h6>
                  <h6>₹{taxes}</h6>
                </div>
                <div className='d-flex justify-content-between p-2'  >
                  <h6>Grand Total</h6>
                  <h6> <del className='mr-2 text-danger ' >₹{subTotal + taxes}</del> ₹{grandTotal}</h6>
                </div>
                <button className='btn btn-danger btn-block p-2 mt-4  ' onClick={() => placeOrder(grandTotal)} >Place Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Cart