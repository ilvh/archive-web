import { Component } from "react";
import { TemplateInfoCard, TemplateInfoCardProps } from "../elements/infoCard";
import Container from "../layout/container";
import { Bullet } from "../elements/bullet";
import { Button } from "../elements/button";
import { TemplatePadding, SectionTitle } from "./core";
import { Tab } from "../layout/tab";
import { Lightbox } from "react-modal-image";

import Image, { ImageProps } from "../elements/image";
import iconSet from "../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import { VideoConsumer } from "../video-banner";
import {
  GradientCardPercProps,
  GradientCardPerc
} from "../elements/gradientCardPerc";
import {
  isMobile,
} from "react-device-detect"; 

export interface TemplateClassesTabProps {
  heading: {
    subTitle?: string;
    title?: string;
    description?: string;
  };
  tabs: {
    name: string;
    cards: {
      title: string;
      classes: {
        name: string;
        address: string;
        date: Date;
      }[];
    }[];
  }[];
}
export interface TemplateClassesTabDataMobile {
  type: "TemplateClassesTab";
  data: TemplateClassesTabProps;
}
export class TemplateClassesTabMobile extends Component<TemplateClassesTabProps> {
  split(text: string) {
    let el: JSX.Element;
    let [white, blue] = text.split(/\$\$(.+)/);
    if (blue) {
      el = (
        <span>
          <span>{white}</span>
          <span className="text-green-500">{blue}</span>
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
    isMobile: boolean;
    msg: string
  } = {
    activeIndex: 0,
    showModal: false,
    isMobile: isMobile,
    msg: '',
  };

  componentDidMount() {
    window.addEventListener("resize", this.checkToClose);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.checkToClose);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isMobile !== this.state.isMobile) {
      this.setState({ msg: `Mobile Model: ${this.state.isMobile}` })
    }
  }

  checkToClose = () => {
    if (window.outerWidth < 1024) {
      this.setState({ isMobile: true })
    } else {
      this.setState({ isMobile: false })
    }
  };

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { tabs, heading } = this.props;
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
          <TemplatePadding>
            <SectionTitle className="flex flex-col items-center" {...heading} />
            <Tab
              isMobile={this.state.isMobile}
              tabs={tabs.map((value, i) => ({
                name: value.name,
                el: (
                  <div
                    className=""
                    key="mobileTab"
                    style={{
                      gridColumnGap: "15px"
                    }}>
                    <div>
                      {value.cards.map((card, i) => (
                        <div
                          key={i}
                          className={`rounded-lg overflow-hidden shadow-custom2 ${
                            i + 1 !== card.classes.length ? "mb-8" : ""
                          }`}>
                          <div className="background-gradient text-white text-center py-4 text-2xl">
                            {card.title}
                          </div>
                          <div className="text-gray-700">
                            {card.classes.map(({ name, address, date }, i) => (
                              <div
                                key={i}
                                className={`flex flex-col md:flex-row items-center px-8 py-4 ${
                                  i + 1 !== card.classes.length
                                    ? "border-b-1 border-gray-200"
                                    : ""
                                }`}>
                                <div className="md:w-1/4 text-lg flex items-center">
                                  {name}
                                </div>
                                <div>
                                  <div style={{ width: 150, height: 21, borderRadius: 4, backgroundColor: 'red', color: '#FFFFFF', paddingLeft: 10, fontSize: 14, margin: 'auto' }}>
                                    早报名，惊喜优惠!
                                  </div>
                                  <div className="py-2">
                                    <span className="text-green-500">
                                      开课时间：
                                    </span>
                                    {date.getFullYear()}年
                                    {date.getMonth() + 1}月
                                    {date.getDate()}日
                                  </div>
                                </div>
                                <div>
                                  <Button onClick={this.showModal}>现在报名</Button>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              }))}
            />
          </TemplatePadding>
        </div>
    );
  }
}
