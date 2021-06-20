import { Component } from "react";
import { ImageProps, isJpeg, isSvg } from "./types";

export default class Image extends Component<ImageProps> {
  render() {
    let srcSet = "";
    let src = "";
    let type: "jpeg" | "png" | "svg";
    if (isJpeg(this.props)) {
      srcSet = `${this.props.jpeg[1]} 1x, ${this.props.jpeg[2]} 2x`;
      src = this.props.jpeg[1];
      type = "jpeg";
    } else if (isSvg(this.props)) {
      srcSet = `${this.props.svg}`;
      src = this.props.svg;
      type = "svg";
    } else {
      srcSet = `${this.props.png[1]} 1x, ${this.props.png[2]} 2x`;
      src = this.props.png[1];
      type = "png";
    }
    return (
      <picture>
        {this.props.webp ? (
          <source
            srcSet={`${this.props.webp[1]} 1x, ${this.props.webp[2]} 2x`}
            type="image/webp"
          />
        ) : (
          undefined
        )}
        <source srcSet={srcSet} type={`image/${type}`} />
        <img {...this.props} src={src}/>
      </picture>
    );
  }
}
