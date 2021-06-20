import React, {Component} from 'react'
import {isMobile} from 'react-device-detect'
import { TemplateRenderMobile } from "../../../components/template/mobile";
import { TemplateRender } from "../../../components/template";

import data from '../data'

export default class extends Component {
  
  render (){
    return (
      isMobile? <TemplateRenderMobile {...data.OfferShowcase} />: <TemplateRender {...data.OfferShowcase} />
    )
  }
}