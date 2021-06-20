import React, { Component } from "react";

import HomeData from "../../screens/home/data";

import iconSet from "../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./css.css";
import Button from "../elements/button";
// TODO: hookup landing link
class FullCarousel extends Component {
  index = 0;
  items = [1, 2, 3, 4, 5];
  carousel = React.createRef();
  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 3 } },
    galleryItems: this.props.galleryItems()
  };
  componentDidMount() {}

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

  render() {
    const { galleryItems, responsive, currentIndex } = this.state;
    const LandingData = HomeData.Landing.text;
    return (
      <div className="relative h-full">
        <AliceCarousel
          ref={this.carousel}
          dotsDisabled={true}
          buttonsDisabled={true}
          items={galleryItems}
          slideToIndex={currentIndex}
          onSlideChanged={this.onSlideChanged}
        />

        <nav className={`absolute left-0 bottom-0 ${this.props.indiClassName}`}>
          {galleryItems.map(this.thumbItem)}
        </nav>

        <button
          className={`top-1/2 absolute transform-top-half left-5 ${
            this.props.sideBtnClassName
          }`}
          onClick={() => this.slidePrev()}>
          <IcomoonReact
            className="fill-current"
            iconSet={iconSet}
            // color="#000"
            size={32}
            icon="left-arrow-circle"
          />
        </button>

        <button
          className={`top-1/2 absolute transform-top-half right-5 ${
            this.props.sideBtnClassName
          }`}
          onClick={() => this.slideNext()}>
          <IcomoonReact
            className="fill-current"
            iconSet={iconSet}
            // color="#000"
            size={32}
            icon="right-arrow-circle"
          />
        </button>

        <div
          className={`flex-col inline-flex absolute right-0 bottom-0 p-4 text-white ${
            this.props.buttonClassName
          }`}>
          <button className="mb-2" onClick={() => this.slidePrev()}>
            <IcomoonReact
              className="fill-current hover:opacity-75 transition"
              iconSet={iconSet}
              // color="#000"
              size={32}
              icon="left-arrow-circle"
            />
          </button>
          <button onClick={() => this.slideNext()}>
            <IcomoonReact
              className="fill-current hover:opacity-75 transition"
              iconSet={iconSet}
              // color="#000"
              size={32}
              icon="right-arrow-circle"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default FullCarousel;
