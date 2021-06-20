import { Component } from "react";
import { GradientImage } from "../../../components/layout/gradientImage";
import { ImageProps } from "../../../components/elements/image";
import Container from "../../../components/layout/container";
import { SectionTitle } from "../../../components/layout/section-title";
import HomeData from "../data";
import WhyUsCarousel from "./carousel";
import { IconList } from "../../../types";
import iconSet from "../../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
const WhyData = HomeData.WhyUs;
export interface WhyUsData {
  title: string;
  backgroundImage: ImageProps;
  cards: {
    icon: IconList;
    title: string;
    text: string;
  }[];
}

export class WhyUs extends Component {
  galleryItems() {
    return WhyData.cards.map((value, index) => {
      return (
        <div key={index} className="px-4  py-3">
          <div className="rounded-lg shadow-custom overflow-hidden bg-white relative z-0 group h-full">
            <div
              className="h-full px-6 py-12 text-center bg-white relative transition md:opacity-0 group-hover:z-10 group-hover:opacity-100"
              style={{ minHeight: "100%" }}>
              <p className="text-green-500 text-lg mb-5">{value.title}</p>
              <p className="text-sm" style={{ lineHeight: "2" }}>
                {value.text}
              </p>
              <IcomoonReact
                className="fill-current text-green-500 opacity-25 -right-3 -bottom-3 absolute"
                iconSet={iconSet}
                // color="#000"
                size={150}
                icon={value.icon}
              />
            </div>
            <div className="background-gradient hidden md:flex  p-6  flex-col justify-center items-center text-white absolute top-0 bottom-0 right-0 left-0 group-hover:opacity-0 transition ">
              <IcomoonReact
                className="fill-current"
                iconSet={iconSet}
                // color="#000"
                size={75}
                icon={value.icon}
              />
              <p
                className="text-lg mt-4 leading-loose"
                style={{ lineHeight: "2 " }}>
                {value.title}
              </p>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <GradientImage image={WhyData.backgroundImage}>
        <Container className="py-48 relative z-10 ">
          <div className="flex justify-center">
            <SectionTitle
              title={WhyData.title}
              colorClass="text-white"
              className="items-center text-center"
            />
          </div>
          <WhyUsCarousel galleryItems={this.galleryItems} />
        </Container>
      </GradientImage>
    );
  }
}
