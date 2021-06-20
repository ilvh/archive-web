import React, { Component } from "react";
import Container from "../../../components/layout/container";
import { SectionTitle } from "../../../components/layout/section-title";
import HomeData from "../data";
import Image, { ImageProps } from "../../../components/elements/image";
import { Button } from "../../../components/elements/button";

export interface HomeBannerData {
  slides: {
    image: ImageProps;
    title: string;
    description: string;
    action: string;
  }[];
}
export class HomeCalendar extends Component {
  state: {
    activeIndex: number;
    showModal: boolean;
  } = {
    activeIndex: 0,
    showModal: false,
  };
   
  render() {
    const calendar = this.props.calendar;

    const calendarItems = [];

    if (calendar && calendar.length > 0) {
      calendar.forEach((item) => {
        const date = new Date(item.start_at.replace(/ /g, 'T'))
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dateString = `${month}月${day}日`;
        item.is_enable && calendarItems.push(
          <div 
            className="relative w-2/5  items-center text-center flex flex-row "
            style={{  height: 55, boxShadow: '0 4px 8px 0 #e5e5e5', backgroundColor: '#f6f6f6', marginRight: 20, marginTop: 20 }}
          >
            <span class="w-1/2" style={{ fontSize: 16, fontWeight: 'normal', letterSpacing: 1.33, color: '#e67184', margin: 'auto' }}>
              {dateString}
            </span>
            <span class="w-1/2" style={{ fontSize: 16, fontWeight: 'normal', letterSpacing: 1.33, color: '#101010', margin: 'auto' }}>
              {item.name}
            </span>
          </div>
        )
      })
    }

    return (
      <Container className="relative z-10">
        <div className="relative items-center text-center flex flex-col" style={{ marginTop: 50 }}>
          <div>
            <span style={{ color: '#5ac494', fontSize: 34, fontFamily: 'Alibaba-PuHuiTi-M', fontWeight: 16 }}>开课</span>
            <span style={{ fontSize: 34, fontFamily: 'Alibaba-PuHuiTi-M', fontWeight: 'normal' }}>日历</span>
          </div>

      
          <div className="relative flex flex-wrap items-center text-center" style={{ marginTop: 10, width: '120%', marginLeft: '20%' }}>
            {calendarItems}
          </div>
        </div>
      </Container>
    );
  }
}
