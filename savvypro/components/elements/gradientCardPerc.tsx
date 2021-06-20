import { Component } from "react";
export interface GradientCardPercProps {
  first: string;
  second: string;
  large: string;
  symbol: string;
  bottom?: string;
}
export class GradientCardPerc extends Component<GradientCardPercProps> {
  render() {
    return (
      <div
        className="background-gradient rounded-lg flex flex-col items-center text-white py-9"
        style={{ width: "256px" }}>
        <p className="text-sm">{this.props.first}</p>
        <div
          className="bg-white my-3"
          style={{ width: "20px", height: "2px" }}
        />
        <p className="text-lg mb-4">{this.props.second}</p>
        <p className="" style={{ lineHeight: 0.9 }}>
          <span className="text-7xl tracking-tighter font-medium text-shadow">
            {this.props.large}
          </span>
          <span className="text-2xl tracking-widest"> {this.props.symbol}</span>
        </p>
        {this.props.bottom ? (
          <p className="text-sm mt-5">{this.props.bottom}</p>
        ) : (
          undefined
        )}
      </div>
    );
  }
}
