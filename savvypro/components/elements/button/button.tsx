import React, { Component } from "react";

class Button extends Component<{ className?: string }> {
  render() {
    let textColor = ''
    if (this.props.value && this.props.value === 'bannerInfo') textColor = '#000000'
    if (this.props.type && this.props.type === 'white') {
      return (
        <div className="relative z-0 inline-block ">
          <button
            style={{ outline: "none", color: '#FFFFFF' }}
            className={`border border-white inline-block bg-white-500 px-10 py-2 rounded-full relative cursor-pointer mb-1 text-sm group top-0 transition hover:top-1 ${this
              .props.className || ""}`}
            onClick={this.props.onClick}
            >
            {this.props.children}
            <span className="transition h-full w-full absolute bg-white-700 left-0 top-1 group-hover:top-0 rounded-full z-behind shadow-lg" />
          </button>
        </div>
      );
    }
    return (
      <div className="relative z-0 inline-block ">
        <button
          style={{ outline: "none", color: textColor }}
          className={`inline-block bg-yellow-500 px-10 py-2 rounded-full relative cursor-pointer mb-1 text-sm group top-0 transition hover:top-1 ${this
            .props.className || ""}`}
          onClick={this.props.onClick}
          >
          {this.props.children}
          <span className="transition h-full w-full absolute bg-yellow-700 left-0 top-1 group-hover:top-0 rounded-full z-behind shadow-lg" />
        </button>
      </div>
    );
  }
}

export { Button };
