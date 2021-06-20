import { Component } from "react";
import { TemplatePadding, SectionTitle } from "../core";

import iconSet from "../../../../core/selection.json";
import IcomoonReact from "icomoon-react";
import { IconList } from "../../../types";
import "./css.css";
function isEven(n: number) {
  return n % 2 == 0;
}
export interface TemplateIconCarArrowsProps {
  heading: {
    subTitle?: string;
    title?: string;
    description?: string;
  };

  cards: {
    icon: IconList;
    title: string;
    info: string;
  }[];
}
export interface TemplateIconCarArrowsData {
  type: "TemplateIconCarArrows";
  data: TemplateIconCarArrowsProps;
}

export class TemplateIconCarArrows extends Component<
  TemplateIconCarArrowsProps
> {
  state = {
    col: 3
  };
  afterResize: NodeJS.Timeout | undefined;
  updateColLength() {
    // sm: "640px",
    //   md: "768px",
    //   lg: "1024px",
    //   xl: "1280px"
    if (window.innerWidth > 1024) {
      this.setState({ ...this.state, col: 3 });
    } else if (window.innerWidth > 768) {
      this.setState({ ...this.state, col: 2 });
    } else if (window.innerWidth > 640) {
    } else {
      this.setState({ ...this.state, col: 1 });
    }
  }
  updateResize = () => {
    if (this.afterResize) clearTimeout(this.afterResize);
    this.updateColLength();
    this.afterResize = setTimeout(() => {
      this.updateColLength();
      if (this.afterResize) clearTimeout(this.afterResize);
    }, 200);
  };
  componentDidMount() {
    this.updateResize();
    window.addEventListener("resize", this.updateResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateResize);
    if (this.afterResize) clearTimeout(this.afterResize);
  }
  split(text: string) {
    let el: JSX.Element;
    let [white, blue] = text.split(/\$\$(.+)/);
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
    return el;
  }
  countCol = 0;
  countRow = 0;

  arrows(row: number, col: number) {
    const { col: colLength } = this.state;

    if (isEven(row + 1)) {
      if (col === 0) {
        return `iconCard-bottom`;
      } else {
        return `iconCard-left`;
      }
    } else {
      if (col < colLength - 1) {
        return `iconCard-right`;
      } else {
        return `iconCard-bottom`;
      }
    }

    // if (this.countRow % 2 && this.countCol > 1) {
    //   return `iconCard-left`;
    // } else if (!(this.countRow % 2) && this.countCol < 3) {
    //   return `iconCard-right`;
    // } else if (this.countRow % 2 && this.countCol === 3) {
    //   return `iconCard-bottom`;
    // }
  }

  createMatrix(num: number) {
    const { cards } = this.props;
    let matrix: {
      icon: IconList;
      title: string;
      info: string;
    }[][] = [[]];
    let col = 0;
    let row = 0;

    cards.forEach((card, i) => {
      if (col >= num) {
        matrix.push([]);
        row++;
        col = 0;
      }
      if (isEven(row + 1)) {
        matrix[row].unshift(card);
      } else {
        matrix[row].push(card);
      }

      col++;
    });
    return matrix;
  }

  render() {
    const { heading, cards } = this.props;
    const { col: colLength } = this.state;
    const matrix = this.createMatrix(colLength);
    return (
      <div className=" relative">
        <svg className="opacity-0 h-0 w-0 m-0 p-0">
          <linearGradient
            id="InfoCardArrowsGradient2"
            x1="0"
            x2="0"
            y1="0"
            y2="1">
            <stop offset="0%" stopColor="#96E8C9" />
            {/* <stop offset="50%" stop-color="black" stop-opacity="0" /> */}
            <stop offset="100%" stopColor="#54B78A" />
          </linearGradient>
        </svg>
        <TemplatePadding>
          <SectionTitle {...heading} className="flex flex-col items-center " />

          <div className="grid md:grid-2 lg:grid-3 card-grid mt-12">
            {matrix.map((cols, row) => {
              return cols.map((value, col) => (
                <div
                  key={row + col}
                  className={`relative bg-white font-bold shadow-custom2 flex flex-col items-center rounded-lg py-8 text-gray-700 
                  ${
                    row === matrix.length - 1 && col == cols.length - 1
                      ? ""
                      : this.arrows(row, col)
                  }
                  `}
                  style={{
                    height: "218px",
                    fill: "url(#InfoCardArrowsGradient2)"
                  }}>
                  <IcomoonReact
                    className=" mb-4"
                    iconSet={iconSet}
                    // color="#000"
                    size={75}
                    icon={value.icon}
                  />
                  <div className="text-lg mb-3">{value.title}</div>
                  <div className="text-sm" style={{ width: '90%', textAlign: 'center' }}>{value.info}</div>
                  <div
                    className="absolute  right-full top-1/2 transform-top-half px-3 iconCard-left hidden"
                    style={{ width: "90px" }}>
                    <div className="relative border-t-2 border-green-500 border-dashed">
                      <IcomoonReact
                        className="absolute left-0 -top-px transform-left-top-half fill-current text-green-500"
                        iconSet={iconSet}
                        // color="#000"
                        size={12}
                        icon="arrow-left"
                      />
                    </div>
                  </div>
                  <div
                    className="absolute  left-full top-1/2 transform-top-half px-3 iconCard-right hidden"
                    style={{ width: "90px" }}>
                    <div className="relative border-t-2 border-green-500 border-dashed">
                      <IcomoonReact
                        className="absolute right-0 -top-px transform-right-top-half fill-current text-green-500"
                        iconSet={iconSet}
                        // color="#000"
                        size={12}
                        icon="arrow-right"
                      />
                    </div>
                  </div>

                  <div
                    className="absolute  top-full left-1/2 transform-left-half py-3 iconCard-bottom hidden"
                    style={{ height: "70px" }}>
                    <div className="relative border-l-2 border-green-500 border-dashed h-full">
                      <IcomoonReact
                        className="absolute -left-px bottom-0 transform-left-bottom-half fill-current text-green-500"
                        iconSet={iconSet}
                        // color="#000"
                        size={12}
                        icon="arrow-down"
                      />
                    </div>
                  </div>
                </div>
              ));
            })}
          </div>
        </TemplatePadding>
      </div>
    );
  }
}
