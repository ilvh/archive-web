import React, { Component } from "react";

import Layout from "../components/layout";
import { TemplateBanner } from "../components/template/banner";
import Head from "../components/head";
import TenRealm from "../screens/vip/十大行业";
import Highlights from "../screens/vip/项目亮点";
import Plans from "../screens/vip/项目选择";
import Tutors from "../screens/vip/导师介绍";
import Story from "../screens/vip/学员故事";
import Feedback from "../screens/vip/学员好评";

class Vip1v1 extends React.Component<{ id: string }> {
  
  render() {
    return (
      <div className="">
        <Head title="Savvypro | VIP一对一求职辅导" description="" />
        <Layout>
          <TemplateBanner />
          <div className="text-center text-black font-medium" style={{ marginTop: 100 }}>
            <TenRealm/>
            <Highlights/>
            <Plans/>
            <Tutors/>
            <Story/>
            <Feedback/>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Vip1v1;
