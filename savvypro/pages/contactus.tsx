import React, { Component } from "react";
import Layout from "../components/layout";
import { TemplateBanner } from "../components/template/banner";
import Head from "../components/head";
import { Contact as ContactScreen } from "../screens/contact";
import DotSeparator from "../components/elements/dot-separator";
import {
  isBrowser,
  isMobile
} from "react-device-detect";

class Contact extends React.Component<{ id: string }> {
  
  render() {
    return (
      <div className="">
        <Head title="Savvypro | Contact us" description="Savvypro contact us" />
        <Layout>
          <TemplateBanner />
          {/* <ContactScreen /> */}

          <div style={{margin: '10vh auto', width: '80%', maxWidth: '1080px', fontWeight: '500'}}>
            <p style={{fontSize: '36px', marginBottom: '0',textAlign: 'center'}}>
              思睿教育
              <span style={{color: '#54B78A'}}>介绍</span>
            </p>
            <div style={{width: '50px', margin: '28px auto'}}>
              <DotSeparator  />
            </div>
            
            <div style={{fontSize: '16px'}}>
            <p>
              2014年，一家秉承“成就客户，务实敬业，团结合作，持续创新”为理念的教育机构悄然萌芽。
              从最初的三五个人，一两间教室，几名学员，发展到如今的现代化教育科技集团——思睿教育。
            </p>
            <p>
              思睿作为专注于海外留学生教育培训的领先机构，旗下包含K-12同步辅导(PreUni)、大学同
              步辅导(SavvyUni)和求职培训(SavvyPro)三大事业群，致力于为海外留学生提供从学术辅
              导到北美就业的一站式服务。
            </p>
            <p>
              我们拥有：完善的运营与科技支持中心；在线教育，To B产品输出(北美大学先修课、欧几里得数
              学竞赛、CCC计算机竞赛、牛顿物理竞赛等课程），大学同步辅导和求职培训四个业务板块；多所
              线下学校与二十一条产品线。
            </p>

            <p>
              我们每天影响着成千上万名海外留学生，帮助他们变得更加优秀，离自己的梦想越来越近。我们希望
              通过优秀教师的总结和运营团队的服务激发学员的学习兴趣，用全球化视角培育国际化人才。
            </p>

            <p>
              我们坚信，为学员和社会持续创造价值是思睿得以持续发展的根本原因。迄今为止，同步辅导事业部已
              为六万余名学员平均提分35%，同时上万名学员通过我们的职业培训成功求职。
            </p>

            <p>
              2019年3月，加拿大总理特鲁多在思睿品牌升级会中发来贺信，肯定了思睿教育过去5年为加拿大华人教育
              作出的贡献。
            </p>
            </div>

          </div>

          <div style={isMobile ? { width: '100%', marginBottom: '50px'} : { margin: 'auto', width: '70%', marginBottom: '50px'}}> 
            <img src={ require('../static/pages/contact/CEO.jpg') } style={{height: '100%', width: '100%'}}/>
          </div>
        </Layout>
      </div>
    );
  }
}

export default Contact;
