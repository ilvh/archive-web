import React from "react";
import App, { Container } from "next/app";
import { NavProvider } from "../components/layout/nav/navProvider";
import { VideoProvider } from "../components/video-banner";
import StickyWidget from '../components/StickyWidget/StickyWidget'
import BottomPromoRegister from '../components/elements/BottomPromoRegister'
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <NavProvider>
        <VideoProvider>
          <Container>
            <Component {...pageProps} />
          </Container>
        </VideoProvider>
        
        <StickyWidget />
        <BottomPromoRegister />
      </NavProvider>
    );
  }
}

export default MyApp;
