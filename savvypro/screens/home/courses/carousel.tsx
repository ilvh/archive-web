import React, { Component } from "react";

import iconSet from "../../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import {
  isMobileOnly
} from "react-device-detect";

// TODO: hookup landing link
export class HomeCoursesCarousel extends Component<{
  galleryItems: () => JSX.Element[];
}> {
  index = 0;
  items = [1, 2, 3, 4, 5];
  carousel: React.RefObject<AliceCarousel> = React.createRef();
  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 3 } },
    galleryItems: this.props.galleryItems(),
    isMobileOnly: false,
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
      this.setState({ isMobileOnly })
    }
  }

  render() {
    const { galleryItems, responsive, currentIndex } = this.state;

    return (
      <div className=" relative mx-1">
        <div className="  whyus__carousel  -mx-3 ">
          <AliceCarousel
            ref={this.carousel}
            dotsDisabled={true}
            responsive={responsive}
            buttonsDisabled={true}
            items={galleryItems}
            slideToIndex={currentIndex}
            onSlideChanged={this.onSlideChanged}
            autoPlay={true}
            autoPlayInterval={6000}
          />

        {
          this.state.isMobileOnly ? null
          : (
            <div>
              <button
                className="transition hover:opacity-50 p-2 absolute top-1/2 -left-12 transform-top-half text-green-500 bg-white leading-none rounded-full shadow-custom"
                onClick={() => this.slidePrev()}>
                <div style={{ transform: "rotateZ(90deg) translateY(-2px)" }}>
                  <IcomoonReact
                    className="fill-current "
                    iconSet={iconSet}
                    // color="#000"
                    size={16}
                    icon="arrow-down"
                  />
                </div>
              </button>
              <button
                className="transition hover:opacity-50 p-2 absolute top-1/2 -right-12 transform-top-half text-green-500 bg-white leading-none rounded-full shadow-custom"
                onClick={() => this.slideNext()}>
                <div style={{ transform: "rotateZ(-90deg) translateY(-2px)" }}>
                  <IcomoonReact
                    className="fill-current "
                    iconSet={iconSet}
                    // color="#000"
                    size={16}
                    icon="arrow-down"
                  />
                </div>
              </button>

            </div>
            )
         }

          
        </div>

      </div>
    );
  }
}
