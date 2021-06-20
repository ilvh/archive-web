import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import { VideoConsumer } from "../video-banner";
import TheFooter from "./footer";
const linkList = [
  { id: "About", text: "关于我们" },
  { id: "Product", text: "教育产品" },
  { id: "Philosophy", text: "教育理念" },
  { id: "Story", text: "我们的故事" },
  { id: "Contact", text: "联系我们" }
];
import TheNav from "./nav";
import TheMobileNav, { TheMobileNavContext } from "./nav/mobile";
class Layout extends Component {
  toggleMob = () => {
    this.setState({
      ...this.state,
      mobNav: {
        ...this.state.mobNav,
        isOpen: !this.state.mobNav.isOpen
      }
    });
  };
  state = {
    mobNav: {
      isOpen: false,
      toggle: this.toggleMob
    }
  };
  render() {
    return (
      <div>
        <TheMobileNavContext.Provider value={this.state.mobNav}>
          {this.state.mobNav.isOpen ? <TheMobileNav /> : null}
          <TheNav />
        </TheMobileNavContext.Provider>
        <VideoConsumer>
          {({ isOpen, closeBanner, videoId }) => (
            <ModalVideo
              channel="youtube"
              isOpen={isOpen}
              videoId={videoId}
              onClose={() => closeBanner()}
            />
          )}
        </VideoConsumer>

        <div>{this.props.children}</div>
        <TheFooter />
      </div>
    );
  }
}
// export { TheFooter, TheHeader };
export default Layout;
