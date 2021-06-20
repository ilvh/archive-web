import React, { Component } from "react";
import "./css.css";

class Circle extends Component {
  render() {
    return (
      <div className="inline-block mx-0.5" style={this.props.style}>
        <div
          style={this.props.style}
          className={`h-1 w-1 bg-yellow-500 ${this.props.className ||
            ""} rotate-45 absolute left-50 top-50 transform-top-left-half `}
        />
      </div>
    );
  }
}

function hw(num) {
  return {
    height: `${num}px`,
    width: `${num}px`
  };
}
class DotSeparator extends Component {
  render() {
    return (
      <div
        className={`flex ${this.props.className} items-center`}
        style={{ height: "11px" }}>
        <Circle className="opacity-25" style={hw(4)} />
        <Circle className="opacity-50 dot-separator-transform" style={hw(6)} />
        <Circle style={hw(6)} />

        <Circle className="opacity-50 dot-separator-transform" style={hw(6)} />
        <Circle className="opacity-25" style={hw(4)} />
      </div>
    );
  }
}

export default DotSeparator;
