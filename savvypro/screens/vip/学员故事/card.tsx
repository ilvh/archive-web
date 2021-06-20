import { Component } from "react";
import iconSet from "../icons.json";
import IcomoonReact, { iconList } from "icomoon-react";

// import './card.css'

export default class Card extends Component {
  state={
  }
  render() {
    const className = `rounded-lg relative group`
    return (
      <div
        className={className}
      >
        <div
          className="flex flex-col items-center py-5 text-white relative justify-between"
        >
          <div className="overflow-hidden" style={{width:'85%'}}>
            <img src={this.props.img}></img>
          </div>
          <p className="text-lg font-medium">
            {this.props.title}
          </p>
        </div>
        <div 
          className="absolute left-0 right-0 bottom-0 py-2 overflow-scroll bg-white text-gray-800 text-center opacity-0 group-hover:opacity-100 transition" 
          style={{top:-20, width:'80%', height: '45vh', margin:'auto', boxShadow:'5px 5px 5px grey', borderRadius: 20}}
        >
          <div className="text-left px-8">
            {this.props.details && Object.keys(this.props.details).map(key=>(
              <div>
                <h2 className="text-green-500">{key}</h2>
                {Array.isArray(this.props.details[key]) && 
                this.props.details[key].map(value=>{
                  let bullet
                  if(key==='求职困难'){
                    bullet = (
                      <IcomoonReact
                        iconSet={iconSet}
                        color="#FC6464"
                        size={12}
                        icon="cross"
                      />
                    )
                  } else if(key ==='SavvyPro解决方案'){
                    bullet = (
                      <IcomoonReact
                        iconSet={iconSet}
                        color="#69D391"
                        size={12}
                        icon="checkmark"
                      />
                    )
                  } else {
                    bullet = '-'
                  }
                  return <div className="text-gray-800 font-normal">{bullet} {value}</div>
                })
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
