import React, {Component} from 'react'
import { isMobile } from 'react-device-detect'

import Container from "../../../components/layout/container";
import DotSeparator from "../../../components/elements/dot-separator";

import data from '../data'
import '../index.css'

export default class extends Component {
  state = {
    perRow: 5,
    onHover: null
  }


  render (){
    const allIcons = Object.keys(data.Area)
    return (
      <Container className="py-8">
        <p style={{fontSize: '36px', marginBottom: '0',textAlign: 'center'}}>
          <span style={{color: '#54B78A'}}>十大</span>
          菁英行业
        </p>
        <div style={{width: '50px', margin: '28px auto'}}>
          <DotSeparator  />
        </div>
        <div style={{ margin: 'auto', maxWidth: 800 }}>
          <div className="flex items-center" style={{ flexWrap:'wrap', justifyContent:'space-between', marginBottom: 10 }}>
            {allIcons.map(icon=>(
              <div className={`relative group ${isMobile ? 'w-1/3':'w-1/5'}`}>
                <div className="text-center mx-auto" style={{width:50}}>
                  <div 
                    className="shadow-lg rounded-full"
                    onMouseEnter={()=>{
                      this.setState({
                        onHover: icon
                      })
                    }}
                    onMouseLeave={()=>{
                      this.setState({
                        onHover: null
                      })
                    }}
                  >
                    <div 
                      // className="opacity-100 group-hover:opacity-0 transition" 
                      style={{ textAlign:'center', padding: 15 }}
                    >
                      <img src={`../../../static/pages/vip1v1/Icon/${icon}.png`} width={50}></img>
                    </div>
                    {this.state.onHover === icon && data.Area[icon].length > 0 && 
                      <div 
                        className="absolute text-white font-normal text-center py-2 "
                        style={{width: 210, height: 100, top: '-100%', left: '-25%' }}
                      > 
                        <div className="absolute bottom-0 text-center bg-black bg-opacity-75 rounded-md" style={{left:0,right:0}}>
                          {data.Area[icon].map((item,index)=><div>{item}{index!==data.Area[icon].length-1 && ','}</div>)}
                        </div>
                      </div>
                    }
                  </div>
                </div>
                <div style={{marginTop: 10}}>
                  {icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    )
  }
}