import { Component } from "react";

export interface TabProps {
  tabs: {
    name: string;
    el: JSX.Element;
  }[];
  isMobile: boolean;
}

export class Tab extends Component<TabProps> {
  state: {
    activeIndex: number;
  } = {
    activeIndex: 0
  };

  openIndex(num: number) {
    this.setState({ ...this.state, activeIndex: num });
  }
  render() {
    const { activeIndex } = this.state;

    
    
    return (
      <div>
        {this.props.tabs.length >= 1 ? (
          <div 
            className="flex flex-col sm:flex-row items-center justify-center mb-7" 
            style={{ marginBottom: 30 }}
          >
            {this.props.tabs.map((value, i) => {
              return value.name && (
                <div
                  key={i}
                  className={`${
                    activeIndex === i
                      ? "border-green-500 text-green-500"
                      : "border-transparent bg-gray-200 text-gray-600"
                  }  ${
                    i + 1 !== this.props.tabs.length ? "mb-3 sm:mb-0" : ""
                  } border-2 rounded-full text-lg py-2 px-6 mx-1 cursor-pointer hover:border-green-500 hover:text-green-500 hover:bg-transparent hover:opacity-75 transition text-center`}
                  style={value.name === 'PART 1: Excel功能，函数与数据常识' || value.name === 'PART 2: VBA自动化办公' ? { minWidth: 382, marginBottom: 20 } : { minWidth: 232, marginBottom: 20 }}
                  onClick={() => this.openIndex(i)}
                >
                  {value.name}
                </div>
              )
            })}
          </div>
        ) : (
          undefined
        )}
        <div className="">
          {this.props.tabs.map((value, i) => (
            <div key={i} className={`${activeIndex === i ? "" : "hide"}`}>
              {value.el}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
