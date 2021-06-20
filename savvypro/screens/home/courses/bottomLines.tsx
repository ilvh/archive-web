import { Component } from "react";
import iconSet from "../../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

export class BottomLines extends Component<{ side: "left" | "right" }> {
  doWhen<T>(left: T, right: T) {
    if (this.props.side === "left") {
      return left;
    } else return right;
  }
  render() {
    return (
      <div
        className={`border-dashed border-gray-400 border-t-1 absolute 

        top-1/2 transform-top-half   ${this.doWhen(
          "right-0",
          "right-5"
        )} ${this.doWhen("left-5", "left-0")}`}>
        <div
          className={`inline-block absolute top-0 ${this.doWhen(
            "left-0 ",
            "right-0 "
          )}`}
          style={{
            lineHeight: "0",
            transform: `translateY(-55%) translateX(${this.doWhen(
              "-",
              ""
            )}4px) rotateZ(${this.doWhen("-", "")}90deg)`
          }}>
          <IcomoonReact
            className=" fill-current text-gray-400 "
            iconSet={iconSet}
            // color="#000"
            size={10}
            icon="arrow-up"
          />
        </div>
      </div>
    );
  }
}
