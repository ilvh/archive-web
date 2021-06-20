import { Component } from "react";
import iconSet from "../../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import { IconList } from "../../../types";

export default class Card extends Component {
  state={
  }
  render() {
    const className = `rounded-lg relative background-gradient overflow-hidden group ${this.props.className}`
    return (
      <div
        className={className}
      >
        <div
          className="flex flex-col items-center py-5 text-white relative opacity-100 group-hover:opacity-0 transition"
        >
          <IcomoonReact
            className="absolute -right-2 -bottom-2 fill-current text-white opacity-25"
            iconSet={iconSet}
            size={100}
            icon={this.props.icon}
          />
          <p className="text-lg font-medium" style={{ marginTop: this.props.className === 'card3' ? 35 : 0}}>
            {this.props.title}
          </p>
          {this.props.details &&
            <p className="px-5 text-sm leading-loose relative">
              {this.props.description}
            </p>
          }
        </div>
        <div className="absolute left-0 top-0 bottom-0 right-0 pt-7 bg-white text-gray-800 text-center opacity-0 group-hover:opacity-100 transition">
          <div className="text-left px-8">
            {this.props.details ? Object.keys(this.props.details).map(key=>(
              <div>
                <h2 className="text-green-500">{key}</h2>
                {Array.isArray(this.props.details[key]) && key === '求职必备技能课程' && (
                  <div className="flex flex-wrap items-center justify-between">
                    {this.props.details[key].map(value=>(
                      <div className="w-1/3 text-center">
                        <div className="text-center" style={{ borderRadius: '50%', height: 80, width: 80, margin: 'auto', padding: 15 }}>
                          <img src={`../../../static/pages/vip1v1/课程logo/${value}`} width={50} ></img>
                        </div>
                        <div>
                          {value.replace('.png','')}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {key === '实习与系统化背景提升' && (
                  <div className="flex flex-wrap items-center justify-between">
                    <div style={{ borderRadius: '50%', textAlign:'center'}}>
                      <img src={`../../../static/pages/vip1v1/课程logo/${this.props.details[key]}`} width={1000}></img>
                    </div>
                  </div>
                )}
                {Array.isArray(this.props.details[key]) && key !== '求职必备技能课程' && this.props.details[key].map(value=>(<div className="text-gray-800 font-normal">- {value}</div>))}
              </div>
            )):
            this.props.description.map(item=>(
              <div className="text-gray-800 font-normal">- {item}</div>
            ))
            }
          </div>
        </div>
      </div>
    );
  }
}
