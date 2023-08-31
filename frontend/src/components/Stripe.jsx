import React from 'react'
import  PaymentForm  from "./PaymentForm"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe("pk_test_51NkkwXAXUbI3cuY9X4Z09hlA0sQiUX8ifWVYwRtNgzV5GMbPBH8tjUMgpSfyTa8UDIo98o3EQa6qIEXIDza3LVft00BViHwlUw")

function Stripe() {
  return (
   <div>
    <Elements stripe={stripePromise}>
        <PaymentForm />
    </Elements>
   
   </div>
   )
}

export default Stripe