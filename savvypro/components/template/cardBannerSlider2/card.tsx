import { Component } from "react";
import iconSet from "../../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import { IconList } from "../../../types";
export interface HomeCoursesCardProps {
  icon: IconList;
  title: string;
  description: string;
}
export class TemplateBannerCard extends Component<HomeCoursesCardProps> {
  render() {
    return (
      <div className="rounded-lg shadow-md relative overflow-hidden z-0 group">
        <div className=" flex flex-col items-center py-12 relative  background-gradient z-10 opacity-100 group-hover:opacity-0 group-hover:z-0 transition text-white">
          <IcomoonReact
            className=" mb-5 fill-current"
            iconSet={iconSet}
            // color="#000"
            size={77}
            icon={this.props.icon}
          />
          <p className="text-lg font-medium">{this.props.title}</p>
        </div>
        <div className="absolute left-0 top-0 bottom-0 right-0  bg-white text-white text-center z-10 opacity-100 md:z-0 md:opacity-0 group-hover:opacity-100 group-hover:z-10 transition flex flex-col justify-center">
          <IcomoonReact
            className=" absolute -right-2 -bottom-2 fill-current text-green-500 opacity-25"
            iconSet={iconSet}
            // color="#000"
            size={100}
            icon={this.props.icon}
          />
          <h3 className="mb-4 relative text-green-500">{this.props.title}</h3>
          <p className="px-5 text-sm leading-loose relative text-gray-700">
            {this.props.description}
          </p>
        </div>
      </div>
    );
  }
}
