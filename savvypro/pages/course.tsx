import React, { Component } from "react";
import axios from 'axios';
import { isMobile } from "react-device-detect"; 

import { TemplateRenderMobile } from "../components/template/mobile";
import { TemplateRender } from "../components/template";
import { TemplateBanner } from "../components/template/banner";
import { TemplateBannerMobile } from "../components/template/bannerMobile";
import { TemplatePadding } from "../components/template/core";
import Layout from "../components/layout";
import Head from "../components/head";
import {
  NavConsumer,
  TheNavContext
} from "../components/layout/nav/navProvider";

import { Courses } from "../screens/courses/data";
class Offline extends React.Component<{ id: string }> {
  static contextType = TheNavContext;

  static async getInitialProps({ query: { id } }) {
    const course = Courses.find(course => course.id === id);
    const response = await axios.get(`https://cms-api.savvyuni.com/api/courses/${course.cmsId}`);
    
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
    const course = Courses.find(course => course.id === this.props.id);
    if (!course) return undefined;
    this.context.toggleContextual(
      course.page.twoLayerSectionList.map(value => ({
        text: value.heading.title,
        id: value.heading.title
      }))
    );
    let bannerInfo = {}
    if (this.props.data && this.props.data.lessons) {
      const lessons = this.props.data.lessons
      const hotLesson = lessons.filter((elem) => {
        return elem.is_hot === 1 && elem.is_enable === 1
      })[0]

      if (hotLesson) {
        bannerInfo.lesson = hotLesson
        bannerInfo.course = this.props.data
      }
    }
    if (isMobile) {
      this.setState({
        template: (<TemplateRenderMobile {...course.page} />),
        banner: (<TemplateBannerMobile bannerInfo={bannerInfo} />)
      })
    } else {
      this.setState({
        template: (<TemplateRender {...course.page} />),
        banner: (<TemplateBanner bannerInfo={bannerInfo} />)
      })
    }
  }
  componentWillUnmount() {
    this.context.toggleContextual();
  }

  render() {
    const course = Courses.find(course => course.id === this.props.id);
    if (this.props.data && this.props.data.lessons) {
      const lessons = this.props.data.lessons.filter(lesson => lesson.is_enable);
      const teachers = this.props.data.teachers.filter(teacher => teacher.is_enable && teacher.is_online);

      const offlineLessons = lessons.filter((elem) => {
        return elem.in_class === 1
      })
      const onlineLessons = lessons.filter((elem) => {
        return elem.is_online === 1
      })

      course.page.twoLayerSectionList[0].sections[0].data.tabs = course.page.twoLayerSectionList[0].sections[0].data.tabs.map((elem) => {
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

      course.page.twoLayerSectionList[1].template.data.cards = teachers.map((elem) => {
        return {
          title: elem.name,
          description: elem.position,
          body: {
            data: elem.description,
            minHeight: course.page.twoLayerSectionList[1].template.data.cards[0].body.minHeight
          }
        }
      })
    }
    if (!course) return undefined;

    return (
      <div className="">
        <Head
          title={`Savvypro | ${course.name}`}
          description="Savvypro is a learning platform"
        />
        <Layout>
          {/* <TemplateBanner /> */}
          {this.state.banner}
          {course.page ? (
            <TemplatePadding withCtn={false}>
              {this.state.template}
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
