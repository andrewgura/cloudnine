import React, { Component } from 'react';
import Map from "./ListingsComponents/Map";

class Listings extends Component {
  constructor(props) {
   super(props);
   this.state = {
     guests: this.props.match.params.guests,
     start: this.props.match.params.start,
     out: this.props.match.params.out,
     listings: [],
     cirro: []
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


    // data.result.sort((a,b) => {
    //   const colorOrder = ['Cirro+', 'Cirro', 'Cirro by Cloud9', 'Alto', 'Alto by Cloud9', 'Stratus'];
    //    let aName = colorOrder.indexOf(a.name.split("|")[1].split("·")[0].trim());
    //    let bName = colorOrder.indexOf(b.name.split("|")[1].split("·")[0].trim());
    //    return aName - bName;
    // })
    let x = data.result.filter(item => {
      return item.name !== "2BR close to McCormick Place \"The Parker\"";
    })

    const cirro = x.filter(item => {
      return item.name.split("|")[1].split("·")[0].trim() === "Cirro+";
    })

    this.setState({listings: x, cirro: cirro})
}

  render() {
    const { listings, start, out, cirro } = this.state;
    return (
        <Map listings={listings} checkin={start} checkout={out} cirro={cirro} />
    );
  }
}

export default Listings;
