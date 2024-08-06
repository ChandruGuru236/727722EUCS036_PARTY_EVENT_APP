import React, { useState } from 'react'

const payment = () => {
    const[cardDetails,setCardDetails]=useState('');
    const[expiryMonth,setMonth]=useState('');
    const[expiryYear,setYear]=useState('');
    const[cvv,setcvv]=useState('');
    const[amount,setAmount]=useState('');
    return (
    <div className='paymentapp'>
    <h2>Payment Gateway</h2>
    <br/>
    <input type='text' placeholder='Enter Card Details' value={cardDetails} onChange={(e)=> setCardDetails(e.target.value)}/>
    <br/>
    <input type='text' placeholder='Enter Expiry Month' value={expiryMonth} onChange={(e)=> setMonth(e.target.value)}/>
    <br/>
    <input type='text' placeholder='Enter ExpiryYear' value={expiryYear} onChange={(e)=> setYear(e.target.value)}/>
    <br/>
    <input type='text' placeholder='Enter CVV' value={cvv} onChange={(e)=> setcvv(e.target.value)}/>
    <br/>
    <input type='text' placeholder='Enter Amount' value={amount} onChange={(e)=> setAmount(e.target.value)}/>
    


    </div>
  )
}

export default payment