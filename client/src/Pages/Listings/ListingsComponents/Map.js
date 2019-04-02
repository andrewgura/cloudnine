import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapListing from './MapListing';
import ListingDetail from './ListingDetail';

class Map extends Component {
  constructor(props) {
   super(props);
   this.state = {
     activeListing: 0
   }
}

handleListing(active) {
     this.setState({activeListing: active})
 }

  render() {
    const { listings } = this.props;

    return (
      <div className="mapContain">
        <div style={{ height: '100vh', width: '60%' }}>
          <GoogleMapReact
          bootstrapURLKeys={{ key:  `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}}
          defaultCenter={[41.886031, -87.629377]}
          defaultZoom={13}
          options={{zoomControl: false, fullscreenControl: false}}
        >
          {listings.map((item, key)=> {
            return(
              <MapListing onSelectMapListing={this.handleListing.bind(this)} data={item} key={key} lat={item.lat} lng={item.lng}/>
            )
          })}
        </GoogleMapReact>
      </div>
      <div className="listDetail-contain">
        <ul>
          {listings.map((item, key)=> {
            return(
              <ListingDetail key={key} listing={item} />
            )
          })}
        </ul>
      </div>
    </div>
    );
  }
}

export default Map;
