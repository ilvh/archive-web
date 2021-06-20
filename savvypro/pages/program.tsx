import React, { Component } from "react";
import axios from 'axios';
import { isMobile, isMobileOnly } from "react-device-detect"; 

import { TemplateRender } from "../components/template";
import { TemplateRenderMobile } from "../components/template/mobile";
import { TemplateBanner } from "../components/template/banner";
import { TemplateBannerMobile } from "../components/template/bannerMobile";
import { TemplatePadding } from "../components/template/core";
import { TemplateInfoCardTab } from "../components/template/infoCardTabs";
import { TemplateStatCardWithText } from '../components/template/statCardWithText';
import Layout from "../components/layout";
import Head from "../components/head";
import { programs } from "../screens/programs/data";

class Offline extends React.Component<{ id: string }> {
  static async getInitialProps({ query: { id } }) {
    const program = programs.find(program => program.id === id);
    const response = await axios.get(`https://cms-api.savvyuni.com/api/programs/${program.cmsId}`);

    if (response && response.status === 200)  {
      return {
        id: id,
        data: response.data,
      }
    }
    return { id: id };
  }

  state = {
    template: '',
    banner: '',
  }

  componentDidMount() {
    const program = programs.find(program => program.id === this.props.id);
    if (!program) return undefined;
    if (isMobile) {
      this.setState({
        template: (<TemplateRenderMobile {...program.page} />),
        banner: (bannerInfo) => { return (<TemplateBannerMobile bannerInfo={bannerInfo} />) }
      })
    } else {
      this.setState({
        template: (<TemplateRender {...program.page} />),
        banner: (bannerInfo) => { return (<TemplateBanner bannerInfo={bannerInfo} />) }
      })
    }
  }

  render() {
    const program = programs.find(program => program.id === this.props.id);
    if (!program) return undefined;
    if (this.props.data && this.props.data.lessons && program.page.twoLayerSectionList) {
      const lessons = this.props.data.lessons.filter(lesson => lesson.is_enable);
      const teachers = this.props.data.teachers.filter(teacher => teacher.is_enable && teacher.is_online);

      const offlineLessons = lessons.filter((elem) => {
        return elem.in_class === 1
      })
      const onlineLessons = lessons.filter((elem) => {
        return elem.is_online === 1
      })

      program.page.twoLayerSectionList[0].sections[0].data.tabs = program.page.twoLayerSectionList[0].sections[0].data.tabs.map((elem) => {
        let lessonData = offlineLessons;
        let status = 'offline';
        if (elem.name.includes('线上')) {
          lessonData = onlineLessons;
          status = 'online';
        }
        return {
          name: elem.name,
          cards: [{
            title: elem.cards[0].title,
            classes: lessonData.map((e) => {
              return {
                name: e.label,
                address: status === 'offline' ? e.address : undefined,
                date: new Date(e.start_at.replace(/ /g, 'T'))
              }
            })
          }]
        }
      })

      program.page.twoLayerSectionList[1].template.data.cards = teachers.map((elem) => {
        return {
          title: elem.name,
          description: elem.position,
          body: {
            data: elem.description,
            minHeight: program.page.twoLayerSectionList[1].template.data.cards[0].body.minHeight
          }
        }
      })
    }
    let data = [];
    if (program && program.page && program.page.sectionList) {
      data = program.page.sectionList  // Array
      if (this.props.data && this.props.data.courses && this.props.data.name !== 'CFA') {
        const courses = this.props.data.courses
        data[1].data.tabs[0].cards = data[1].data.tabs[0].cards.map((elem) => {
          const course = courses.filter((e) => {
            const title = elem.title.replace(/\s/g, "").toLowerCase();
            const courseName = e.name.toLowerCase();
            return title.includes(courseName);
          })[0]
          if (!course) {
            return elem
          }

          return {
            ...elem,
            times: [{
              course: elem.times[0].course,
              end: new Date(course.start_at.replace(/ /g, 'T'))
            }]
          }
        })
      }
    }

    let statCardPropsArray = [];
    let infoCardPropsArray = [];
    
    if (data && data.length > 0) {
      for (let item of data) {
        if (item.type === "TemplateStatCardWithText") {
          statCardPropsArray.push(item.data)
        } else if (item.type === 'TemplateInfoCardTab') {
          infoCardPropsArray.push(item.data)
        }
      }
    }

    let bannerInfo = {}
    if (this.props.data && this.props.data.lessons) {
      const lessons = this.props.data.lessons
      const hotLesson = lessons.filter((elem) => {
        return elem.is_hot === 1
      })[0]

      if (hotLesson) {
        bannerInfo.lesson = hotLesson
        bannerInfo.program = this.props.data
      }
    }

    let templateRender = []
    if (isMobile) {
      templateRender = [<TemplateRenderMobile {...program.page} />]
    } else {
      templateRender = [<TemplateRender {...program.page} />]
    }

    return (
      <div className="">
        <Head
          title={`Savvypro | ${program.name}`}
          description="Savvypro is a learning platform"
        />
        <Layout>
          {this.state.banner ? this.state.banner(bannerInfo) : []}
          { 
            statCardPropsArray.forEach(stateCard => (
              <TemplateStatCardWithText {...stateCard} />
            ))
          }
          {
            infoCardPropsArray.forEach(infoCard => (
              <TemplateInfoCardTab titleTag='火速占位中' {...infoCard} />
            ))
          }
          {program.page ? (
            <TemplatePadding withCtn={false}>
              {/* {program.page ? <TemplateRender {...program.page} /> : undefined} */}
              {/* {this.state.template} */}
              {templateRender}
            </TemplatePadding>
          ) : (
            undefined
          )}
        </Layout>
      </div>
    );
  }
}

export default Offline;
