import React, { Component } from 'react';
import { Image, Icon } from 'semantic-ui-react';

class SlideShow extends Component {
    state = {
      currentIndex: 0
    }

  changeImage(direction) {
    const index = this.state.currentIndex;
    if(direction === "+" && index !== 4) {
      this.setState({currentIndex: index + 1})
    }

    if(direction === "-" && index !== 0){
      this.setState({currentIndex: index - 1})
    }

  }

  render(){
    const { images } = this.props;
    const { currentIndex } = this.state;
    return (
      <div style={{"position": "relative"}}>
        <Image src={this.props.images[currentIndex].url} fluid />
        <div style={{"position": "absolute", "top": "35%"}}>
          <Icon name="chevron left" size="huge" className="slider-button" onClick={this.changeImage.bind(this, "-")} />
        </div>
        <div style={{"position": "absolute", "top": "35%", "right": "12px", "width": "50px"}}>
          <Icon name="chevron right" size="huge" style={{}} className="slider-button" onClick={this.changeImage.bind(this, "+")} />
        </div>
      </div>
    )
  }
}

export default SlideShow;
