import { Component } from "react";
import iconSet from "../../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import { IconList } from "../../../types";
export interface HomeCoursesCardProps {
  icon: IconList;
  title: string;
  description: string;
}
export class HomeCoursesCard extends Component<HomeCoursesCardProps> {
  render() {
    return (
      <div
        className="rounded-lg shadow-custom3 relative overflow-hidden z-0 group"
        style={{ width: "347px" }}>
        <div
          className=" flex flex-col items-center py-5 relative bg-white  z-10 opacity-100 group-hover:opacity-0 group-hover:z-0 transition"
          style={{ fill: "url(#HomeCoursesCardGradient)" }}>
          <IcomoonReact
            className=" mb-3"
            iconSet={iconSet}
            // color="#000"
            size={75}
            icon={this.props.icon}
          />
          <p className="text-lg font-medium">{this.props.title}</p>
        </div>
        <div className="absolute left-0 top-0 bottom-0 right-0 pt-7 background-gradient text-white text-center z-0 opacity-0 group-hover:opacity-100 group-hover:z-10 transition">
          <IcomoonReact
            className=" absolute -right-2 -bottom-2 fill-current text-white opacity-25"
            iconSet={iconSet}
            // color="#000"
            size={100}
            icon={this.props.icon}
          />
          <h3 className="mb-4 relative">{this.props.title}</h3>
          <p className="px-5 text-sm leading-loose relative">
            {this.props.description}
          </p>
        </div>
      </div>
    );
  }
}
