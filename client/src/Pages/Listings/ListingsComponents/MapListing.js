import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleChange } from '../../../actions/activeListingActions';

const mapStyle = {
 backgroundImage: 'url(https://cdn3.iconfinder.com/data/icons/map-markers-2/512/marker_2-512.png)',
 position: 'absolute',
 width: '40px',
 height: '40px',
 backgroundSize: '100%',
 zIndex: '6500'
}



const activeMapStyle = {
 backgroundImage: 'url(https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color/254000/66-512.png)',
 position: 'absolute',
 width: '40px',
 height: '40px',
 backgroundSize: '100%',
 zIndex: '6500'
}

class MapListing extends Component {
  constructor(props) {
   super(props);
   this.state = {
     active: false,
     activeID: 0
   }
}

setMapMarker(){
  let highLightID = this.props.highLightListing.highLightListing.value;
  const propertyID = this.props.data.id;

  if(this.state.active) {
    return activeMapStyle
  } else if(highLightID === propertyID){
    return activeMapStyle
  } else {
    return mapStyle
  }
}

setActive() {
  this.setState({active: !this.state.active})
}

setFocus(){
  const id = this.props.data.id;
  document.getElementById('id' + id).scrollIntoView({behavior: "smooth"});
  this.props.handleChange(id);
}


  render() {
    const { lat, lng } = this.props;
    return (
      <i lat={lat} lng={lng} style={this.setMapMarker()} onClick={this.setFocus.bind(this)} onMouseOver={this.setActive.bind(this)} onMouseOut={this.setActive.bind(this)}/>
    );
  }
}

const mapStateToProps = state => ({
  activeListing: state,
  highLightListing: state
});

export default connect(mapStateToProps, { handleChange })(MapListing);
