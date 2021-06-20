import React, { Component } from "react";
import DotSeparator from "./elements/dot-separator";
import FullCarousel from "./full-carousel";
class SliderWithInfo extends Component {
  side = this.props.side || "left";
  opposite(firstChar = false) {
    let char = "";
    if (this.side === "left") {
      char = "right";
    } else if (this.side === "right") {
      char = "left";
    }
    if (firstChar) return char.charAt(0);
    else return char;
  }
  galleryItems = () => {
    const list = this.props.items;
    return list.map((value, index) => {
      return (
        <div
          key={index}
          className=" h-full w-full home-philosophy__slide-item "
          style={{ backgroundImage: `url(${value.image})` }}>
          <div className="h-full w-full background-gradient  flex items-end">
            <div
              className={`text-sm px-5 py-4  ${
                this.opposite(true) === "l" ? "ml-auto" : "mr-auto"
              }`}>
              {value.text}
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="flex-col">
        <div
          className={`md:w-3/4 h-76 rounded-lg bg-black shadow-lg relative z-0 overflow-hidden  ${
            this.opposite(true) === "l" ? "md:ml-auto" : "md:mr-auto"
          }`}>
          <FullCarousel
            indiClassName={` ${
              this.side === "right" ? "right-5" : "left-5"
            } bottom-10  ${
              this.opposite() === "right" ? "right-auto" : "left-auto"
            }`}
            buttonClassName={`${
              this.opposite() === "right" ? "right-1/3" : "left-1/3"
            } ${this.side}-auto hidden md:inline-flex`}
            sideBtnClassName="md:hidden"
            galleryItems={this.galleryItems}
          />
        </div>
        <div
          className={`text-center     px-10 py-12 rounded-lg relative z-10 md:text-left md:bg-white md:w-1/2 md:-mt-24 md:m${this.side.charAt(
            0
          )}-auto md:shadow-lg`}>
          <div className="text-2xl text-gray-700 mb-1.5">
            {this.props.title}
          </div>
          <div className="text-base text-blue-500 mb-1.5">
            {this.props.subTitle}
          </div>
          <div className="text-xs text-gray-700 leading-loose">
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
}

export default SliderWithInfo;
