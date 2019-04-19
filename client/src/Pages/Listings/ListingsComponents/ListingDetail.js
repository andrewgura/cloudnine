import React, { Component } from 'react';
import SlideShow from './SlideShow';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { setHighlight } from '../../../actions/highlightListingActions';


class ListingDetail extends Component {
  constructor(props){
    super(props);
      this.state = {
        name: '',
        roomType: ''
      }
    }

  componentDidMount(){
    let name = this.props.listing.name;
    let nameSplit = name.split("·")[1].trim();
    let roomType = name.split("|")[1].split("·")[0].trim();

    this.setState({name: nameSplit, roomType: roomType})
  }

  highlight(id){
    this.props.setHighlight(id);
  }

  render() {
    const { listing, checkin, checkout } = this.props;
    const { name, roomType } = this.state;


    return (
      <li id={"id" + listing.id}
        className={this.props.activeListing.activeListing.value === listing.id ? 'activeClick' : 'list-item'}
        onMouseEnter={this.highlight.bind(this, listing.id)}
        onMouseLeave={this.highlight.bind(this, 0)}>
          <div className="listDetail-media">
            <SlideShow images={listing.listingImages}/>
          </div>

          <div className="listDetail-info">
            <span>{roomType}</span>
            <h3>{name}</h3>
              <p>${listing.price}</p>
              <p>Max # Guests: {listing.personCapacity}</p>
              {/* <Link to={{pathname: `/${name}/${listing.id}`, state:{checkin: checkin, checkout: checkout} }} className="ui button green" type='submit'>View</Link> */}
          </div>
      </li>
    );
  }
}

const mapStateToProps = state => ({
  activeListing: state,
  highLightListing: state
});

export default connect(mapStateToProps, { setHighlight })(ListingDetail);
