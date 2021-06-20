import { Component } from "react";
import { TemplateInfoCard, TemplateInfoCardProps } from "../elements/infoCard";
import Container from "../layout/container";
import { Bullet } from "../elements/bullet";
import { Button } from "../elements/button";
import { TemplatePadding, SectionTitle } from "./core";
import { Tab } from "../layout/tab";
import { Lightbox } from "react-modal-image";
import { Player, BigPlayButton } from 'video-react';

import Image, { ImageProps } from "../elements/image";
import iconSet from "../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import { VideoConsumer } from "../video-banner";
import {
  GradientCardPercProps,
  GradientCardPerc
} from "../elements/gradientCardPerc";
interface Info {
  big: string;
  small: string;
}
export interface InfoSectionWithStatsProps {
  heading: {
    subTitle?: string;
    title?: string;
    description?: string;
  };
  body: string | string[];
  video: {
    cover: ImageProps;
    videoId: string;
    caption: string;
    text: string;
  };
  ban: {
    card: GradientCardPercProps;
    infos: Info[];
  };
  cards: {
    title: string;
    body: string[];
  };
  extraInformation: {
    title: string;
    body: string[];
  };
  cardTitle: String,
  jobDetails: {
    title: string;
    jobs: string[];
    example: object;
    redirect: string[];
  }
}
const bannerImage: ImageProps = {
  webp: {
    1: require("../../static/pages/courses/hands.png?webp"),
    2: require("../../static/pages/courses/hands.png?webp")
  },
  png: {
    1: require("../../static/pages/courses/hands.png?resize&size=1500"),
    2: require("../../static/pages/courses/hands.png?resize&size=2000")
  }
};
const wechatImg: ImageProps = {
  webp: {
    1: require("../../static/pages/contact/savvy-pro@3x.png"),
    2: require("../../static/pages/contact/savvy-pro@3x.png")
  },
  png: {
    1: require("../../static/pages/contact/savvy-pro@3x.png?resize&size=1500"),
    2: require("../../static/pages/contact/savvy-pro@3x.png?resize&size=2000")
  }
}

export interface TemplateInfoSectionWithStatsData {
  type: "TemplateInfoSectionWithStats";
  data: InfoSectionWithStatsProps;
}
export class TemplateInfoSectionWithStats extends Component<
  InfoSectionWithStatsProps
