import { Component } from "react";
import Container from "../../components/layout/container";

import iconSet from "../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import { Button } from "../../components/elements/button";

export class Accordian extends Component<{
  list: { name: string; item: JSX.Element }[];
}> {
  state: {
    activeProgram: number;
  } = {
    activeProgram: 0
  };

  program(num: number) {
    this.setState({ ...this.state, activeProgram: num });
  }
  render() {
    const { activeProgram } = this.state;
    const { list } = this.props;

    return (
      <div>
        {list.map((value, i) => (
          <div
            key={`ElementAccordian${i}`}
            className="rounded-lg bg-white shadow-custom2 mb-5 overflow-hidden">
            <div
              className="py-7 text-xl font-medium text-gray-600 pl-8 pr-5 relative cursor-pointer"
              onClick={() => this.program(i)}>
              <div
                className={`background-gradient absolute w-full h-full top-0 left-0 transition ${
                  activeProgram === i ? "opacity-100" : "opacity-0"
                }`}
              />
              <div
                className={`relative flex justify-between items-center transition ${
                  activeProgram === i ? "text-white text-shadow" : ""
                }`}>
                {value.name}
                <span
                  className="inline-flex transition"
                  style={{
                    transform:
                      activeProgram === i ? "rotate(-90deg)" : "rotate(90deg)"
                  }}>
                  {
                    value.item && (value.item.props.children === "" || value.item.props.children === undefined) ?
                    null : (
                      <IcomoonReact
                    className={`fill-current transition ${
                      activeProgram === i ? "text-white" : "text-yellow-500"
                    }`}
                    iconSet={iconSet}
                    // color="#000"
                    size={30}
                    icon="right-arrow-circle"
                  />
                    )
                  }
                  
                </span>
              </div>
            </div>
            <div
              className="overflow-hidden transition"
              style={{
                maxHeight: activeProgram === i ? "610px" : "0"
              }}>
              <div className="py-4 ">{value.item}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
