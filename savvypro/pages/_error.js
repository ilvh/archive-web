import React, { Component } from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import Container from "../components/layout/container";
import Offer from "../screens/home/offer";
import { HomePlatform } from "../screens/home/platform";
import { WhyUs } from "../screens/home/whyus";
import { HomeSkills } from "../screens/home/skills";
import { HomeCourses } from "../screens/home/courses";
import { HomeBanner } from "../screens/home/banner";
import "../static/reset.css";
import "../static/style.css";
import "react-modal-video/css/modal-video.min.css";

class Index extends React.Component {
  render() {
    return (
      <div className="">
        <Layout>
          <div className=" ">
            <h1> We're sorry there was an error. </h1>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Index;
