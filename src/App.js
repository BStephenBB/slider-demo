import React from 'react';
import Gallery from './Gallery.js';

const imgArr = [];
for (let i = 0; i < 10; i++) {
  imgArr.push(i);
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: '',
      data: [],
      frontImages: [],
      mainImg: [],
      page: 1,
      view: false,
      currentIndex: 0,
      offset: 1,
    };
    // this.changeIndex = this.changeIndex.bind(this);
    this.changeView = this.changeView.bind(this);
    this.nextIndex = this.nextIndex.bind(this);
    this.prevIndex = this.prevIndex.bind(this);
    this.setIndex = this.setIndex.bind(this);
  }

  changeView(url) {
    let margin = 3;
    let halfWidth = 24;
    let index;
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].imgUrl === url) {
        index = i;
      }
    }
    let off;
    if (index > 0) {
      if (index === 2) {
        off = halfWidth + margin;
      } else {
        off = (index - 1) * halfWidth + (halfWidth + margin);
      }
    }

    this.setState({
      currentView: url,
      view: true,
      currentIndex: index,
      offset: off,
    });
    console.log(this.state.offset);
  }
  nextIndex() {
    const atLastImage = this.state.currentIndex === imgArr.length - 1;
    if (atLastImage) {
      this.setState({ currentIndex: 0 });
    } else {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
      }));
    }
  }
  prevIndex() {
    const atFirstImage = this.state.currentIndex === 0;
    const finalIndex = imgArr.length - 1;
    if (atFirstImage) {
      this.setState({
        currentIndex: finalIndex,
      });
    } else {
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
      }));
    }
  }

  setIndex(num) {
    this.setState({ currentIndex: num });
  }
  // changeIndex(num) {
  // // change currentview based on current index
  // console.log('change index');
  // if (
  //   (this.state.currentIndex > 0) &
  //   (this.state.currentIndex < this.state.data.length)
  // ) {
  //   const imgUrl = this.state.data[this.state.currentIndex + num].imgUrl;
  //   const newIndex = this.state.currentIndex + num;
  //   console.log('imgage url ', imgUrl);
  //   this.setState({
  //     currentIndex: newIndex,
  //     currentView: imgUrl,
  //   });
  // } else if (this.state.currentIndex === 0 && num === 1) {
  //   const imgUrl = this.state.data[this.state.currentIndex + num].imgUrl;
  //   const newIndex = this.state.currentIndex + num;
  //   console.log('imgage url ', imgUrl);
  //   this.setState({
  //     currentIndex: newIndex,
  //     currentView: imgUrl,
  //   });
  // }
  // this.setState({
  //   currentIndex: newIndex,
  //   currentView: imgUrl,
  // });
  // }

  componentDidMount() {}

  render() {
    return (
      <Gallery
        changeIndex={this.changeIndex}
        offset={this.state.offset}
        images={imgArr}
        currentView={this.state.currentView}
        currentIndex={this.state.currentIndex}
        changeView={this.changeView}
        prevIndex={this.prevIndex}
        nextIndex={this.nextIndex}
        setIndex={this.setIndex}
      />
    );
    let views = () => {
      if (this.state.view === false) {
        return (
          <div className="container">
            {this.state.mainImg.map(img => (
              <div className="mainContainer">
                <img
                  onClick={() => this.changeView(img.imgUrl)}
                  className="mainImg"
                  src={img.imgUrl}
                />
              </div>
            ))}
            <div className="secondaryImages">
              {this.state.frontImages.map(img => (
                <div className="secondary">
                  <img
                    onClick={() => this.changeView(img.imgUrl)}
                    className="img"
                    src={img.imgUrl}
                  />
                </div>
              ))}
            </div>
          </div>
        );
      } else {
      }
    };
    return <div>{views()}</div>;
  }
}
export default App;
