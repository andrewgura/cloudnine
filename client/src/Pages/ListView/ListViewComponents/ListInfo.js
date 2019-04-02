import React, { Component } from 'react';

class ListInfo extends Component {
  constructor(props){
    super(props);
      this.state = {
        name: ''
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

      const response = await fetch('https://api.hostaway.com/v1/listings/60486?includeResources=', settings);
      const data = await response.json();
      
      const { name } = data.result;
      this.setState({name: name})
  }

  render(){
    return (
      <div>
        <h1 ref={React.createRef()}>{this.props.id}</h1>
        <h2>{this.state.name}</h2>
      </div>
    )
  }

}

export default ListInfo;
