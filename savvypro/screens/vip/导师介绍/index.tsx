import React, {Component} from 'react'

import Card from './card'
import { GradientImage } from "../../../components/layout/gradientImage";
import Container from "../../../components/layout/container";
import DotSeparator from "../../../components/elements/dot-separator";
import HomeData from "../../home/data";

import data from '../data'

export default class extends Component {
  render (){
    return (
      <Container className="py-8">
        <p style={{fontSize: '36px', marginBottom: '0',textAlign: 'center'}}>
          导师
          <span style={{color: '#54B78A'}}>介绍</span>
        </p>
        <div style={{width: '50px', margin: '28px auto'}}>
          <DotSeparator  />
        </div>
        <Container className="relative z-10 flex flex-wrap justify-center">
          {data.Tutors.map(item=>(
            <div className="py-5 w-full lg:w-1/2 flex"><Card {...item}/></div>
          ))}
        </Container>
      </Container>
    )
  }
}