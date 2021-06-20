import { Component } from "react";

export default class ProgressCircle extends Component<{
  style?: any;
  strokeClass?: string;
  className?: string;
  percentage: number;
  transitionTime?: number;
  strokeWidth?: number;
  radius?: number;
}> {
  backupTime = this.props.transitionTime || 1;
  constructor(props: any) {
    super(props);
  }
  strokeWidth = this.props.strokeWidth || 10;
  r = this.props.radius || 80 - this.strokeWidth / 2;
  c = Math.PI * (this.r * 2);
  getAmounts() {
    const amount = 360 * (this.props.percentage / 100);
    if (this.props.percentage > 50) {
      return {
        left: amount - 180,
        right: 180
      };
    } else {
      return {
        left: 0,
        right: amount
      };
    }
  }
  timeout: NodeJS.Timeout | undefined;

  runAnimation() {
    this.setState({ ...this.state, pct: this.c, transitionTime: 0 });
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      let { percentage } = this.props;
      if (percentage < 0) {
        percentage = 0;
      }
      if (percentage > 100) {
        percentage = 100;
      }

      var pct = ((100 - percentage) / 100) * this.c;

      this.setState({ ...this.state, pct, transitionTime: this.backupTime });
      this.forceUpdate();
    }, 50);
  }

  componentDidMount() {
    this.runAnimation();
  }
  state = {
    pct: this.c,
    transitionTime: this.backupTime
  };

  render() {
    const { pct, transitionTime } = this.state;
    const { strokeClass, className } = this.props;
    const width = this.r * 2 + this.strokeWidth;

    // $circle.css({ strokeDashoffset: pct });

    return (
      <div
        className={` z-0 ${className ? className : "relative"}`}
        style={this.props.style}>
        <svg
          id="svg"
          width={width}
          height={width}
          viewport="0 0 100 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg">
          <circle
            strokeWidth={this.strokeWidth}
            strokeLinecap="round"
            id="bar"
            className={`stroke-current ${
              strokeClass ? strokeClass : "text-yellow-500"
            } `}
            r={this.r}
            cx={width / 2}
            cy={width / 2}
            fill="transparent"
            strokeDasharray={this.c}
            strokeDashoffset={pct}
            style={{
              transition: `stroke-dashoffset ${transitionTime}s linear`
            }}
          />
        </svg>
      </div>
    );
  }
}
