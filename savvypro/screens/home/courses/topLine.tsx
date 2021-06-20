import { Component } from "react";
import iconSet from "../../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

export class TopLine extends Component<{ side: "left" | "right" }> {
  doWhen<T>(left: T, right: T) {
    if (this.props.side === "left") {
      return left;
    } else return right;
  }
  render() {
    return (
      <div
        className={`hidden lg:block absolute  w-1/2 ${this.doWhen(
          "left-1/2",
          "right-1/2"
        )} bottom-full`}
        style={{ height: `${154 / 2 / 16 + 6}rem` }}>
        <div
          className={`absolute top-0 bottom-5 border-dashed border-t-1 border-gray-400 ${this.doWhen(
            "left-0 border-l-1",
            "right-0 border-r-1"
          )}  `}
          style={{ [this.doWhen("right", "left")]: `${347 / 2 + 20}px` }}>
          <IcomoonReact
            className={`fill-current text-gray-400  absolute top-full ${this.doWhen(
              "left-0 transform-left-top-half",
              "right-0 transform-right-top-half"
            )}`}
            iconSet={iconSet}
            // color="#000"
            size={10}
            icon="arrow-down"
          />

          <div
            style={{
              lineHeight: 0,
              transform: this.doWhen(
                `translateY(45%) translateX(3px) rotate(-90deg)`,
                `translateY(45%) translateX(-3px) rotate(90deg)`
              )
            }}
            className={`inline-block  absolute bottom-full ${this.doWhen(
              "right-0",
              "left-0"
            )}`}>
            <IcomoonReact
              className={`fill-current text-gray-400  ${this.doWhen("", "")}`}
              iconSet={iconSet}
              // color="#000"
              size={10}
              icon="arrow-down"
            />
          </div>
        </div>
      </div>
    );
  }
}
