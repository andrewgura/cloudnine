import React, { Component } from 'react';
import Calendar from './Calendar';

class ListInfo extends Component {
  constructor(props){
    super(props);
      this.state = {
        name: '',
        price: 0
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
  }

  render(){

    const { checkin, checkout } = this.props;

    return (
      <div>
        <h2>{this.state.name}</h2>
        <h2>Price per night: {this.state.price}</h2>
        <h2>Check in: {checkin}</h2>
        <h2>Check out: {checkout}</h2>
        <Calendar id={this.props.id} />
      </div>
    )
  }

}

export default ListInfo;
