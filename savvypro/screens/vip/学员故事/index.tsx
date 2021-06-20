import React, {Component} from 'react'

import Card from './card'
import { GradientImage } from "../../../components/layout/gradientImage";
import Container from "../../../components/layout/container";
import { SectionTitle } from "../../../components/layout/section-title";
import HomeData from "../../home/data";
const Offer = HomeData.Offer;

import data from '../data'
const Story = data.Story

export default class extends Component {
  render (){
    return (
      <div>
        <GradientImage image={Offer.backgroundImage}>
          <Container className="relative py-24 z-10 justify-center font-normal">
            <div className="flex justify-center">
              <SectionTitle
                title="学员故事"
                colorClass="text-white"
                className="items-center text-center"
              />
            </div>
            <div className="relative flex flex-wrap justify-center">
              {Story.map((item,index)=>(
                <div className="py-10 w-3/4 md:w-5/6 lg:w-1/2 flex justify-center"><Card {...item} index={index}/></div>
              ))}
            </div>
          </Container>
        </GradientImage>
        
      </div>
    )
  }
}