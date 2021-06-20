import { Component } from "react";
import {
  TemplateInfoCard,
  TemplateInfoCardProps
} from "../../elements/infoCard";
import Container from "../../layout/container";
import { Bullet } from "../../elements/bullet";
import { Button } from "../../elements/button";
import { TemplatePadding } from "../core";
import { Tab } from "../../layout/tab";
import { Accordian } from "../../elements/accordian";
import { SectionTitle } from "../../layout/section-title";
import { TemplateBannerCard } from "./card";
import CardCarousel from "./carousel";
import Image, { ImageProps } from "../../elements/image";
import { IconList } from "../../../types";
export interface TemplateCardBannerSlider2Props {
  heading: {
    subTitle?: string;
    title?: string;
    description?: string;
  };
  image?: ImageProps;
  cards: {
    icon: IconList;
    title: string;
    description: string;
  }[];
  slides: {
    image: ImageProps;
    text: string;
  }[];
}
export interface TemplateCardBannerSlider2Data {
  type: "TemplateCardBannerSlider2";
  data: TemplateCardBannerSlider2Props;
}

export class TemplateCardBannerSlider2 extends Component<
  TemplateCardBannerSlider2Props
> {
  galleryItems = () => {
    const { slides } = this.props;
    return slides.map((value, i) => (
      <div
        key={i}
        className=" rounded-lg overflow-hidden  h-full relative bg-black">
        <Image
          {...value.image}
          className="h-full w-full absolute top-0 left-0 object-cover opacity-85"
          style={{ filter: "blur(2px)", transform: "scale(1.04)" }}
        />
        <div className="absolute bottom-6 left-4 text-xs text-white">
          {value.text}
        </div>
      </div>
    ));
  };
  render() {
    const { heading, image, cards } = this.props;
    return (
      <TemplatePadding withCtn={false}>
        <div className="background-gradient-dark relative" >
          {image ? (
            <Image
              className="absolute left-0 top-0 w-full h-full object-cover opacity-15"
              {...image}
            />
          ) : (
            undefined
          )}
          <Container className="py-36 mt-50 md:mt-0">
            <div className="relative md:flex justify-between">
              <div className=" md:w-1/3 lg:w-1/2">
                <div className="text-white mb-12 text-center md:text-left">
                  <h3 className="text-2xl font-black">
                    {heading.title || heading.subTitle}
                  </h3>
                  {heading.description ? (
                    <div
                      className="  mx-auto mt-3"
                      style={{ maxWidth: "600px" }}>
                      {heading.description}
                    </div>
                  ) : (
                    undefined
                  )}
                </div>
                <div className="flex flex-wrap -m-3">
                  {cards.map((value, i) => (
                    <div key={i} className="w-3/4 lg:w-1/2 p-3 m-auto font-bold">
                      <TemplateBannerCard {...value} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </TemplatePadding>
    );
  }
}
