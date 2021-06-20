import { Component } from "react";
import { TemplateInfoCard, TemplateInfoCardProps } from "../elements/infoCard";
import Container from "../layout/container";
import { Bullet } from "../elements/bullet";
import { Button } from "../elements/button";

import { TemplatePadding, SectionTitle } from "./core";
import { Tab } from "../layout/tab";
export interface TemplateInfoCardTabProps {
  heading: {
    subTitle?: string;
    title?: string;
    description?: string;
  };
  titleTag?: string;
  tabs: {
    name: string;
    cards: [TemplateInfoCardProps, TemplateInfoCardProps];
  }[];
}

export interface TemplateInfoCardTabData {
  type: "TemplateInfoCardTab";
  data: TemplateInfoCardTabProps;
}

// 课程设置 火热占位中
export class TemplateInfoCardTab extends Component<TemplateInfoCardTabProps> {
  state: {
    activeIndex: number;
  } = {
    activeIndex: 0
  };
  createCard(cards: [TemplateInfoCardProps, TemplateInfoCardProps]) {
    let keys: (keyof TemplateInfoCardProps | "hourTitle")[] = [
      "title",
      "topBody",
      "hourTitle",
      "times"
    ];
    // let els = [];
    let group: { [k: number]: JSX.Element[] } = {};
    for (let [i, key] of keys.entries()) {
      let keyCount = i;
      for (let [i, card] of cards.entries()) {
        if (!group[i]) group[i] = [];
        let els = group[i];
        let count = i * keyCount;
        function getCount(num: number) {
          return num * i;
        }
        switch (key) {
          case "title":
            els.push(
              <div
                className={`order-${getCount(
                  1
                )} md:order-none background-gradient text-white text-center text-2xl py-4 rounded-tl-lg rounded-tr-lg `}
              >
                {card.title}
              </div>
            );
            break;
          case "topBody":
            els.push(
              <div
                className={`order-${getCount(2)} md:order-none  text-sm p-8`}
                style={{ minHeight: 180 }}
              >
                {Array.isArray(card.topBody.data) ? (
                  <div style={{ minHeight: card.topBody.minHeight, marginBottom: 50 }}>
                    {card.topBody.data.map((value, i) => (
                      <Bullet key={i} text={value} />
                    ))}
                  </div>
                ) : (
                  <div className="leading-loose" style={{ minHeight: card.topBody.minHeight }}>{card.topBody.data}</div>
                )}
              </div>
            );
            break;
          // case "hourTitle":
          //   els.push(
          //     <div
          //       className={`order-${getCount(
          //         3
          //       )} md:order-none bg-gray-100 text-gray-600 text-center text-lg py-2`}>
          //       开班时间
          //     </div>
          //   );
          //   break;
          case "times":
            els.push(
              <div
                className={` order-${getCount(
                  4
                )} md:order-none   rounded-bl-lg rounded-br-lg flex flex-col justify-between mb-8 md:mb-0`}>
                {/* <div className="py-6">
                  {card.times.map((value, i) => {                  
                    if (['excel', 'sas'].includes(value.course)) {
                      const options = { year: 'numeric', month: 'long', day: 'numeric' };
                      const startAt = new Date(value.end).toLocaleDateString('zh-CN', options)
                      return (
                        <div key={i} className="text-sm text-center py-2">
                          美东时间 {startAt} 开课
                        </div>
                      )
                    }
                    return (
                      <div key={i} className="text-sm text-center py-2">
                        面向{value.end.getMonth() + 1}月一级备考——
                        {value.dates.map(
                          (date, i) =>
                            `${date.getMonth() + 1}月${
                              i + 1 === value.dates.length ? "" : "，"
                            }`
                        )}
                        开班
                      </div>
                    )}
                  )}
                </div> */}
                <div className="flex justify-center pb-7 ">
                  <Button onClick={() => {
                    window.location.href = card.link
                  }}>了解详情</Button>
                </div>
              </div>
            );
            break;
        }
      }
    }
    let grp = Object.keys(group).reduce(
      (prev, curr) => {
        prev.push(group[parseInt(curr)]);
        return prev;
      },
      [] as JSX.Element[][]
    );

    return grp;
  }
  openIndex(num: number) {
    this.setState({ ...this.state, activeIndex: num });
  }
  render() {
    const { activeIndex } = this.state;
    const { heading, titleTag } = this.props;
    return (
      <div>
        <TemplatePadding>
          {heading.title || heading.description || heading.subTitle ? (
            <SectionTitle
              {...heading}
              titleChild={
                titleTag ? (
                  <span className="relative inline-flex ml-3">
                    <span
                      className="bg-red-500 text-sm text-white rounded  px-2 relative"
                      style={{
                        boxShadow: "inset -2px -2px 0px rgba(0,0,0,0.2)",
                        padding: "0.0625rem 0.5rem 0.125rem 0.5rem",
                        marginBottom: "1px"
                      }}>
                      {titleTag}
                    </span>
                  </span>
                ) : (
                  undefined
                )
              }
              className="flex flex-col items-center text-center mb-5"
            />
          ) : (
            undefined
          )}

          <div className="">
            <Tab
              tabs={this.props.tabs.map((value, i) => ({
                name: value.name,
                el: (
                  <div
                    className={` md:flex text-gray-700 -mx-4`}
                    style={
                      {
                        // gridColumnGap: "15px"
                      }
                    }>
                    {value.cards.length === 2 ? this.createCard(value.cards).map((lists, i) => (
                        <div key={i} className="md:w-1/2 px-4 " style={{ marginBottom: 50 }}>
                          <div className="shadow-lg rounded-lg overflow-hidden">
                            {lists}
                          </div>
                        </div>
                      )) : this.createCard(value.cards).map((lists, i) => (
                      <div key={i} className="md:w-full px-4 justify-center flex content-center">
                        <div className="m-2 shadow-lg rounded-lg overflow-hidden">
                          {lists}
                        </div>
                      </div>))
                    }
                  </div>
                )
              }))}
            />
          </div>
        </TemplatePadding>
      </div>
    );
  }
}
