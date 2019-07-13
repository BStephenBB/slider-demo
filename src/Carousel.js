import React from 'react';

const width = 100; // hardcode these later
const margin = 10;

const calcOffset = (index, width, margin, finalIndex) => {
  console.log(index);
  let extraOffset;
  let offset;

  const atFarRight = index > finalIndex - 3;
  const atFarLeft = index < 3;
  if (atFarRight) {
    extraOffset = 2 * 2 * (width + margin);
    offset = (finalIndex - 2) * (width + margin) - extraOffset;
  } else if (atFarLeft) {
    offset = 0;
  } else {
    extraOffset = 3 * (width + margin);
    offset = index * (width + margin) - extraOffset;
  }
  // const offset = index * (width + margin) - extraOffset;
  return offset;
};

class Carousel extends React.Component {
  render() {
    const { images, currentIndex, setIndex } = this.props;

    const offset = calcOffset(currentIndex, width, margin, images.length - 1);

    return (
      <div className="carousel-container">
        <div
          className="image-wrapper"
          style={{ transform: `translateX(-${offset}px)` }}
        >
          {images.map((img, index) => (
            <div
              className="image"
              // onClick={() => this.props.changeView(img.imgUrl)}
              onClick={() => setIndex(index)}
              key={index}
              style={{
                backgroundColor: currentIndex === index ? 'yellow' : null,
              }}
              // style={{backgroundImage: ``}}
            >
              {img}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
