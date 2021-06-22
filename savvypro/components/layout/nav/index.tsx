import React, { Component, useContext } from "react";

import Container from "../container";
import iconSet from "../../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import Link from "next/link";
import Image, { ImageProps } from "../../elements/image";
import { NavLink } from "./navLink";
import { SubNav } from "./navSub";
import { coursesOfflineMenu, coursesOnlineMenu } from "./buildLinks";
import { SmallSubNav } from "./smallNavSub";
import { ContextualNav } from "./contextualNav";
const logos: ImageProps[] = [
  {
    webp: {
      1: require("../../../static/global/savvypro_logo_color.png?webp"),
      2: require("../../../static/global/savvypro_logo_color.png?webp")
    },
    png: {
      1: require("../../../static/global/savvypro_logo_color.png?resize&size=150"),
      2: require("../../../static/global/savvypro_logo_color.png?resize&size=250")
    }
  },
  {
    webp: {
      1: require("../../../static/global/savvypro_logo_white.png?webp"),
      2: require("../../../static/global/savvypro_logo_white.png?webp")
    },
    png: {
      1: require("../../../static/global/savvypro_logo_white.png?resize&size=150"),
      2: require("../../../static/global/savvypro_logo_white.png?resize&size=250")
    }
  }
];
export interface LinkRef {
  text: string;
  href: string;
  as?: string;
  icon?: ImageProps;
  parentText?: string;
  children?: LinkRef[];
}
const linkList: LinkRef[] = [
  { href: '/', text: '首页' },
  {
    href: "/programs",
    text: "实战技能提升",
    parentText: "查看全部课程",
    children: coursesOfflineMenu
  },
  {
    href: "/programs",
    text: "证书类保过课程",
    parentText: "查看全部课程",
    children: coursesOnlineMenu
  },
  {
    href: "/vip1v1",
    text: "🔥VIP1对1求职辅导",
  },
  { text: '新闻中心', href: '/news' },
  {
    href: "/aboutus",
    text: "关于我们",
    children: [
      { text: '联系我们', href: '/contactus' },
      { text: "报名咨询", href: "/apply" }
    ]
  }
];

import { TheMobileNavContext } from "./mobile";
import { TheNavContext } from "./navProvider";

class Nav extends Component {
  static contextType = TheNavContext;
  afterResize: NodeJS.Timeout | undefined;

  updateResize = () => {
    if (this.afterResize) clearTimeout(this.afterResize);
    this.checkForCtx();
    this.afterResize = setTimeout(() => {
      this.checkForCtx();
      if (this.afterResize) clearTimeout(this.afterResize);
    }, 200);
  };

  state: {
    scrolling: boolean;
    activeSub: LinkRef | undefined;
    ctx: boolean;
  } = {
    scrolling: false,
    activeSub: undefined,
    ctx: false
  };
  checkForCtx() {
    if (
      this.context.ctxLinks &&
      window.scrollY > 700 &&
      window.innerWidth > 1024
    ) {
      this.setState({ ...this.state, ctx: true });
    } else {
      this.setState({ ...this.state, ctx: false });
    }
  }

