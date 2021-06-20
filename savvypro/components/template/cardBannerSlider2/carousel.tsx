import React, { Component } from "react";

import iconSet from "../../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./carousel.css";

// TODO: hookup landing link
class WhyUsCarousel extends Component<{
  galleryItems: () => JSX.Element[];
}> {
  index = 0;
  items = [1, 2, 3, 4, 5];
  carousel: React.RefObject<AliceCarousel> = React.createRef();
  state = {
    currentIndex: 0,
    responsive: {},
    galleryItems: this.props.galleryItems()
  };

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
      <div className="w-full relative  " style={{ height: "700px" }}>
        <AliceCarousel
          ref={this.carousel}
          dotsDisabled={true}
          responsive={responsive}
          buttonsDisabled={true}
          items={galleryItems}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
        />

        <button
          className="transition hover:opacity-50  absolute top-1/2 left-4 transform-top-half text-white leading-none rounded-full flex items-center justify-center"
          onClick={() => this.slidePrev()}>
          <IcomoonReact
            className="fill-current "
            iconSet={iconSet}
            // color="#000"
            size={30}
            icon="left-arrow-circle"
          />
        </button>
        <button
          className="transition hover:opacity-50  absolute top-1/2 right-4 transform-top-half text-white  leading-none rounded-full  flex items-center justify-center"
          onClick={() => this.slideNext()}>
          <IcomoonReact
            className="fill-current "
            iconSet={iconSet}
            // color="#000"
            size={30}
            icon="right-arrow-circle"
          />
        </button>

        <nav className={`absolute left-4 bottom-9 `}>
          {galleryItems.map(this.thumbItem)}
        </nav>
      </div>
    );
  }
}

export default WhyUsCarousel;
