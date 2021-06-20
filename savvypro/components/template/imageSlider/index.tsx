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
import Image, { ImageProps, PngProps, JpegProps } from "../../elements/image";
import Carousel, { Modal, ModalGateway } from "react-images";
import "./modal.css";

export interface TemplateFullImageSliderProps {
  heading: {
    subTitle?: string;
    title?: string;
    description?: string;
  };
  description?: string;

  cards: ImageProps[];
}
export interface TemplateFullImageSliderData {
  type: "TemplateFullImageSlider";
  data: TemplateFullImageSliderProps;
}

export class TemplateFullImageSlider extends Component<
  TemplateFullImageSliderProps
> {
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
  galleryItems = () => {
    const { cards } = this.props;
    return cards.map((value, i) => (
      <div key={i} className="p-2">
        <div
          className=" rounded-lg overflow-hidden shadow-lg h-64 bg-black relative group cursor-pointer"
          onClick={() => this.toggleModal(i)}>
          <Image
            {...value}
            className="absolute top-0 left-0 w-full h-full object-cover opacity-90 group-hover:opacity-50 transition "
          />
          {/* <div className="absolute top-0 left-0 w-full h-full object-cover opacity-0  " style={{ width:'100%' }}/> */}
        </div>
      </div>
    ));
  };
  state = { 
    modalIsOpen: false,
    index: 0,
    // galleryItems: this.items.map((i) => (<h2 key={i}>{i}</h2>))
  };

  // thumbItem = (item, i) => (
  //   <span key={item} onClick={() => this.Carousel.slideTo(i)}>* </span>
  // )

  toggleModal = (index) => {
    this.setState(state => ({
      modalIsOpen: !this.state.modalIsOpen,
      index,
    }));
  };
  render() {
    const { heading, description, cards } = this.props;
    const { modalIsOpen, index } = this.state;

    return (
      <div className=" relative">
        <TemplatePadding withCtn={false}>
          <Container className="py-0 relative">
            <SectionTitle {...heading} className="flex flex-col items-center" />
            {/* {description ? (
              <div
                className="text-gray-700 text-lg text-center mx-auto"
                style={{ maxWidth: "600px" }}>
                {this.split(description)}
              </div>
            ) : (
              undefined
            )} */}
          </Container>
          <div className="mt-12">
            <CardCarousel galleryItems={this.galleryItems} />
          </div>
          
          <ModalGateway >
            {modalIsOpen ? (
                <Modal
                allowFullscreen={false}
                onClose={this.toggleModal}
                >
                <Carousel
                  // components={{ FooterCaption }}
                  // frameProps={{ autoSize: "height" }}
                  // formatters={{ getAltText }}
                  footer={null}
                  currentIndex={this.state.index}
                  views={cards.map(value => {
                    let src = {};
                    if ((value as PngProps).png) {
                      let png = value as PngProps;
                      src = png.png[2].toString();
                    }
                    if ((value as JpegProps).jpeg) {
                      let png = value as JpegProps;
                      src = png.jpeg[2].toString();
                    }

                    return { src: src, caption: 'SAVVYPRO' };
                  })}
                  styles={
                    {
                      // footer: base => ({
                      //   ...base,
                      //   background: "none !important",
                      //   color: "#666",
                      //   padding: 0,
                      //   paddingTop: 20,
                      //   position: "static",
                      //   "& a": {
                      //     color: "black"
                      //   }
                      // }),
                      // header: base => ({
                      //   ...base,
                      //   background: "none !important",
                      //   padding: 0,
                      //   paddingBottom: 10,
                      //   position: "static"
                      // }),
                      // headerClose: base => ({
                      //   ...base,
                      //   color: "#666",
                      //   ":hover": { color: "#DE350B" }
                      // }),
                      // view: base => ({
                      //   ...base,
                      //   maxHeight: 480,
                      //   overflow: "hidden",
                      //   display: "flex"
                      // }),
                      // img: base => ({
                      //   margin: "auto"
                      // })
                    }
                  }
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </TemplatePadding>
      </div>
    );
  }
}
