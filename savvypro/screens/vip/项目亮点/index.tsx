import React, {Component} from 'react'

import Card from './card'
import { GradientImage } from "../../../components/layout/gradientImage";
import Container from "../../../components/layout/container";
import { SectionTitle } from "../../../components/layout/section-title";
import HomeData from "../../home/data";
const WhyData = HomeData.WhyUs;

import data from '../data'
import '../index.css'

export default class extends Component {
  render (){
    return (
      <div>
        <GradientImage image={WhyData.backgroundImage}>
          <Container className="relative py-24 z-10 justify-center font-normal">
            <div className="flex justify-center">
              <SectionTitle
                title="项目亮点"
                colorClass="text-white"
                className="items-center text-center"
              />
            </div>
            <div className="relative flex flex-wrap justify-center">
              <div className="py-10 w-5/6 md:w-1/2 flex justify-center"><Card className="card0" {...data.Highlights[0]}/></div>
              <div className="py-10 w-5/6 md:w-1/2 flex justify-center"><Card className="card1" {...data.Highlights[1]}/></div>
              <div className="py-10 w-5/6 md:w-1/2 flex justify-center"><Card className="card2" {...data.Highlights[2]}/></div>
              <div className="py-10 w-5/6 md:w-1/2 flex justify-center"><Card className="card3" {...data.Highlights[3]}/></div>
            </div>
          </Container>
        </GradientImage>
        
      </div>
    )
  }
}