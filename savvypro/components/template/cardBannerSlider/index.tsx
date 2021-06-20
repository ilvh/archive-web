import { Component } from "react";
import {
  TemplateInfoCard,
  TemplateInfoCardProps
} from "../../elements/infoCard";
import Container from "../../layout/container";
import { Bullet } from "../../elements/bullet";
import { Button } from "../../elements/button";
import { TemplatePadding, SectionTitle } from "../core";
import { Tab } from "../../layout/tab";
import { Accordian } from "../../elements/accordian";

import CardCarousel from "./carousel";
import Image, { ImageProps } from "../../elements/image";
export interface TemplateCardBannerSliderProps {
  heading: {
    subTitle?: string;
    title?: string;
    description?: string;
  };
  description?: string;
  image?: ImageProps;
  cards: {
    title: string;
    description: string;
    body: string;
  }[];
}
export interface TemplateCardBannerSliderData {
  type: "TemplateCardBannerSlider";
  data: TemplateCardBannerSliderProps;
}

export class TemplateCardBannerSlider extends Component<
  TemplateCardBannerSliderProps
> {
  render() {
    const { heading, description, image, cards } = this.props;
  
    const galleryItems = (items) => {
      return items.map((value, i) => {
        return (
          <div key={i} className='p-2'>
            <div className=" rounded-lg overflow-hidden shadow-lg" style={{ maxWidth: 347 }}>
              <div 
                className="background-gradient text-lg text-white text-center py-5"
                style={{ minHeight: 84 }}
              >
                {value.title}
              </div>
              <div
                className="text-sm bg-gray-100 text-gray-600 text-center py-3 px-5 "
                style={{ lineHeight: 1.8, minHeight: 72 }}>
                {value.description}
              </div>
              <div
                className="text-gray-700 bg-white text-sm px-7 py-5"
                style={{ lineHeight: 1.8, minHeight: value.body.minHeight }}>
                {value.body.data}
              </div>
            </div>
          </div>
        )}
      );
    };

    return (
      <div className="background-gradient-dark relative">
        {image ? (
          <Image
            className="absolute left-0 top-0 w-full h-full object-cover opacity-15"
            {...image}
          />
        ) : (
          undefined
        )}
        <Container className="py-36 relative">
          <SectionTitle
            {...heading}
            className="flex flex-col items-center"
            colorClass="text-white"
          />
          {description ? (
            <div
              className="text-white text-lg text-center mx-auto"
              style={{ maxWidth: "600px" }}>
              {description}
            </div>
          ) : (
            undefined
          )}
          <div className="mt-12">
            <CardCarousel galleryItems={galleryItems} cards={cards} />
          </div>         
        </Container>
      </div>
    );
  }
}