> {
  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  split(text: string) {
    let el: JSX.Element;
    let [white, blue, white2] = text.split('$$', 3);
    if (blue) {
      el = (
        <span>
          <span>{white}</span>
          {
            blue === '联系客服' ? 
            (<button className="text-green-500" onClick={this.showModal}>{blue}</button>)
            :
            (<span className="text-green-500">{blue}</span>)
          }
          {white2 && <span>{white2}</span>}
        </span>
      );
    } else {
      el = <span>{white}</span>;
    }
    return el;
  }
  state: {
    activeIndex: number;
    showModal: boolean;
  } = {
    activeIndex: 0,
    showModal: false,
  };

  render() {
    const { heading, body, video, ban, cards, extraInformation, cardTitle, jobDetails } = this.props;

    const { activeIndex } = this.state;

    return (
      <div>
        {
         this.state.showModal && (
       <Lightbox
         hideDownload
         small={"../../static/pages/contact/contactMe.png"}
         medium={"../../static/pages/contact/contactMe.png"}
         large={"../../static/pages/contact/contactMe.png"}
         onClose={this.hideModal}
      />
        )
      }
        <TemplatePadding withCtn={false}>
          <div className=" text-gray-700">
            <Container className="py-0">
              <SectionTitle
                className="flex flex-col items-center"
                title={heading.title}
              />
              <div className="flex flex-col lg:flex-row lg:-mx-4">
                <div className="lg:w-1/2 lg:px-4 order-2 lg:order-none">
                  <div className="text-2xl font-medium mb-8 text-center lg:text-left">
                    {this.split(heading.subTitle || "")}
                  </div>
                  <div>
                    {Array.isArray(body)
                      ? body.map((value, i) => (
                          <Bullet key={i} className="text-sm " text={value} />
                        ))
                      : body}
                  </div>
                </div>
                
                <div className="lg:w-1/2 lg:px-4 order-1 lg:order-none mb-12 lg:mb-0">
                  <Player
                    playsInline
                    poster="../../../static/pages/courses/cfa/videoCover.jpg"
                    src={video.videoId}
                  >
                    <BigPlayButton position="center" />
                  </Player>
                  {/* <VideoConsumer>
                    {ctx => {
                      let { openBanner } = ctx;

                      return (
                        <div
                          className="bg-black rounded-lg h-60 lg:h-70 relative overflow-hidden cursor-pointer"
                          onClick={() => openBanner(video.videoId)}>
                          <Image
                            className="absolute left-0 top-0 h-full w-full object-cover opacity-75"
                            {...video.cover}
                          />
                          <div className="absolute h-full w-full flex items-center justify-center text-white text-shadow">
                            <IcomoonReact
                              className="fill-current mr-3"
                              iconSet={iconSet}
                              // color="#000"
                              size={30}
                              icon="playbtn"
                            />
                            {video.text}
                          </div>
                        </div>
                      );
                    }}
                  </VideoConsumer> */}
                  <div className="text-sm text-center lg:text-right mt-4">
                    {this.split(video.caption)}
                  </div>
                </div>
              </div>

              {extraInformation && <div className="flex flex-col lg:flex-row lg:-mx-4" style={{ marginTop: '7%' }}>
                <div className="w-full lg:px-4 order-2 lg:order-none">
                  <div className="text-2xl font-medium mb-8 text-center lg:text-left">
                    {this.split(extraInformation.title || "")}
                  </div>
                  <div>
                    {Array.isArray(extraInformation.body)
                      ? extraInformation.body.map((value, i) => (
                          <Bullet key={i} className="text-sm " text={value} />
                        ))
                      : <div className="text-sm text-gray-700 leading-loose">{extraInformation.body}</div>}
                  </div>
                </div>
              </div>}

              {cardTitle && <div className="text-2xl font-medium mb-8 text-center" style={{ marginTop: '7%' }}>
                {this.split(cardTitle || "")}
              </div>}

              {cards && cards.length > 0 && <div className="md:flex md:-mx-3" style={{ marginTop: !cardTitle ? '7%' : '' }}>
                {cards.map((value, i) => {
                  let cardClassName = "md:w-1/2 md:px-2"
                  if (cards.length === 3) cardClassName = "md:w-1/3 md:px-3"
                  return (
                    <div key={i} className={cardClassName} style={{ marginBottom: 20}}>
                      <div className="rounded-lg overflow-auto shadow-custom3 h-full break-all">
                        <div className=" background-gradient text-white text-2xl text-center py-4">
                          {value.title}
                        </div>
                        <div className="text-sm text-gray-700 p-5 leading-loose">
                          {Array.isArray(value.body)
                          ? value.body.map((elem, i) => (
                              <Bullet key={i} className="text-sm " text={elem} />
                            ))
                          : <div className="flex">{value.body}</div>}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>}


              {/* {jobDetails &&  <div
                className={`flex flex-col md:flex-row items-center  px-8 py-4`} style={{ marginTop: '7%', borderRadius: '10px', boxShadow: '0 1px 5px 0' }}>
                <div className="md:w-2/4 text-lg flex flex-col items-center">
                  <div className="text-green-500 w-full" style={{ fontSize: 12 }}>适合职位:</div>
                  <div className="flex mb-2 w-auto">{Array.isArray(jobDetails.jobs) ? jobDetails.jobs.map((elem, i) =>
                    (<Bullet
                      key={i}
                      text={elem}
                      className="text-gray-700 text-sm md:w-1/2 flex"
                    />)) : jobDetails.jobs}
                  </div>
                </div>
                <div className="md:w-1/4 text-sm text-center flex flex-col md:text-left py-4">
                  <div><span className="text-green-500">年薪区间：</span><span>{jobDetails.example.range}</span></div>
                  <div><span className="text-green-500">发展空间：</span><span>{jobDetails.example.possibilities}</span></div>
                  <div><span className="text-green-500">相关经验：</span><span>{jobDetails.example.skills}</span></div>
                </div>
                <div className="md:w-1/4 flex justify-end items-center">
                  {Array.isArray(jobDetails.redirect) ? jobDetails.redirect.map((elem, j) =>
                    ( 
                      <div><Button type="white" className="text-black-500" onClick={() => {
                        window.location.href = elem.link
                      }}>查看{elem.title}课程</Button></div>
                    )): jobDetails.redirect}
                </div>
              </div>} */}
            </Container>

            <div className=" background-gradient-dark relative py-16 mt-60 lg:mt-40" style={!ban.card ? { marginTop: 70 } : {}}>
              <Image
                {...bannerImage}
                className="absolute w-full h-full top-0 left-0 object-cover opacity-15"
              />
              <Container className="py-0 flex flex-col lg:flex-row relative">
                {ban.card && <div className="lg:w-2/6 relative" >
                  <div className="absolute left-0 bottom-0 w-full flex justify-center">
                    <GradientCardPerc {...ban.card} />
                  </div>
                </div>}
                <div className={ban.card ? "lg:w-4/6 flex flex-wrap" : "w-full flex flex-wrap"} >
                  {ban.infos.map((value, i) => {
                    let infoClassName = "mt-12 lg:mt-0 w-1/2 sm:w-1/4 text-white text-center"
                    if (ban.infos.length === 3) infoClassName = "mt-12 lg:mt-0 w-1/2 sm:w-1/3 text-white text-center"
                    if (i === ban.infos.length - 1) {
                      return (
                        <div
                          key={i}
                          className={infoClassName}
                          style={{ margin: 'auto', marginTop: 30 }}
                        >
                          <div className="text-5xl font-medium">{value.big}</div>
                          <div className="text-base">{value.small}</div>
                        </div>
                      )
                    }
                    return (
                      <div
                        key={i}
                        className={infoClassName}
                      >
                        <div className="text-5xl font-medium">{value.big}</div>
                        <div className="text-base">{value.small}</div>
                      </div>
                    )}
                    
                  )}
                </div>
                  )
                }
                
              </Container>
            </div>
          </div>
        </TemplatePadding>
      </div>
    );
  }
}
