import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MapListing from './MapListing';
import ListingDetail from './ListingDetail';

const googleMapStyle = [
          {
              "featureType": "all",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "weight": "2.00"
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "geometry.stroke",
              "stylers": [
                  {
                      "color": "#9c9c9c"
                  }
              ]
          },
          {
              "featureType": "all",
              "elementType": "labels.text",
              "stylers": [
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "administrative.land_parcel",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "visibility": "on"
                  },
                  {
                      "color": "#372305"
                  },
                  {
                      "saturation": "-25"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#f2f2f2"
                  }
              ]
          },
          {
              "featureType": "landscape",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "landscape.man_made",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "poi",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "all",
              "stylers": [
                  {
                      "saturation": -100
                  },
                  {
                      "lightness": 45
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#eeeeee"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#7b7b7b"
                  }
              ]
          },
          {
              "featureType": "road",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          },
          {
              "featureType": "road.highway",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "simplified"
                  }
              ]
          },
          {
              "featureType": "road.arterial",
              "elementType": "labels.icon",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "transit",
              "elementType": "all",
              "stylers": [
                  {
                      "visibility": "off"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "all",
              "stylers": [
                  {
                      "color": "#46bcec"
                  },
                  {
                      "visibility": "on"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "geometry.fill",
              "stylers": [
                  {
                      "color": "#c8d7d4"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text.fill",
              "stylers": [
                  {
                      "color": "#070707"
                  }
              ]
          },
          {
              "featureType": "water",
              "elementType": "labels.text.stroke",
              "stylers": [
                  {
                      "color": "#ffffff"
                  }
              ]
          }
      ]

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
    const { listings, checkin, checkout, cirro } = this.props;

    return (
      <div className="mapContain">
        <div className="listDetail-contain">
          <div className="cirroList">
          <h2>Introducing Cloud9 Cirro+ in Chicago</h2>
          <ul style={{"display": "inline-flex", "padding": "0", "margin": "0"}}>
            {cirro.map((item, key)=> {
              return(
                <ListingDetail key={key} listing={item} checkin={checkin} checkout={checkout} />
              )
            })}
          </ul>
        </div>
        <hr/>
            <ul className="allListings">
            {listings.map((item, key)=> {
              return(
                <ListingDetail key={key} listing={item} checkin={checkin} checkout={checkout} />
              )
            })}
          </ul>
        </div>
        <div style={{ height: '100vh', width: '30%' }} className="googlemap-container">
          <GoogleMapReact
          bootstrapURLKeys={{ key:  `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}}
          defaultCenter={[41.886031, -87.629377]}
          defaultZoom={13}
          options={{zoomControl: false, fullscreenControl: false, styles: googleMapStyle}}
        >
          {listings.map((item, key)=> {
            return(
              <MapListing onSelectMapListing={this.handleListing.bind(this)} data={item} key={key} lat={item.lat} lng={item.lng}/>
            )
          })}
        </GoogleMapReact>
      </div>
    </div>
    );
  }
}

export default Map;
