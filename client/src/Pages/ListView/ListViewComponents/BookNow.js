import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";

const publishableKey = "pk_test_a8yN0DDGdgKqJw7RA8AmqF88";

class BookNow extends Component {
  constructor(props){
    super(props);
      this.state = {
        roomBooked: false
      }
  }


async onToken(token) {

    const body = {
      amount: 999,
      token: token
      }


    const response = await fetch('http://localhost:5000/api/payment', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
        }
      })

      if(response.status === 200) {
        this.setState({roomBooked: true})
      }
}

render() {
  return (
    <div>
      <StripeCheckout
        label="Book Now" //Component button text
        name="Business LLC" //Modal Header
        description="Upgrade to a premium account today."
        panelLabel="Go Premium" //Submit button in modal
        amount={this.props.totalPrice * 100} //Amount in cents $9.99
        token={this.onToken.bind(this)}
        stripeKey={publishableKey}
        billingAddress={false}
      />

      {this.state.roomBooked ?  <p>Room Booked</p> : null}
    </div>
    );
  }
};

export default BookNow;
