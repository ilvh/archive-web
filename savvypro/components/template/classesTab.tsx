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
import { Modal } from 'antd'
import QRCodeModal from '../elements/QRCodeModal'

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
export interface TemplateClassesTabData {
  type: "TemplateClassesTab";
  data: TemplateClassesTabProps;
}
export class TemplateClassesTab extends Component<TemplateClassesTabProps> {
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
  } = {
    activeIndex: 0,
    showModal: false,
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
        <QRCodeModal 
          visible={this.state.showModal}
          onCancel={this.hideModal}
        />
        <TemplatePadding>
          <SectionTitle className="flex flex-col items-center" {...heading} />
          <Tab
            tabs={tabs.map((value, i) => {
              return (
                {
                  name: value.name,
                  el: (
                    <div
                      className=""
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
                                  className={`flex flex-col md:flex-row items-center  px-8 py-4 ${
                                    i + 1 !== card.classes.length
                                      ? "border-b-1 border-gray-200"
                                      : ""
                                  }`}>
                                  <div className="md:w-1/4 text-lg flex items-center">
                                    {name}
                                  </div>
                                  <div className="md:w-1/4 text-sm text-center md:text-left">
                                    {address && <div className="py-2">
                                      <span className="text-green-500">地址：</span>
                                      {address}
                                    </div>}
                                    <div className="py-2">
                                      <span className="text-green-500">
                                        开课时间：
                                      </span>
                                      {date.getFullYear()}年
                                      {date.getMonth() + 1}月
                                      {date.getDate()}日
                                    </div>
                                  </div>
                                  <div className="md:w-1/4 text-lg flex items-center" style={{ width: 151, height: 20, borderRadius: 4, backgroundColor: '#ff7676', color: '#FFFFFF', paddingLeft: 10, fontSize: 14, marginLeft: 'auto' }}>
                                    早报名，惊喜优惠！
                                  </div>
                                  <div className="md:w-1/4 flex justify-end items-center">
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
                }
              )
            })}
          />
        </TemplatePadding>
      </div>
    );
  }
}
