import { Component } from "react";
import Image, { ImageProps } from "../elements/image";
import Container from "../layout/container";
import { withRouter } from "next/router";
import Link from "next/link";
import { programs } from "../../screens/programs/data";
import { Courses } from "../../screens/courses/data";
import iconSet from "../../../core/selection.json";
import { Button } from "../elements/button";
import IcomoonReact, { iconList } from "icomoon-react";
import EnrollCountdownTimer from '../elements/EnrollCountdownTimer'
import QRCodeModal from '../elements/QRCodeModal'
import { Modal } from 'antd'

export interface TemplateBannerProps {}
export interface TemplateBannerData {
  type: "TemplateBanner";
  //   data: TemplateBannerProps;
}
const ProgramsImage: ImageProps = {
  webp: {
    1: require("../../static/pages/programs/main.jpg?webp"),
    2: require("../../static/pages/programs/main.jpg?webp")
  },
  jpeg: {
    1: require("../../static/pages/programs/main.jpg?resize&size=1500"),
    2: require("../../static/pages/programs/main.jpg?resize&size=2000")
  }
};
const contactImage: ImageProps = {
  webp: {
    1: require("../../static/pages/contact/contact.jpg?webp"),
    2: require("../../static/pages/contact/contact.jpg?webp")
  },
  jpeg: {
    1: require("../../static/pages/contact/contact.jpg?resize&size=1500"),
    2: require("../../static/pages/contact/contact.jpg?resize&size=2000")
  }
};
const vipImage: ImageProps = {
  webp: {
    1: require("../../static/pages/vip1v1/banner2.jpeg?webp"),
    2: require("../../static/pages/vip1v1/banner2.jpeg?webp")
  },
  jpeg: {
    1: require("../../static/pages/vip1v1/banner2.jpeg?resize&size=1500"),
    2: require("../../static/pages/vip1v1/banner2.jpeg?resize&size=2000")
  }
};

// 火热报名 banner
export class TemplateBannerPre extends Component<TemplateBannerProps> {
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

