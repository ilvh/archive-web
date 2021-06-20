import { Component } from "react";
import Container from "../../../components/layout/container";
import { SectionTitle } from "../../../components/layout/section-title";
import HomeData from "../data";
import Image, { ImageProps } from "../../../components/elements/image";
import { HomeBannerCarousel } from "./carousel";
const BannerData = HomeData.Banner;
import { Button } from "../../../components/elements/button";
import { Lightbox } from "react-modal-image";
import QRCodeModal from '../../../components/elements/QRCodeModal'

export interface HomeBannerData {
  slides: {
    image: ImageProps;
    title: string;
    description: string;
    action: string;
  }[];
}
export class HomeBanner extends Component {
  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  state: {
    activeIndex: number;
    showModal: boolean;
  } = {
    activeIndex: 0,
    showModal: false,
  };

  galleryItems = () => {
    const cmsBanners = this.props.banners;
    let link;
    let cmsBannerInfo = {};
    for (const banner of cmsBanners) {
      if (banner.program_id) {
        link = `./programs/${banner.program.name}`;
        const startAt = new Date(banner.program);
        const month = startAt.getMonth() + 1;
        const day = startAt.getDate();
        const year = startAt.getFullYear();
        const price = banner.program.price;
        const discountedPrice = banner.program.promotion_price;
        cmsBannerInfo = {
          courseDetails: banner.program.label,
          dateAndPlace: `美东时间${year}年${month}月${day}日开课  | 线上`,
          price,
          discountedPrice
        }
      } else if (banner.course_id) {
        link = `./courses/${banner.course.name}`;
        const startAt = new Date(banner.course.start_at);
        const month = startAt.getMonth() + 1;
        const day = startAt.getDate();
        const year = startAt.getFullYear();
        const price = banner.course.price;
        const discountedPrice = banner.course.promotion_price;

        cmsBannerInfo = {
          courseDetails: banner.course.label,
          dateAndPlace: `美东时间${year}年${month}月${day}日开课  | 线上`,
          price,
          discountedPrice
        }
      }
      if (banner.is_online) {
         BannerData.slides.push({
          image: {
            webp: {
              1: banner.display_url,
              2: banner.display_url,
            },
            jpeg: {
              1: `${banner.display_url}?resize&size=1500`,
              2: `${banner.display_url}?resize&size=2500`
            }
          },
          title: banner.title,
          description: banner.subtitle,
          link: banner.course || banner.program ? link : null,
          cmsBannerInfo,
         })
      }
    }
    return BannerData.slides.map((value, index) => {
      let className4Text = "flex flex-col justify-center items-start h-full text-white"
      if (value.bannerInfo) className4Text = "flex mb-4 justify-center items-center h-full text-white overflow-hidden"
      return (
        <div
          key={index}
          className="bg-black  relative"
          style={{ height: "700px" }}>
          <Image
            {...value.image}
            className="absolute top-0 left-0 right-0 bottom-0 h-full w-full object-cover opacity-100"
          />
          <div
            className="absolute top-0 left-0 right-0 bottom-0"
            style={{ background: "rgba(0,0,0,0.6)" }}>
            <Container className={className4Text}>
              <div className={value.bannerInfo ? 'md:w-1/2' : ''} style={{ display: 'inline-block', marginTop: !value.bannerInfo ? 150 : '' }}>
                <h1 className="font-semibold text-5xl mb-4 text-white">{value.title}</h1>
                <h3
                  className="font-semibold text-base mb-7 text-white"
                  style={{ maxWidth: "555px", lineHeight: "1.8" }}>
                  {value.description}
                </h3>
                {value.action && <Button type="white" onClick={() => { window.location.href = value.action.link }}>{value.action.text}</Button>}
              </div>
              {value.bannerInfo && <div className="justify-center md:w-1/2" style={{ backgroundColor: '#000000', background: 'rgba(0, 0, 0, 0.6)', boxShadow: '-10px 0px #ff7676', borderRadius: 10, display: 'inline', minHeight: '270px', minWidth: '530px' }}>
              <div className="text-2xl font-medium transition text-white justify-center" style={{ fontSize: 24, color: '#FFFFFF', marginLeft: '10%', marginTop: 20 }}>
                <div className="flex mb-4">
                  <div className="w-3/5">{value.bannerInfo.bannerTitle}</div>
                  {value.bannerInfo.chatBubble && <div className="w-1/5" style={{
                    backgroundColor: '#ff7676',
                    marginTop: 5,
                    borderRadius: 5,
                    width: '130px',
                    height: '25px',
                    color: '#ffffff',
                    textAlign: 'center',
                    fontSize: 13,
                    paddingTop: 2,
                    verticalAlign: 'middle',
                  }}>
                  {value.bannerInfo.chatBubble}</div>}
                </div>
                <hr align="left" style={{ border: '1px solid', opacity: 0.3, width: '90%' }} />
                <div style={{ fontSize: 18, marginTop: 15 }}>{value.bannerInfo.courseDetails}</div>
                <div style={{ fontSize: 14, marginTop: 15, color: '#ffd855' }}>{value.bannerInfo.dateAndPlace}</div>
                <div style={{ fontSize: 14, marginTop: 15 }}>价格：<span style={{ fontSize: 28, letterSpacing: 2 }}><span style={{ textDecoration: value.bannerInfo.discountedPrice ? 'line-through' : '' }}>${value.bannerInfo.price}</span>{value.bannerInfo.discountedPrice && <span style={{ color: '#ff7676', textDecoration: '', marginLeft: 5 }}>${value.bannerInfo.discountedPrice}</span>}</span>{value.bannerInfo.extraInfo}</div>
                <div style={{ marginTop: 15 }}><Button onClick={this.showModal} value="bannerInfo">现在报名</Button><span style={{ marginLeft: 20, fontSize: 21, color: '#ff7676' }}>{value.bannerInfo.buttonInfo}</span></div>
              </div>
              </div>}

              {value.link && <div className="justify-end md:w-1/2" style={{ backgroundColor: '#000000', background: 'rgba(0, 0, 0, 0.6)', boxShadow: '-10px 0px #ff7676', borderRadius: 10, display: 'inline', minHeight: '270px', minWidth: '530px', marginLeft: '60%', marginTop: '-30%' }}>
              <div className="text-2xl font-medium transition text-white justify-center" style={{ fontSize: 24, color: '#FFFFFF', marginLeft: '10%', marginTop: 20 }}>
                <div className="flex mb-4">
                  <div className="w-3/5">热血报名中🔥</div>
                  <div className="w-1/5" style={{
                    backgroundColor: '#ff7676',
                    marginTop: 5,
                    borderRadius: 5,
                    width: '130px',
                    height: '25px',
                    color: '#ffffff',
                    textAlign: 'center',
                    fontSize: 13,
                    paddingTop: 2,
                    verticalAlign: 'middle',
                  }}>
                  早报名，惊喜优惠</div>
                </div>
                <hr align="left" style={{ border: '1px solid', opacity: 0.3, width: '90%' }} />
                <div style={{ fontSize: 18, marginTop: 15 }}>{value.cmsBannerInfo.courseDetails}</div>
                <div style={{ fontSize: 14, marginTop: 15, color: '#ffd855' }}>{value.cmsBannerInfo.dateAndPlace}</div>
                <div style={{ fontSize: 14, marginTop: 15 }}>价格：<span style={{ fontSize: 28, letterSpacing: 2 }}><span style={{ textDecoration: value.cmsBannerInfo.discountedPrice ? 'line-through' : '' }}>${value.cmsBannerInfo.price}</span>{value.cmsBannerInfo.discountedPrice && <span style={{ color: '#ff7676', textDecoration: '', marginLeft: 5 }}>${value.cmsBannerInfo.discountedPrice}</span>}</span>（开课后6天内无条件退换课）</div>
                <div style={{ marginTop: 15 }}><Button onClick={() => {window.location.href = value.link}} value="bannerInfo">查看详情</Button><span style={{ marginLeft: 20, fontSize: 21, color: '#ff7676' }}>惊喜价！不容错过！</span></div>
              </div>
            </div>}
            </Container>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="" style={{ height: "750px" }}>
        <HomeBannerCarousel galleryItems={this.galleryItems} />
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
      </div>
    );
  }
}
