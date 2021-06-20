import { Component } from "react";
import { TemplateInfoCard, TemplateInfoCardProps } from "../elements/infoCard";
import Container from "../layout/container";
import { Bullet } from "../elements/bullet";
import { Button } from "../elements/button";
import { TemplatePadding, SectionTitle } from "./core";
import { Tab } from "../layout/tab";
import { Accordian } from "../elements/accordian";

export interface TemplateAccordianProps {
  heading: {
    subTitle?: string;
    title?: string;
    description?: string;
  };
  tabs: {
    name: string;
    items: {
      name: string;
      body: string | string[];
    }[];
  }[];
}
export interface TemplateAccordianData {
  type: "TemplateAccordian";
  data: TemplateAccordianProps;
}

export class TemplateAccordian extends Component<TemplateAccordianProps> {
  render() {
    const { tabs, heading } = this.props;

    return (
      <div>
        <TemplatePadding>
          <SectionTitle className="flex flex-col items-center" {...heading} />
          <Tab
            tabs={tabs.map((value, i) => ({
              name: value.name,
              el: (
                <div>
                  <Accordian
                    list={value.items.map((value, i) => ({
                      name: value.name,
                      item: (
                        <div className="px-7 text-gray-700 text-sm">
                          {Array.isArray(value.body)
                            ? value.body.map((val, i) => {
                              if (typeof val === 'object') {
                                return (
                                  <div key={i}>
                                    {val.title && <span className="text-green-500">
                                      { value.body && value.body.length > 1 ? `${i + 1}. `: null} 
                                    </span>}
                                    {val.title}
                                    <div style={{ marginTop: 10, marginLeft: 15 }}>
                                      {Array.isArray(val.data) ? val.data.map((elem, j) =>
                                      (<Bullet
                                        key={j}
                                        text={elem}
                                        className="text-gray-700 text-sm"
                                      />)) : val.data}
                                    </div>
                                  </div>
                                )
                              }
                              return (
                                <div key={i}>
                                  <span className="text-green-500" style={{ lineHeight: 2.5 }}>
                                    {i + 1}.{" "}
                                  </span>
                                  {val}
                                </div>
                              )
                            })
                            : value.body}
                        </div>
                      )
                    }))}
                  />
                </div>
              )
            }))}
          />
        </TemplatePadding>
      </div>
    );
  }
}
