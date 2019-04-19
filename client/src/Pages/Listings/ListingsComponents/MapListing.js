import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { handleChange } from '../../../actions/activeListingActions';
import mapIcon from '../../../media/comment-map-icon.png';

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
    return "mapIcon-active"
  } else if(highLightID === propertyID){
    return "mapIcon-active"
  } else {
    return "mapIcon-notActive"
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
      <div className={this.setMapMarker()} lat={lat} lng={lng}  onClick={this.setFocus.bind(this)} onMouseOver={this.setActive.bind(this)} onMouseOut={this.setActive.bind(this)}>
        ${this.props.data.price}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeListing: state,
  highLightListing: state
});

export default connect(mapStateToProps, { handleChange })(MapListing);
