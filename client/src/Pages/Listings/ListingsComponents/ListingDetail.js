import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { setHighlight } from '../../../actions/highlightListingActions';


class ListingDetail extends Component {
  constructor(props){
    super(props);
      this.state = {
        name: ''
      }
    }

  componentDidMount(){
    let name = this.props.listing.name;
    name = name.split("|")[1]; // Split by |, get first element of that array  
    if(name.includes("·")) name = name.split("·")[1].trim(); //trim white spaces at start/end
    name = name.replace(/ /g,"-").toLowerCase(); //removes bullet point
    name = name.replace("/", "-");

    this.setState({name: name})
  }

  highlight(id){
    this.props.setHighlight(id);
  }

  render() {
    const { listing } = this.props;
    const { name } = this.state;


    return (
      <li id={"id" + listing.id}
        className={this.props.activeListing.activeListing.value === listing.id ? 'activeClick' : 'list-item'}
        onMouseEnter={this.highlight.bind(this, listing.id)}
        onMouseLeave={this.highlight.bind(this, 0)}>

          <div className="listDetail-media">
            <Image src={listing.listingImages[0].url} width="100%" height="100%" />
          </div>

          <div className="listDetail-info">
            <p>{listing.address}</p>
            <p>${listing.price}</p>
            <p>Max # Guests: {listing.personCapacity}</p>
            <a href={`/${name}/${listing.id}`} className="ui button green" type='submit'>View</a>
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
