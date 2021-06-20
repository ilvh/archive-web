import React from "react";
import HomeData from "../data";
import Container from "../../../components/layout/container";

import { SectionTitle } from "../../../components/layout/section-title";
import Image, { ImageProps } from "../../../components/elements/image";
const offerData = HomeData.Offer;
import ProgressCircle from "../../../components/elements/progressCircle";
import OfferCarousel from "./carousel";
import { GradientImage } from "../../../components/layout/gradientImage";
export interface IndexOffer {
  title: string;
  description: string;
  backgroundImage: ImageProps;
  progress: {
    percentage: number;
    title: string;
  }[];
  testimonials: { text: String; course: string; offer: string; by: string }[];
}

class Offer extends React.Component {
  galleryItems() {
    return offerData.testimonials.map((value, index) => {
      return (
        <div className="px-px">
          <div key={index} className="border-1 border-white rounded-lg p-8 ">
            <p className="text-sm leading-loose" style={{ lineHeight: "2 " }}>
              {value.text}
            </p>
            <div className=" bg-white my-3" style={{ height: "1px" }} />
            <p className="text-xs leading-loose mb-2">课程:{value.course}</p>
            <p className="text-xs leading-loose mb-2">Offer:{value.offer}</p>
            <p className="text-xs leading-loose">By:{value.by}</p>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="">
        <GradientImage image={offerData.backgroundImage}>
          <Container className="py-48 relative z-10 lg:flex">
            <div className="lg:w-1/2">
              <SectionTitle
                title={offerData.title}
                description={offerData.description}
                colorClass="text-white"
              />
              <div className="flex justify-between sm:block">
                {offerData.progress.map((value, i) => (
                  <div
                    className="relative inline-block sm:mr-12 "
                    key={`IndexOfferProgress${i}`}
                    style={{}}>
                    <ProgressCircle
                      percentage={value.percentage}
                      style={{
                        width: "160px",
                        height: "160px"
                        // transform: "rotate(45deg)"
                      }}
                    />
                    <div className="absolute w-full h-full flex flex-col justify-center items-center top-0 left-0 text-white ">
                      <div className="text-5xl tracking-normal font-medium leading-tight">
                        {value.percentage}%
                      </div>
                      <div>{value.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="lg:w-5/6 ml-auto">
                <h2 className="text-white text-2xl ml-12 mt-12 md:ml-0 lg:mt-0 lg:ml-0">
                  来自我们学员的反馈
                </h2>
                <OfferCarousel galleryItems={this.galleryItems} />
              </div>
            </div>
          </Container>
        </GradientImage>
      </div>
    );
  }
}

export default Offer;