  render() {
    const router = (this.props as any).router;
    let image: ImageProps | undefined = undefined;
    const backTo = {
      href: "/",
      text: "SavvyPro 首页",
      as: ""
    };
    let name = "";
    let bannerInfo = "";
    let bannerVideo = "";
    let type
    if (router.pathname === "/courses") {
      // TODO: change backto for courses
    } else if (router.pathname === "/program") {
      type = 'program'
      let program = programs.find(pr => pr.id === router.query.id);
      if (program) {
        name = program.name;
        image = program.backgroundImage;
        bannerInfo = program.bannerInfo;
        bannerVideo = program.video ? program.video : ''
      }
      
      
      if (bannerInfo && this.props.bannerInfo && this.props.bannerInfo.lesson) {
        bannerInfo.courseDetails = `${this.props.bannerInfo.program.label} | ${this.props.bannerInfo.lesson.label}`
        const date = new Date(this.props.bannerInfo.lesson.start_at.replace(/ /g, 'T'))
        bannerInfo.dateAndPlace = `加东时间${date.getMonth() + 1}月${date.getDate()}日开课 | ${this.props.bannerInfo.program.location}`
        bannerInfo.discountedPrice = this.props.bannerInfo.program.promotion_price
        bannerInfo.price = this.props.bannerInfo.program.price
      }
    } else if (router.pathname === "/programs") {
      name = "所有课程";
      image = ProgramsImage;
    } else if (router.pathname === "/vip1v1") {
      name = "Vip1对1求职辅导";
      image = vipImage;
    } else if (router.pathname === "/contactus") {
      name = "关于我们";
      image = contactImage;
    } else if (router.pathname === "/course") {
      type = 'course';
      let course = Courses.find(pr => pr.id === router.query.id);
      let program = programs.find(pr => pr.courses.includes(router.query.id));
      if (course) {
        image = course.backgroundImage;
        name = course.name;
        bannerInfo = course.bannerInfo;
        bannerVideo = course.video ? course.video : '';
      }
      if (bannerInfo && this.props.bannerInfo && this.props.bannerInfo.lesson && this.props.bannerInfo.course) {
        bannerInfo.courseDetails = `${this.props.bannerInfo.course.label} `
        const date = new Date(this.props.bannerInfo.lesson.start_at.replace(/ /g, 'T'))
        // bannerInfo.dateAndPlace = `加东时间${date.getMonth() + 1}月${date.getDate()}日开课 | ${this.props.bannerInfo.course.location }`
        bannerInfo.dateAndPlace = `加东时间${date.getMonth() + 1}月${date.getDate()}日开课 | 线上直播+回放视频`

        bannerInfo.discountedPrice = this.props.bannerInfo.course.promotion_price
        bannerInfo.price = this.props.bannerInfo.course.price
      }
      if (program) {
        backTo.href = `/program?id=${program.id}`;
        backTo.as = `/programs/${program.id}`;
        backTo.text = program.name;
      }
    }

    let className4Text = "flex flex-col justify-center items-start h-full text-white"
    if (bannerInfo) className4Text = "flex justify-center items-center h-full text-white"

    let bannerContent = image ? (
      <Image
        {...image}
        className="absolute h-full w-full top-0 left-0 opacity-100 object-cover"
      />
    ) : (
      undefined
    )
    if (bannerVideo) {
      bannerContent = (
        <video
          poster={bannerVideo.poster}
          key={bannerVideo.link}
          playsInline
          autoPlay
          muted
          loop
          className="absolute h-full w-full top-0 left-0 opacity-100 object-cover"
        >
          <source src={bannerVideo.link} type="video/mp4" />
        </video>
      )
    } 

    return (
      <div className="bg-black relative h-full" style={{ height: '80vh', marginBottom: -60 }}>
        {bannerContent}
        <div className="relative h-full">
          <Container className={className4Text}>        
            <div style={{ width: '100%', display: 'inline-block' }}>
              <Link href={backTo.href}>
                <a className={`text-2xl ${name === 'Vip1对1求职辅导' ? 'bg-black hover:bg-transparent':''} font-medium hover:text-yellow-700 transition`}>
                  <IcomoonReact
                    className="fill-current"
                    iconSet={iconSet}
                    size={32}
                    icon="arrow-left"
                  />
                  {backTo.text}
                </a>
              </Link>
              <h1 className={`text-4xl ${name === 'Vip1对1求职辅导' ? 'text-black':'text-white'} font-medium`}>{name}</h1>
            </div>
           
            {bannerInfo && 
            <div 
              className="justify-center" 
              style={
               { position: 'absolute', backgroundColor: '#000000', background: 'rgba(0, 0, 0, 0.6)', boxShadow: '-10px 0px #ff7676', borderRadius: 10, display: 'inline', minHeight: '300px', minWidth: '530px', marginLeft: 400 }
              }
            >
              <div className="text-lg font-medium transition text-white justify-center" style={{ fontSize: 24, color: '#FFFFFF', marginLeft: '10%', marginTop: 20 }}>         
                <div>
                    <div className="flex mb-4">
                      <div className="w-3/5">火热报名</div>
                      {bannerInfo.chatBubble && <div className="w-1/5" style={{
                        backgroundColor: '#ff7676',
                        marginTop: 5,
                        borderRadius: 5,
                        width: '130px',
                        height: '25px',
                        color: '#ffffff',
                        textAlign: 'center',
                        fontSize: 13,
                        paddingTop: 2,
                        overflowX: "hidden",
                        verticalAlign: 'middle',
                      }}>
                      {bannerInfo.chatBubble}</div>}
                    </div>
                    <hr align="left" style={{ border: '1px solid', opacity: 0.3, width: '90%' }} />
                    <div style={{ fontSize: 18, marginTop: 15 }}>
                      {bannerInfo.courseDetails} 
                      <EnrollCountdownTimer endDate={this.props.bannerInfo.lesson.start_at} />
                    </div>
                    <div style={{ fontSize: 14, marginTop: 15, color: '#ffd855' }}>{bannerInfo.dateAndPlace}</div>
                    <div style={{ fontSize: 14, marginTop: 15 }}>价格：<span style={{ fontSize: 28, letterSpacing: 2 }}><span style={{ textDecoration: bannerInfo.discountedPrice ? 'line-through' : '' }}>${bannerInfo.price}</span>{bannerInfo.discountedPrice && <span style={{ color: '#ff7676', textDecoration: '', marginLeft: 5 }}>${bannerInfo.discountedPrice}</span>}</span>{bannerInfo.extraInfo}</div>
                    <div style={{ marginTop: 15 }}><Button onClick={this.showModal} value="bannerInfo">现在报名</Button><span style={{ marginLeft: 20, fontSize: 21, color: '#ff7676' }}>{bannerInfo.buttonInfo}</span></div>
                    {/* this.showModal */}
                </div>         
              </div>
            </div>}
          </Container>
          <QRCodeModal 
            visible={this.state.showModal}
            onCancel={this.hideModal}
          />
        </div>
      </div>
    );
  }
}
export const TemplateBanner = withRouter(TemplateBannerPre);
