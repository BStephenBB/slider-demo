import React from 'react';
import Carousel from './Carousel.js';

const pstyle = {
  height: '24px',
  width: '24px',
  fill: 'rgb(72, 72, 72)',
};

const Right = () => {
  return (
    <div>
      <svg style={pstyle}>
        <path
          d="m4.29 1.71a1 1 0 1 1 1.42-1.41l8 8a1 1 0 0 1 0 1.41l-8 8a1 1 0 1 1 -1.42-1.41l7.29-7.29z"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
};

const Left = () => {
  return (
    <div>
      <svg style={pstyle}>
        <path
          d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
};

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="imageContainer">
        <div className="row">
          <div className="leftParent">
            <div onClick={this.props.prevIndex} className="left">
              <Left />
            </div>
          </div>

          <div className="center">
            <img className="view" src={this.props.currentView} />
          </div>

          <div className="rightParent">
            <div onClick={this.props.nextIndex} className="right">
              <Right />
            </div>
          </div>
        </div>
        <div>
          <Carousel
            offset={this.props.offset}
            changeView={this.props.changeView}
            currentView={this.props.currentView}
            images={this.props.images}
            currentIndex={this.props.currentIndex}
            setIndex={this.props.setIndex}
          />
        </div>
      </div>
    );
  }
}
export default Gallery;
