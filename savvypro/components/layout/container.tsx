import React, { Component } from "react";

class Container extends Component<{ className?: string; style?: any }> {
  render() {
    return (
      <div
        className={`sm:max-w-2xl md:px-4 lg:max-w-6xl mx-auto ${
          this.props.className
        }`}>
        {this.props.children}
      </div>
    );
  }
}

export default Container;
