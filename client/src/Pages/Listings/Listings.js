import React, { Component } from 'react';
import Map from "./ListingsComponents/Map";

class Listings extends Component {
  constructor(props) {
   super(props);
   this.state = {
     guests: this.props.match.params.guests,
     start: this.props.match.params.start,
     out: this.props.match.params.out,
     listings: []
   }
}

async componentDidMount(e) {
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

    const response = await fetch('https://api.hostaway.com/v1/listings?availabilityDateStart=' + this.state.start + '&availabilityDateEnd=' + this.state.out + '&availabilityGuestNumber=' + this.state.guests, settings);
    const data = await response.json();

    this.setState({listings: data.result})
}

  render() {
    const { listings } = this.state;
    return (
        <Map listings={listings}/>
    );
  }
}

export default Listings;
