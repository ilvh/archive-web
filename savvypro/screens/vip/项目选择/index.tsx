import React, {Component} from 'react'

import { GradientImage } from "../../../components/layout/gradientImage";
import Container from "../../../components/layout/container";
import DotSeparator from "../../../components/elements/dot-separator";
import iconSet from "../icons.json";
import IcomoonReact from "icomoon-react";

import data from '../data'
import '../index.css'

export default class extends Component {
  state = {
    onFocus: ['背景与技能提升阶段']
  }
  generateTableRow = (tr) => {
    const titleClass = "rounded px-2 py-2 bg-green-400 text-white text-center tr"
    if(tr.children && tr.children.length){
      return (
        <>
          <tr 
            className={!tr.level ? "border-b border-gray-400":""}
            onClick={()=>{
              let onFocus = [...this.state.onFocus]
              onFocus = onFocus.filter(el=>el!==tr.title)
              this.setState({
                onFocus
              })
            }}
          ><td className={tr.level===1 ? titleClass:'text-center'}>{tr.title}</td></tr>
          {tr.children.map((item)=>(
            this.generateTableRow(item)
          ))}
        </>
      )
    }
    return (
      <tr className="border-b border-gray-400">
        <td className="text-gray-800 font-normal">{tr.title}</td>
        <td className="text-center border border-gray-400">
          {tr.basic && 
            <span>
              <IcomoonReact
                className="mx-2"
                iconSet={iconSet}
                color="#69D391"
                size={20}
                icon="checkmark"
              />
              <span className="text-sm text-gray-800 font-light">{tr.basic}</span>
            </span>
          }
        </td>
        <td className="text-center border border-gray-400">{(tr.basic || tr.premium) && 
          <span>
            <IcomoonReact
              className="mx-2"
              iconSet={iconSet}
              color="#69D391"
              size={20}
              icon="checkmark"
            />
            <span className="text-sm text-gray-800 font-light">{tr.premium}</span>
          </span>}</td>
        <td className="text-center border border-gray-400">
          {(tr.basic || tr.premium || tr.golden) && 
          <span>
            <IcomoonReact
              className="mx-2"
              iconSet={iconSet}
              color="#69D391"
              size={20}
              icon="checkmark"
            />
            <span className="text-sm text-gray-800 font-light">{tr.golden}</span>
          </span>
          }
        </td>
      </tr>
    )
  }
  render (){
    return (
      <Container className="py-8 text-center justify-center">
        <p style={{fontSize: '36px', marginBottom: '0',textAlign: 'center'}}>
          项目
          <span style={{color: '#54B78A'}}>选择</span>
        </p>
        <div style={{width: '50px', margin: '28px auto'}}>
          <DotSeparator  />
        </div>
        <Container className="flex justify-center">
          <table className="text-left w-5/6 xl:w-3/4">
            <tr className="text-white">
              <th></th>
              <th className="rounded px-2 sm:px-8 py-2 w-8 sm:w-16" style={{backgroundColor:'#9ae6b4'}}>Basic</th>
              <th className="rounded px-2 sm:px-8 py-2 w-8 sm:w-16 bg-green-400">Premium</th>
              <th className="rounded px-2 sm:px-8 py-2 w-8 sm:w-16 bg-green-500">Golden</th>
            </tr>
            {data.PlanSelections.map((item)=>{
              if(this.state.onFocus.includes(item.title)){
                return this.generateTableRow(item)
              } else {
                return (
                  <tr 
                    onClick={()=>{
                      let onFocus = [...this.state.onFocus]
                      if(onFocus.includes(item.title)){
                        onFocus = onFocus.filter(el=>el!==item.title)
                      } else {
                        
                      }
                      onFocus.push(item.title)
                      this.setState({
                        onFocus
                      })
                    }}
                  >
                    <td className="rounded px-2 py-2 bg-green-400 text-white text-center tr">{item.title}</td>
                    <td/>
                    <td>
                      <span>
                        <IcomoonReact
                          className="mx-2 arrow-animation"
                          iconSet={iconSet}
                          color="#69D391"
                          size={20}
                          icon="arrow-left2"
                        />
                        <span className="w-full text-sm text-gray-800 font-light">点击查看详情</span>
                      </span>
                    </td>
                  </tr>
                )
              }
            })}
          </table>
        </Container>
      </Container>
    )
  }
}