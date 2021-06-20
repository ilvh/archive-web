import { Component } from "react";
import HomeData from "../data";
const PlatformData = HomeData.Platform;
import Container from "../../../components/layout/container";
import { SectionTitle } from "../../../components/layout/section-title";
import Image, { ImageProps } from "../../../components/elements/image";
import { IconList } from "../../../types";
import iconSet from "../../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import { Button } from "../../../components/elements/button";
import { clips } from "./clips";
import { Parallax } from "react-scroll-parallax";
export interface HomePlatformData {
  title: string;
  subTitle: string;
  description: string;
  platformImages: {
    1: ImageProps;
    2: ImageProps;
  };
  iconList: {
    icon: IconList;
    text: string;
  }[];
}

function switchWidth(num: number) {
  switch (num) {
    case 1:
      return "w-full";
    case 2:
      return "w-1/2";
    case 3:
      return "w-1/3";
    case 4:
      return "w-1/4";
    case 5:
      return "w-1/5";
  }
}

export class HomePlatform extends Component {
  render() {
    return (
      <div className="py-36 text-black relative">
        <Container className="py-0  z-10">
          <div className=" mb-24 md:mb-0 md:w-1/2 relative md:absolute md:left-0  md:top-36 md:bottom-36 z-0 ">
            <div className="mr-12 md:mr-16 relative">
              <div className="relative md:absolute top-0 left-0 right-12 md:right-16 w-full mr-12 md:mr-0">
                <Image
                  {...PlatformData.platformImages[1]}
                  className="rounded-lg shadow-custom mr-auto"
                  style={{
                    maxHeight: "100%",
                    maxWidth: "100%"
                  }}
                />
                <div className="absolute w-full h-full top-14 md:top-16 left-12 md:left-16 right-0 md:bottom-0 ">
                  <Image
                    {...PlatformData.platformImages[2]}
                    className="rounded-lg shadow-custom ml-auto mt-auto absolute top-0 left-0 w-full h-full object-cover"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%"
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 ml-auto md:pl-1/7">
            <SectionTitle
              title={PlatformData.title}
              subTitle={PlatformData.subTitle}
              description={PlatformData.description}
            />
            <svg className="opacity-0 h-0 w-0 m-0 p-0">
              <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#96E8C9" />
                {/* <stop offset="50%" stop-color="black" stop-opacity="0" /> */}
                <stop offset="100%" stopColor="#54B78A" />
              </linearGradient>
            </svg>
            <div className="flex">
              {PlatformData.iconList.map((value, i) => (
                <div
                  key={i}
                  className={`${switchWidth(
                    PlatformData.iconList.length
                  )} flex flex-col items-center`}
                  style={{
                    fill: "url(#Gradient2)"
                  }}>
                  <IcomoonReact
                    className=" background-gradient-green text-use-gradient mb-2"
                    iconSet={iconSet}
                    // color="#000"
                    size={35}
                    icon={value.icon}
                  />
                  <p className="text-sm text-gray-700">{value.text}</p>
                </div>
              ))}
            </div>
            <Button onClick={() => {
              window.location.href = "https://lms.savvyuni.com"
            }} className="mt-6">进入我的平台</Button>
          </div>
        </Container>
        <Parallax
          y={[-40, 40]}
          tagOuter="figure"
          className="absolute"
          styleOuter={{ left: "4%", top: "10%" }}>
          <Image {...clips[1]} />
        </Parallax>
        <Parallax
          y={[-70, 70]}
          tagOuter="figure"
          className="absolute"
          styleOuter={{ right: "5%", bottom: "22%" }}>
          <Image {...clips[2]} style={{ transform: "scale(1.6)" }} />
        </Parallax>
      </div>
    );
  }
}
