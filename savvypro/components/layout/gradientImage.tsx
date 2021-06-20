import React, { Component } from "react";
import Image, { ImageProps } from "../elements/image";
class GradientImage extends Component<{ image: ImageProps }> {
  render() {
    return (
      <div className="relative z-0">
        <Image
          {...this.props.image}
          className="absolute z-0 left-0 top-0 right-0 bottom-0 object-cover object-center w-full h-full "
        />
        <div className="absolute top-0 left-0 w-full h-full background-gradient opacity-95" />
        {this.props.children}
      </div>
    );
  }
}

export { GradientImage };
