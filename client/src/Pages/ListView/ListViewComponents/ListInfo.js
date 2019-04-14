import React, { Component } from 'react';
import moment from 'moment';
import Calendar from './Calendar';
import BookNow from './BookNow';

class ListInfo extends Component {
  constructor(props){
    super(props);
      this.state = {
        name: '',
        price: 0,
        from: this.props.checkin,
        to: this.props.checkout,
        totalPrice: 0
      }
  }

  async componentDidMount(){
    const settings = {
        "async": true,
        "crossDomain": true,
        "method": "GET",
        "headers": {
          "authorization": `${process.env.REACT_APP_HOSTAWAY_BEARER}`,
          "cache-control": "no-cache"
        },
        "data": {
          "grant_type": "client_credentials",
          "client_id": `${process.env.REACT_APP_HOSTAWAY_ID}`,
          "client_secret": `${process.env.REACT_APP_HOSTAWAY_API_KEY}`,
          "scope": "general"
        }
      }

      const response = await fetch('https://api.hostaway.com/v1/listings/' + this.props.id + 'includeResources=', settings);
      const data = await response.json();
      const { name, price } = data.result;
      this.setState({name: name, price: price})
      this.calcPrice();
  }

  async updateDate(check, date){
      let dateFormat = moment(date).format('YYYY-MM-DD');
      await this.setState({[check]: dateFormat})
      this.calcPrice();
  }


   calcPrice(){
    const { from, to, price } = this.state;
    const diffDays = moment(to).diff(moment(from), 'days');
    this.setState({totalPrice: diffDays * price})
  }

  render(){
    const { from, to, totalPrice, price, name } = this.state;
    return (
      <div>
        <h2>{name}</h2>
        <h2>Price per night: {price}</h2>
        <h2>Total price: {totalPrice}</h2>
        <h2>Check in: {from}</h2>
        <h2>Check out: {to}</h2>
        <Calendar id={this.props.id} checkin={from} checkout={to} updateDate={this.updateDate.bind(this)} />
        <BookNow totalPrice={totalPrice}/>
      </div>
    )
  }

}

export default ListInfo;
