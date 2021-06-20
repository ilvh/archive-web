import React, { Component } from "react";
import iconSet from "../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import Container from "../layout/container";

const VideoBannerContext = React.createContext({
  isOpen: false,
  videoId: undefined,
  openBanner: videoId => {}
});
class VideoBanner extends Component {
  render() {
    return (
      <div
        className={`text-center flex flex-col ${
          this.props.className ? this.props.className : ""
        }`}
        style={{
          background: ` center center / cover no-repeat`,
          backgroundImage: `url(${this.props.image.jpeg})`
        }}>
        <div
          className="text-white"
          style={{ height: "500px", background: "rgba(0,0,0,0.6)" }}>
          <Container className=" py-32 h-full flex-col flex justify-center">
            <div className="text-base mx-auto" style={{ maxWidth: "712px" }}>
              {this.props.text}
            </div>
            <VideoBannerContext.Consumer>
              {ctx => {
                let { openBanner } = ctx;
                return (
                  <div
                    className="mt-8 text-xs flex-inline cursor-pointer justify-center items-center"
                    onClick={() => openBanner(this.props.videoId)}>
                    <IcomoonReact
                      className="fill-current    mr-2"
                      iconSet={iconSet}
                      // color="#000"
                      size={26}
                      icon="playbtn"
                    />
                    {this.props.btnText}
                  </div>
                );
              }}
            </VideoBannerContext.Consumer>
          </Container>
        </div>
      </div>
    );
  }
}
export class VideoProvider extends Component {
  openBanner = videoId => {
    this.setState({
      ...this.state,
      isOpen: true,
      videoId: videoId
    });
  };
  closeBanner = () => {
    this.setState({
      ...this.state,
      isOpen: false,
      videoId: undefined
    });
  };

  state = {
    isOpen: false,
    videoId: undefined,
    openBanner: this.openBanner,
    closeBanner: this.closeBanner
  };

  render() {
    return (
      <VideoBannerContext.Provider value={this.state}>
        {this.props.children}
      </VideoBannerContext.Provider>
    );
  }
}
const VideoConsumer = VideoBannerContext.Consumer;
export { VideoConsumer };
export default VideoBanner;
