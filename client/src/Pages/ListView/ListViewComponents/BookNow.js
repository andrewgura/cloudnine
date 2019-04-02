import React from "react";
import StripeCheckout from "react-stripe-checkout";


const BookNow = () => {
  const publishableKey = process.env.REACT_APP_STRIPE_KEY;

  const onToken = token => {
    const body = {
      amount: 999,
      token: token
  };
  fetch
      .post("http://localhost:8000/payment", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };

  return (
    <StripeCheckout
      label="Book Now" //Component button text
      name="Business LLC" //Modal Header
      description="Upgrade to a premium account today."
      panelLabel="Go Premium" //Submit button in modal
      amount={2} //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
    />
  );
};
export default BookNow;
