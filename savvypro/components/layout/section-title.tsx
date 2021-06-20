import React, { Component } from "react";
import DotSeparator from "../elements/dot-separator";

export interface SectionTitleProps {
  subTitle?: string;
  title?: string;
  description?: string;
  className?: string;
  colorClass?: string;
  descriptionClass?: string;
  partTitle?: string;
  partTitleClass?: string;  
  separator?: boolean;
  titleChild?: JSX.Element;
  type?: string;
  titleColor?: string;
}
class SectionTitle extends Component<SectionTitleProps> {
  separator: boolean = true;
  constructor(props: any) {
    super(props);
    if (this.props.separator === false) this.separator = false;
  }
  split(text: string, type: string) {
    let el: JSX.Element;
    let [white, blue] = text.split(/\$\$(.+)/);
    if (type && type === 'second') {
      if (blue) {
        el = (
          <span>
            <span className="text-blue-500">{white}</span>
            <span>{blue}</span>
          </span>
        );
      } else {
        el = <span>{white}</span>;
      }
    } else if (type && type === 'forth') {
      if (blue) {
        el = (
          <span>
            <span className="text-red-500">{white}</span>
            <span>{blue}</span>
          </span>
        );
      } else {
        el = <span>{white}</span>;
      }
    }else {
      if (blue) {
        el = (
          <span>
            <span>{white}</span>
            <span className="text-green-500">{blue}</span>
          </span>
        );
      } else {
        el = <span>{white}</span>;
      }
    }
    return el;
  }

  render() {
    const description = () => {
      if (this.props.description) {
        return (
          <div
            className={`text-sm ${this.props.colorClass ||
              "text-gray-700"} ${this.props.descriptionClass ||
              ""} mb-7 leading-loose items-left`}
            style={{ maxWidth: "530px" }}>
            {this.split(this.props.description, this.props.type)}
          </div>
        );
      } else return;
    };

    const partTitle = () => {
      if (this.props.partTitle) {
        return (
          <div
            className={`text-sm ${this.props.colorClass ||
              "text-gray-700"} ${this.props.partTitleClass ||
              ""} mb-7 leading-loose items-left`}
            style={{ maxWidth: "530px", marginLeft: '-80%' }}>
            <div style={{ borderLeft: `3px solid ${this.props.titleColor}`, height: '500', paddingLeft: 20 }}>
              {this.split(this.props.partTitle, this.props.type)}
            </div>
          </div>
        );
      } else return;
    };

    const subTitle = () => {
      if (this.props.subTitle) {
        return (
          <div
            className={`text-sm ${this.props.colorClass ||
              "text-gray-700"} mb-7 leading-loose`}
            style={{ maxWidth: "530px" }}>
            {this.split(this.props.subTitle, this.props.type)}
          </div>
        );
      } else return;
    };

    const title = () => {
      if (this.props.title) {
        return (
          <div
            className={`${this.props.colorClass ||
              "text-black"} text-4xl  font-medium mb-4 flex items-center`}>
            {this.split(this.props.title, this.props.type)}
            {this.props.titleChild ? this.props.titleChild : undefined}
          </div>
        );
      }
    };
    return (
      <div className={`flex flex-col  ${this.props.className || ""}`}>
        {title()}
        {subTitle()}
        {this.separator ? <DotSeparator className=" mb-7" /> : undefined}
        
        {description()}
        {partTitle()}
        {this.props.children}
      </div>
    );
  }
}

export { SectionTitle };
