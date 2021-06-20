import React, { Component } from "react";

import iconSet from "../../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// TODO: hookup landing link
class HomeStoryCarousel extends Component<{
  galleryItems: () => JSX.Element[];
}> {
  index = 0;
  items = [1, 2, 3, 4, 5];

  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 1 } },
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
        <div className=" text-white mt-4  relative  mx-10 md:mx-0  ">
          <IcomoonReact
            className="fill-current text-yellow-500 absolute -top-3 right-5"
            iconSet={iconSet}
            // color="#000"
            size={32}
            icon="icon-testimonial"
          />
          {/* <button
            className="text-gray-400 hover:text-blue-500 p-2"
            onClick={() => this.slideNext()}>
            <IcomoonReact
              className="fill-current"
              iconSet={iconSet}
              // color="#000"
              size={32}
              icon="right-arrow-circle"
            />
          </button> */}

          <AliceCarousel
            ref={this.carousel}
            dotsDisabled={true}
            responsive={responsive}
            buttonsDisabled={true}
            items={galleryItems}
            slideToIndex={currentIndex}
            onSlideChanged={this.onSlideChanged}
          />

          {/* <nav
            className={`absolute left-0 bottom-0 ${this.props.indiClassName}`}>
            {galleryItems.map(this.thumbItem)}
          </nav> */}
          <button
            className="transition text-white hover:opacity-50 p-2 absolute top-1/2 -left-12 transform-top-half"
            onClick={() => this.slidePrev()}>
            <IcomoonReact
              className="fill-current"
              iconSet={iconSet}
              // color="#000"
              size={30}
              icon="left-arrow-circle"
            />
          </button>
          <button
            className=" transition text-white hover:opacity-50 p-2 absolute top-1/2 -right-12 transform-top-half"
            onClick={() => this.slideNext()}>
            <IcomoonReact
              className="fill-current"
              iconSet={iconSet}
              // color="#000"
              size={30}
              icon="right-arrow-circle"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default HomeStoryCarousel;
