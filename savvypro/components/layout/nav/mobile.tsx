import React, { Component } from "react";
import { linkList } from "./index";
import Link from "next/link";
import Scroll from "react-scroll";
import iconSet from "../../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import Image, { ImageProps } from "../../elements/image";
const logo: ImageProps = {
  webp: {
    1: require("../../../static/global/savvypro_logo_white.png?webp"),
    2: require("../../../static/global/savvypro_logo_white.png?webp")
  },
  png: {
    1: require("../../../static/global/savvypro_logo_white.png?resize&size=150"),
    2: require("../../../static/global/savvypro_logo_white.png?resize&size=250")
  }
};
const socialMedia = [
  { icon: "youtube-circle", link: "" },
  { icon: "instagram-circle", link: "" },
  { icon: "linkedin-circle", link: "" },
  { icon: "weibo-circle", link: "" }
];
const TheMobileNavContext = React.createContext({
  isOpen: false,
  toggle: () => {}
});
class TheMobileNav extends Component<{
  closed: () => any;
}> {
  state = {
    openTabs: []
  };
  checkToClose = () => {
    if (window.outerWidth > 1024 && this.context.isOpen) {
      this.context.toggle();
    }
  };
  componentDidMount() {
    window.addEventListener("resize", this.checkToClose);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.checkToClose);
  }
  click = e => {
    if (e.target !== this.nv) return;
    if (this.props.closed) this.props.closed();
  };
  runClick() {}
  openTab(tabs: number[]) {
    const { openTabs } = this.state;
    if (openTabs[0] === tabs[0]) {
      this.setState({ ...this.state, openTabs: [] });
      return;
    }
    this.setState({ ...this.state, openTabs: tabs });
  }
  render() {
    const { openTabs } = this.state;
    return (
      <TheMobileNavContext.Consumer>
        {({ toggle }) => (
          <div
            ref={elem => (this.nv = elem)}
            className="fixed z-50 flex flex-col top-0 left-0 right-0 bottom-0 p-10 text-white justify-between bg-black-a90 overflow-y-auto">
            <div>
              <div className="mb-8 flex justify-between items-center">
                <Link href="/">
                  <a onClick={() => toggle()}>
                    <Image {...logo} style={{ height: "50px" }} />
                  </a>
                </Link>
                <div onClick={() => toggle()}>
                  <IcomoonReact
                    className="fill-current cursor-pointer"
                    iconSet={iconSet}
                    // color="#000"
                    size={24}
                    icon="close"
                  />
                </div>
              </div>
              <div className="">
                {linkList.map((value, i) => (
                  <div key={i}>
                    {value.children && value.children.length > 0 ? (
                      [
                        <a
                          onClick={() => this.openTab([i])}
                          className="text-2xl py-3 border-b-1 border-white-a30 flex items-center cursor-pointer">
                          {value.text}
                          <span
                            className="ml-1 inline-flex items-center justify-center transition"
                            style={{
                              transform:
                                openTabs[0] === i ? "rotate(180deg)" : ""
                            }}>
                            <IcomoonReact
                              className="fill-current"
                              iconSet={iconSet}
                              // color="#000"
                              size={24}
                              icon="arrow-down"
                            />
                          </span>
                        </a>,
                        <div
                          className={` py-3 ${
                            openTabs[0] === i ? "" : "hidden"
                          }`}>
                          {value.parentText ? (
                            <div>
                              <Link href={value.href} as={value.as}>
                                <a
                                  onClick={() => toggle()}
                                  className="text-lg py-2 my-2 block cursor-pointer flex items-center">
                                  {value.parentText}
                                  <IcomoonReact
                                    className="fill-current "
                                    iconSet={iconSet}
                                    // color="#000"
                                    size={14}
                                    icon="arrow-right"
                                  />
                                </a>
                              </Link>
                            </div>
                          ) : (
                            undefined
                          )}
                          {value.children.map((value, i) => (
                            <div key={i}>
                              <Link href={value.href} as={value.as}>
                                <a
                                  onClick={() => toggle()}
                                  className="text-lg py-2 my-2 block flex items-center">
                                  {value.icon ? (
                                    <Image
                                      className="mr-2"
                                      {...value.icon}
                                      style={{ width: "30px", height: "30px" }}
                                    />
                                  ) : (
                                    undefined
                                  )}
                                  {value.text}
                                </a>
                              </Link>
                            </div>
                          ))}
                        </div>
                      ]
                    ) : (
                      <Link href={value.href} as={value.as}>
                        <a
                          onClick={() => toggle()}
                          className="text-2xl py-3 border-b-1 border-white-a30 flex">
                          {value.text}
                        </a>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div
              className="flex-col justify-end items-center flex"
              style={{ minHeight: "30%" }}>
              <a
                onClick={() => {
                  window.location.href = "https://lms.savvyuni.com"
                }}
                className={`text-2xl flex items-center border-1 border-current rounded-full py-1 px-9 `}>
                注册/登陆
              </a>
            </div>
          </div>
        )}
      </TheMobileNavContext.Consumer>
    );
  }
}
TheMobileNav.contextType = TheMobileNavContext;
export { TheMobileNavContext };
export default TheMobileNav;
