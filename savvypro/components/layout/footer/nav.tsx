import TheCopyright from "./copyright";

import React, { Component } from "react";
import axios from 'axios'
import { SocialIcons } from "../../../types";
import IcomoonReact, { iconList } from "icomoon-react";
import iconSet from "../../../../core/selection.json";
import Container from "../container";

import Link from "next/link";
import Image from "../../elements/image/image";
import { programs as programList } from "../../../screens/programs/data";

export const programLinks = programList.map(program => {
  return {
    text: program.name,
    href: `/program?id=${program.id}`,
    as: `/programs/${program.id}`,
    icon: program.icon
  };
});
// TODO: NEXT LINK FOR NAVIGATION
export class TheFooterNavTitle extends Component<{
  text: string;
  className?: string;
}> {
  render() {
    return (
      <h3
        className={`text-sm text-gray-700 mb-4 ${
          this.props.className ? this.props.className : ""
        }`}>
        {this.props.text}
      </h3>
    );
  }
}

const links: {
  title: string;
  links: { text: string; href: string }[];
}[] = [
  {
    title: "关于我们",
    links: [
      // { text: "我们的故事", href: "#" },
      // { text: "加入我们", href: "#" },
      { text: "联系我们", href: "/contactus" },
      // { text: "媒体报道", href: "#" }
    ]
  },
  {
    title: "网站导航",
    links: [
      { text: "所有课程", href: "/programs" },
      // { text: "讲座活动", href: "#" },
      // { text: "金融学院", href: "#" }
    ]
  }
];

export class TheFooterNav extends Component {
  state = { 
    email: "",
    qrCodeImage: {
      webp: {
        1: require("../../../static/pages/contact/savvypro-cs1.png"),
        2: require("../../../static/pages/contact/savvypro-cs1.png")
      },
      png: {
        1: require("../../../static/pages/contact/savvypro-cs1.png"),
        2: require("../../../static/pages/contact/savvypro-cs1.png")
      }
    },
    wechatImage: {
      webp: {
        1: require("../../../static/pages/contact/savvypro.png"),
        2: require("../../../static/pages/contact/savvypro.png")
      },
      png: {
        1: require("../../../static/pages/contact/savvypro.png"),
        2: require("../../../static/pages/contact/savvypro.png")
      }
    }
  };
  constructor(props: any) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  async componentDidMount(){
    const res = await axios.post('https://api.mingdao.com/v2/open/worksheet/getFilterRows',{
      appKey:"29c2514935492a67",
      sign:"MmRkNTFiODZmZWJkYzE3ZDE3YTBiYjFhYjIxNDUyY2VlYWZhZWE4OTJiOTc0NzkwOWI2NTk5MTRmY2FlM2ZhZQ==",
      worksheetId:"5ffe1bd7803536a1ae447728",
      viewId: "5ffe1bd8803536a1ae44772c",
    })
    
    if(res.data.success){
      const data = res.data.data.rows
      let mainQrcode = '', csQrcode = ''
      let data1 = data.find(row=>row.title.includes('公众号'))
      let data2 = data.find(row=>row.title.includes('客服'))
      if(data1){
        if(JSON.parse(data1.src) && JSON.parse(data1.src)[0]){
          mainQrcode = JSON.parse(data1.src)[0].original_file_full_path
        }
      }
      if(data2){
        if(JSON.parse(data2.src) && JSON.parse(data2.src)[0]){
          csQrcode = JSON.parse(data2.src)[0].original_file_full_path
        }
      }
      this.setState({
        qrCodeImage:{
          webp: {
            1: csQrcode,
            2: csQrcode,
          },
          png: {
            1: csQrcode,
            2: csQrcode,
          }
        },
        wechatImage: {
          webp: {
            1: mainQrcode,
            2: mainQrcode,
          },
          png: {
            1: mainQrcode,
            2: mainQrcode,
          }
        }
      })
    }
    
  }
  handleChange(event: any) {
    this.setState({ email: event.target.value });
  }
  handleSubmit() {}
  render() {
    return (
      <div>
        <Container className="py-24 sm:flex flex-wrap text-xs text-gray-600">
          <div className="sm:w-1/2 md:w-5/12 sm:pr-1/12">
            <TheFooterNavTitle text="关于SavvyPro" />
            <p className=" leading-custom">
            SavvyPro成立于2015年，作为来自北美的终身学习平台，我们致力于将世界级的体验带给下一代金融从业者，把打造北美职场精英作为目标，希望帮助万千学子快速精准地找到自己合适的职业，实现自己的职场梦。
            </p>
            {/* <TheFooterNavTitle className="mt-12" text="订阅Newsletter" />
            <form
              onSubmit={this.handleSubmit}
              className="bg-gray-100 rounded-full flex">
              <input
                type="text"
                className="w-full bg-transparent py-2 text-sm px-5"
                value={this.state.email}
                placeholder="email"
                onChange={this.handleChange}
              />
              <input
                type="submit"
                value="订阅"
                className="bg-transparent py-2 text-sm px-5 bg-yellow-500 rounded-full text-black cursor-pointer hover:opacity-75 transition"
              />
            </form> */}
          </div>
          <div className="mt-12 sm:mt-0 sm:w-1/2 md:w-1/3 flex">
            <div className="w-1/2">
              <TheFooterNavTitle text="课程类目" />
              {programLinks.map((value, i) => (
                <div key={`theFooterNavCourse${i}`} className="my-2">
                  <Link href={value.href} as={value.as}>
                    <a className="hover:text-yellow-700 transition">
                      {value.text}
                    </a>
                  </Link>
                </div>
              ))}
            </div>
            <div className="w-1/2">
              {links.map((value, i) => (
                <div key={`TheFooterNavLinks${i}`} className="mb-5">
                  <TheFooterNavTitle text={value.title} />
                  {value.links.map((value, i2) => (
                    <div key={`TheFooterNavLinks${i}-${i2}`} className="my-2">
                      <Link href={value.href}>
                        <a className="hover:text-yellow-700 transition">
                          {value.text}
                        </a>
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className=" w-full md:w-1/4 ">
            <div className="">
              <TheFooterNavTitle text="联系方式" className="mt-12 md:mt-0" />
              <p className="mb-5">
                地址：Unit 315, 720 Spadina Ave 
                <br /> Toronto, ON M5S 2T9
              </p>
              <p className="mb-5">邮箱: info@savvypro.ca</p>
              <p className="mb-5">周一至周日 2pm-10pm</p>
            </div>
            <div className="w-1/2 md:w-full flex mt-12">
              <div className="w-1/2 pr-5  md:pr-2 lg:pr-5">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-full" style={{ maxWidth: "90px" }}>
                    <Image className="   w-full" {...this.state.wechatImage} />
                  </div>
                  <div className="text-xs text-gray-500 py-2">关注公众号</div>
                </div>
              </div>
              <div className="w-1/2 pr-5  md:pr-2 lg:pr-5">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-full" style={{ maxWidth: "90px" }}>
                    <Image className="   w-full" {...this.state.qrCodeImage} />
                  </div>
                  <div className="text-xs text-gray-500 py-2">关注客服</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
