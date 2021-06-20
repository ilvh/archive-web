import React, { Component } from "react";
import Image from "../../elements/image/image";
import { Button } from "../../elements/button";
import { SectionTitle } from "../section-title";
import Container from "../container";
import { withRouter } from "next/router";
import { Lightbox } from "react-modal-image";
import { Modal } from 'antd';
import QRCodeModal from '../../elements/QRCodeModal'

const BannerImage = {
  webp: {
    1: require("./questions-background-desktop.png?webp"),
    2: require("./questions-background-desktop.png?webp")
  },
  png: {
    1: require("./questions-background-desktop.png?resize&size=1500"),
    2: require("./questions-background-desktop.png?resize&size=2200")
  }
};

const BannerImageMobile = {
  webp: {
    1: require("./questions-background-mobile.png?webp"),
    2: require("./questions-background-mobile.png?webp")
  },
  png: {
    1: require("./questions-background-mobile.png?resize&size=500"),
    2: require("./questions-background-mobile.png?resize&size=700")
  }
};
class TheFooterQuestionsBefore extends Component {
  state = {
    showModal: false
  }
  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const router = (this.props as any).router;

    return (
      <div>
        <QRCodeModal 
          visible={this.state.showModal}
          onCancel={this.hideModal}
        />
        <Container
          className={`pb-0 ${router.pathname === "/" ? "pt-36" : "pt-8"}`}>
          <SectionTitle
            title="对课程有$$疑问?"
            description="联系小助手，了解更多课程详情，获取更多课程优惠信息"
            className="text-center items-center">
            <Button onClick={this.showModal}>联系我们</Button>
          </SectionTitle>
        </Container>

        <Image className="w-full hidden md:block" {...BannerImage} />
        <Image className="w-full  md:hidden" {...BannerImageMobile} />
      </div>
    );
  }
}

export const TheFooterQuestions = withRouter(TheFooterQuestionsBefore);
