import React, { Component } from "react";

class Container extends Component<{ className?: string; style?: any }> {
  render() {
    return (
      <div
        className={`sm:max-w-2xl md:px-4 lg:max-w-5.5xl mx-auto ${
          this.props.className
        }`}>
        {this.props.children}
      </div>
    );
  }
}

export default Container;
