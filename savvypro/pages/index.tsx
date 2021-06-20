import React from "react";
import axios from 'axios';
import Layout from "../components/layout";
import Head from "../components/head";
import Offer from "../screens/home/offer";
import { HomePlatform } from "../screens/home/platform";
import { WhyUs } from "../screens/home/whyus";
import { HomeSkills } from "../screens/home/skills";
import { HomeCourses } from "../screens/home/courses";
import { HomeBanner } from "../screens/home/banner";
import { HomeCalendar } from "../screens/home/calendar";
import { HomeTabs } from "../screens/home/tabs";
import { TheNavContext } from "../components/layout/nav/navProvider";
import { ParallaxProvider } from "react-scroll-parallax";
import "../static/reset.css";
import "../static/style.css";
import "react-modal-video/css/modal-video.min.css";

class Index extends React.Component {
  static contextType = TheNavContext;
 
  componentDidMount() {
    this.context.startWith(true);
  }
  componentWillUnmount() {
    this.context.startWith(false);
  }

  static async getInitialProps () {
    let banners;
    let calendar;
    let products;

    const bannerRes = await axios.get('https://cms-api.savvyuni.com/api/banners');
    if (bannerRes.status === 200) {
      banners = bannerRes.data;

      const calendarRes = await axios.get('https://cms-api.savvyuni.com/api/calendar');
      if (calendarRes.status === 200) {
        calendar = calendarRes.data;

        const productsRes = await axios.get('https://cms-api.savvyuni.com/api/products');
        if (productsRes.status === 200) {
          products = productsRes.data;

          return {
            banners,
            calendar,
            products
          }
        }
      }
    }
  }

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className="">
        <Head title="Savvypro" description="Savvypro is a learning platform" />
        <Layout>
          <ParallaxProvider>
            <div className=" " style={{overflowX:'hidden'}}>
              {/* <Container className={`py-32 bg-black`}>
              Test me

            </Container> */}
              <HomeBanner banners={this.props.banners} />
              <HomeTabs />
              <HomeCalendar calendar={this.props.calendar} />
              <HomeCourses products={this.props.products} />
              <HomeSkills />
              <WhyUs />
              <HomePlatform />
              <Offer />
            </div>
          </ParallaxProvider>
        </Layout>
      </div>
    );
  }
}

export default Index;
