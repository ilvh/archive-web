import { Component } from "react";

export class Bullet extends Component<{ text: string; className?: string }> {
  render() {
    return (
      <li className={`flex items-center pb-4 ${this.props.className || ""}`}>
        <span
          className="border-2 border-yellow-500 flex items-center justify-center mr-4 flex-shrink-0"
          style={{ width: "14px", height: "14px", transform: "rotate(45deg)" }}>
          <span
            className="bg-yellow-500"
            style={{ width: "6px", height: "6px" }}
          />
        </span>
        {this.props.text}
      </li>
    );
  }
}
