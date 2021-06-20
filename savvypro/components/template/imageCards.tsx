import { Component } from "react";
import { TemplateInfoCard, TemplateInfoCardProps } from "../elements/infoCard";
import Container from "../layout/container";
import { Bullet } from "../elements/bullet";
import { Button } from "../elements/button";
import { TemplatePadding, SectionTitle } from "./core";
import { Tab } from "../layout/tab";
import { Accordian } from "../elements/accordian";
import { Lightbox } from "react-modal-image";

import DotSeparator from "../elements/dot-separator";
import Image, { ImageProps } from "../elements/image";
import QRCodeModal from '../elements/QRCodeModal'

export interface TemplateImageCardsProps {
  heading: {
    subTitle?: string;
    title?: string;
    description?: string;
  };
  cards: {
    image: ImageProps;
    title: string;
    description: string;
  }[];
}
export interface TemplateImageCardsData {
  type: "TemplateImageCards";
  data: TemplateImageCardsProps;
}

export class TemplateImageCards extends Component<TemplateImageCardsProps> {
  state = { showModal: false }
  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { cards, heading } = this.props;
    return (
      <div>
        {/* {
         this.state.showModal && (
       <Lightbox
         hideDownload
         small={"../../static/pages/contact/contactMe.png"}
         medium={"../../static/pages/contact/contactMe.png"}
         large={"../../static/pages/contact/contactMe.png"}
         onClose={this.hideModal}
      />
        )
      } */}
        <QRCodeModal 
          visible={this.state.showModal}
          onCancel={this.hideModal}
        />
        <TemplatePadding>
          <div className="mb-7">
            <SectionTitle className="flex flex-col items-center" {...heading} />
          </div>
          <div className="md:flex flex-wrap -m-3">
            {cards.map((value, i) => (
              <div key={i} className=" md:w-1/2 lg:w-1/3 p-3">
                <div className="rounded-lg overflow-hidden shadow-custom2 relative bg-black h-full px-4">
                  <Image
                    {...value.image}
                    className="absolute w-full h-full left-0 top-0 object-cover opacity-50"
                  />
                  <div className="relative text-white text-center py-12 flex flex-col items-center">
                    <h4 className="text-base font-black">{value.title}</h4>
                    <div
                      className="inline-flex my-2"
                      style={{ transform: "scale(0.7)" }}>
                      <DotSeparator />
                    </div>
                    <p className="text-sm">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Button onClick={this.showModal}>现在报名</Button>
          </div>
        </TemplatePadding>
      </div>
    );
  }
}
