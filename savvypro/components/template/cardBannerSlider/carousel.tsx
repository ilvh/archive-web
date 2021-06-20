import React, { Component } from "react";

import iconSet from "../../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import {
  isMobileOnly
} from "react-device-detect";

// TODO: hookup landing link
// 讲师介绍 Banner
class WhyUsCarousel extends Component<{
  galleryItems: () => JSX.Element[];
  cards: [];
}> {
  index = 0;
  carousel: React.RefObject<AliceCarousel> = React.createRef();
  state = {
    currentIndex: 0,
    currentSlide: 0,
    responsive: { 0: { items: 1 }, 1024: { items: 3 } },
    galleryItems: this.props.galleryItems(this.props.cards),
    isMobileOnly: false,
  };

  slideTo = (i:number) => this.setState({ currentIndex: i });

  onSlideChanged = (e) => {
    const currentItem = e.item;
    return this.setState({ currentIndex: currentItem });
  }

  slideNext = () =>{
    if ( this.state.currentIndex < this.state.galleryItems.length - 1 ){
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    } else {
      this.setState({ currentIndex: 0 });
    }
  }

  slidePrev = () =>{
    if ( this.state.currentIndex > 0 ) {
      this.setState({ currentIndex: this.state.currentIndex - 1 });
    }  
  }

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
    const { responsive, currentIndex, galleryItems } = this.state;

    return (
      <div className=" ">
        {
          galleryItems.length > 3 ?
          (
            <div className="relative mx-11 " style={{ maxWidth: 1350 }}>
            <AliceCarousel
              ref={this.carousel}
              dotsDisabled={true}
              responsive={responsive}
              buttonsDisabled={true}
              items={galleryItems}
              slideToIndex={currentIndex}
              onSlideChanged={this.onSlideChanged}
              fadeOutAnimation={true} 
              mouseDragEnabled
              autoPlay={true}
              autoPlayInterval={3000}
            />
            {
              this.state.isMobileOnly ? null 
               : (
                 <div>
                     <button
                        className="transition hover:opacity-50 p-2 absolute top-1/2 -left-12 transform-top-half text-green-500 bg-white leading-none rounded-full shadow-custom"
                        onClick={() => this.slidePrev()}
                     >
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
                      onClick={() => this.slideNext()}
                    >
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
          ) : galleryItems.length > 2 ? 
          (
            <div className="relative mx-12 mx-auto" style={{ maxWidth: 1047 }}>
            <AliceCarousel
              ref={this.carousel}
              dotsDisabled={true}
              responsive={responsive}
              buttonsDisabled={true}
              items={galleryItems}
              slideToIndex={currentIndex}
              onSlideChanged={this.onSlideChanged}
              fadeOutAnimation={true}
            />
          </div>
          ): galleryItems.length > 1 && galleryItems.length <= 2 ? (
            <div className="relative mx-12 mx-auto" style={{ maxWidth: 700 }}>
              <AliceCarousel
                ref={this.carousel}
                dotsDisabled={true}
                responsive={responsive}
                buttonsDisabled={true}
                items={galleryItems}
                slideToIndex={currentIndex}
                onSlideChanged={this.onSlideChanged}
                fadeOutAnimation={true}
              />
            </div>
            ) : (
              <div className="relative mx-12 mx-auto" style={{ maxWidth: 347 }}>
              <AliceCarousel
                ref={this.carousel}
                dotsDisabled={true}
                responsive={responsive}
                buttonsDisabled={true}
                items={galleryItems}
                slideToIndex={currentIndex}
                onSlideChanged={this.onSlideChanged}
                fadeOutAnimation={true}
                swipeDisabled={true}
              />
            </div>
            )
        }
      </div>
    );
  }
}

export default WhyUsCarousel;
