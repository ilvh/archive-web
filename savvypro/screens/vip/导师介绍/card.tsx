import { Component } from "react";
import {isMobile} from 'react-device-detect'

export default class Card extends Component {
  state={
  }
  render() {
    return (
      <div
        className="flex justify-center content-center w-full"
        style={{position:'relative', textAlign:'left', height: 280}}
      >
        <div className="w-full sm:w-1/2" >
          <div style={{width: 225, height: 225, overflow: 'hidden'}}>
            <div
              className="rounded-full flex justify-center"
              style={{ width: 180, height: 180, position: 'relative', left: 10, backgroundColor:'rgb(71, 193, 168, 0.9)'}}
            >
              <div
                className="rounded-full flex justify-center" 
                style={{ width: 180, height: 180, border:'1px solid gray', position: 'relative', right: 10 }}>
              </div>
            </div>
          </div>
          <img src={`../../../static/pages/vip1v1/导师/${this.props.name}.png`} width={200} style={{position:'relative', top: -250}}></img>
        </div>
        <div className="w-full sm:w-1/2 relative">
          <div className="font-bold text-xl">{this.props.name}</div>
          <div className="text-green-500 text-base">{this.props.subtitle}</div>
          <ol className="text-gray-800 text-sm">
          {this.props.description.map(item=>(
            <li>●	{item}</li>
          ))}
          </ol>
        </div>
      </div>
    );
  }
}
