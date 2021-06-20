import React, { Component } from "react";

import iconSet from "../../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// sm: "640px",
// md: "768px",
// lg: "1024px",
// xl: "1280px"
// TODO: hookup landing link
class WhyUsCarousel extends Component<{
  galleryItems: () => JSX.Element[];
}> {
  index = 0;
  items = [1, 2, 3, 4, 5];

  state = {
    currentIndex: 0,
    responsive: { 1800: { items: 7 }, 1024: { items: 5 }, 768: { items: 3 } },
    galleryItems: this.props.galleryItems()
  };
  carousel: React.RefObject<AliceCarousel> = React.createRef();
  slideTo = i => this.setState({ currentIndex: i });

  onSlideChanged = e => this.setState({ currentIndex: e.item });

  slideNext = () =>
    this.setState({ currentIndex: this.state.currentIndex + 1 });

  slidePrev = () =>
    this.setState({ currentIndex: this.state.currentIndex - 1 });

  thumbItem = (_, i) => (
    <span
      className={`dot-indicator mr-2 bg-white inline-block rounded-full ${
        this.state.currentIndex === i ? "active" : ""
      }`}
      onClick={() => this.slideTo(i)}
    />
  );
  componentDidMount() {
    if (this.carousel.current !== null) {
      setTimeout(() => {
        (this.carousel.current as any)._setInitialState();
        (this.carousel.current as any)._resetAllIntermediateProps();
      }, 500);
    }
  }

  render() {
    const { galleryItems, responsive, currentIndex } = this.state;

    return (
      <div className=" ">
        <div className="    relative ">
          <AliceCarousel
            ref={this.carousel}
            dotsDisabled={true}
            responsive={responsive}
            buttonsDisabled={true}
            items={galleryItems}
            slideToIndex={currentIndex}
            onSlideChanged={this.onSlideChanged}
            mouseDragEnabled={true}
            autoPlay={true}
            autoPlayInterval={2000}
          />
        </div>
      </div>
    );
  }
}

export default WhyUsCarousel;
