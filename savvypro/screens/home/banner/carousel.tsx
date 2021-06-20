import React, { Component } from "react";

import iconSet from "../../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Container from "../../../components/layout/container";
import ProgressCircle from "../../../components/elements/progressCircle";
// TODO: hookup landing link
export class HomeBannerCarousel extends Component<{
  galleryItems: () => JSX.Element[],
}> {
  percRef: React.RefObject<ProgressCircle> = React.createRef();
  timeout: NodeJS.Timeout | undefined;
  carousel: React.RefObject<AliceCarousel> = React.createRef();

  time = 7000;
  index = 0;
  items = [1, 2, 3, 4, 5];

  state = {
    currentIndex: 0,
    responsive: { 1024: { items: 1 } },
    galleryItems: this.props.galleryItems(),
    perc: 100,
    showModal: false,
  };

  slideTo = i => this.setState({ ...this.state, currentIndex: i });

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  runTimeout() {
    const { galleryItems } = this.state;
    if (this.timeout) clearTimeout(this.timeout);
    if (this.percRef.current) {
      this.percRef.current.runAnimation();
    }
    if (galleryItems.length > 1) {
      this.timeout = setTimeout(() => {
        this.slideNext();
      }, this.time);
    }
  }

  onSlideChanged = e => {
    this.runTimeout();

    this.setState({ ...this.state, currentIndex: e.item });
  };

  slideNext = () =>
    this.setState({
      ...this.state,
      currentIndex: this.state.currentIndex + 1
    });

  slidePrev = () =>
    this.setState({ ...this.state, currentIndex: this.state.currentIndex - 1 });

  thumbItem = (_, i) => (
    <span
      className={`dot-indicator mr-2 bg-white inline-block rounded-full ${
        this.state.currentIndex === i ? "active" : ""
      }`}
      onClick={() => this.slideTo(i)}
    />
  );
  componentDidMount() {
    const { galleryItems } = this.state;

    if (this.carousel.current !== null) {
      setTimeout(() => {
        (this.carousel.current as any)._setInitialState();
        (this.carousel.current as any)._resetAllIntermediateProps();
      }, 500);
    }
    this.runTimeout();
  }

  render() {
    const { galleryItems, responsive, currentIndex, perc } = this.state;

    return (
      <div className="h-full  homebanner__carousel relative" style={{ height: "100vh" }}>
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
        <div className="absolute left-0 right-0 bottom-5">
          <Container className="flex justify-between items-center font-thin tracking-widest">
            <div className="text-white">
              <span>
                0
                {this.state.currentIndex + 1 > galleryItems.length
                  ? 1
                  : this.state.currentIndex + 1}
                /
              </span>
              <span>0{galleryItems.length}</span>
            </div>
            <div className="flex">
              <button
                className="text-white hover:opacity-50  flex items-center justify-center "
                style={{ width: "40px", height: "40px" }}
                onClick={() => this.slidePrev()}>
                <IcomoonReact
                  className="fill-current"
                  iconSet={iconSet}
                  // color="#000"
                  size={30}
                  icon="full-arrow-left"
                />
              </button>
              <button
                className="text-white hover:opacity-50   relative flex items-center justify-center"
                onClick={() => this.slideNext()}
                style={{ width: "40px", height: "40px" }}>
                <ProgressCircle
                  className="absolute top-0 left-0"
                  ref={this.percRef}
                  percentage={perc}
                  strokeWidth={1}
                  strokeClass="text-white"
                  radius={20}
                  transitionTime={this.time / 1000}
                />
                <IcomoonReact
                  className="fill-current"
                  iconSet={iconSet}
                  // color="#000"
                  size={30}
                  icon="full-arrow-right"
                />
              </button>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
