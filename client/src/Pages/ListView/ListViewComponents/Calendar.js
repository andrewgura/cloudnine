import React, { Component } from 'react';

class Calendar extends Component {
  constructor(props){
    super(props);
      this.state = {

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

      const response = await fetch('https://api.hostaway.com/v1/listings/' + this.props.id + 'calendar', settings);
      const data = await response.json();
  }

  render(){
    return (
      <div>

      </div>
    )
  }

}

export default Calendar;