  handleScroll = () => {
    this.checkForCtx();
    if (window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({ ...this.state, scrolling: false });
    } else if (window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState({ ...this.state, scrolling: true });
    }
  };
  componentDidMount() {
    this.updateResize();
    window.addEventListener("resize", this.updateResize);
    setTimeout(() => this.handleScroll(), 300);
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.updateResize);
    if (this.afterResize) clearTimeout(this.afterResize);
  }

  toggleSubMenu(links?: LinkRef) {
    if (
      this.state.activeSub &&
      links &&
      links.href === this.state.activeSub.href &&
      links.text === this.state.activeSub.text
    ) {
      this.setState({ ...this.state, activeSub: undefined });
    } else if (links && links.children && links.children.length !== 0) {
      this.setState({ ...this.state, activeSub: links });
    } else {
      this.setState({ ...this.state, activeSub: undefined });
    }
  }

  render() {
    const { activeSub } = this.state;
    return (
      <div>
        <div
          onMouseLeave={() => {
            this.toggleSubMenu();
          }}
          className={`fixed z-20 left-0 right-0 w-full transition border-b-1 border-white ${
            this.state.scrolling || !this.context.startFade
              ? "bg-white-a85 text-gray-700 shadow-md"
              : "bg-transparent text-white"
          }`}
          style={{
            borderBottomColor: "rgba(255,255,255,0.3)",
            transform: this.state.ctx ? "translateY(-100%)" : "translateY(0)"
          }}>
          <Container
            className={`mx-auto flex items-center justify-between py-0 md:py-0`}>
            <div className="lg:w-1/5 py-4">
              <Link href="/">
                <a className="relative inline-block ">
                  <Image
                    className={`text-white transition ${
                      this.state.scrolling || !this.context.startFade
                        ? "opacity-0"
                        : "opacity-100"
                    }`}
                    {...logos[1]}
                    style={{ width: "150px" }}
                  />
                  <Image
                    className={`absolute w-full top-0 transition left-0 ${
                      this.state.scrolling || !this.context.startFade
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    {...logos[0]}
                  />
                </a>
              </Link>
            </div>
            <TheMobileNavContext.Consumer>
              {({ toggle }) => (
                <div
                  className="inline-block lg:hidden"
                  onClick={() => toggle()}>
                  <IcomoonReact
                    className="fill-current cursor-pointer"
                    iconSet={iconSet}
                    // color="#000"
                    size={25}
                    icon="mobilemenu"
                  />
                </div>
              )}
            </TheMobileNavContext.Consumer>
            <div
              className={`w-3/5  justify-center items-center  hidden lg:flex self-stretch`}>
              {linkList.map((value, i) => (
                <div key={i} className="h-full relative">
                  {value.children ? (
                    <span>
                      {activeSub &&
                      activeSub.href === value.href &&
                      activeSub.children &&
                      value.children.filter(link => !!link.children).length ===
                        0 ? (
                        <SmallSubNav links={value.children} />
                      ) : (
                        undefined
                      )}
                      <NavLink
                        iconClassName={
                          this.state.scrolling || !this.context.startFade
                            ? "text-green-500"
                            : ""
                        }
                        text={value.text}
                        activeSub={
                          this.state.activeSub &&
                          this.state.activeSub.href === value.href &&
                          this.state.activeSub.text === value.text
                        }
                        openSubMenu={() => {
                          this.toggleSubMenu(value);
                        }}
                      />
                    </span>
                  ) : (
                    <Link prefetch={true} href={value.href} passHref>
                      <NavLink text={value.text} />
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="lg:w-1/5  justify-end hidden lg:flex ">
              <a
                onClick={() => {
                  window.location.href = "https://lms.savvyuni.com"
                }}
                className={`text-xs flex items-center border-1 border-current rounded-full py-1 px-5 hover:opacity-75 cursor-pointer transition ${
                  this.state.scrolling || !this.context.startFade
                    ? "text-green-500"
                    : ""
                }`}>
                注册/登陆
              </a>
            </div>
          </Container>
          {activeSub &&
          activeSub.children &&
          activeSub.children.filter(link => !!link.children).length !== 0 ? (
            <SubNav link={activeSub as LinkRef} mouseLeave={() => {}} />
          ) : (
            undefined
          )}
        </div>
        <div>
          {this.context.ctxLinks ? (
            <ContextualNav
              links={this.context.ctxLinks}
              style={{
                transform: this.state.ctx
                  ? "translateY(0)"
                  : "translateY(-100%)"
              }}
            />
          ) : (
            undefined
          )}
        </div>
      </div>
    );
  }
}
export { linkList };
export default Nav;
