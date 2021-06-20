import { Component } from "react";
import { TemplateInfoCard, TemplateInfoCardProps } from "../elements/infoCard";
import Container from "../layout/container";
import { Bullet } from "../elements/bullet";
import { Button } from "../elements/button";
import { TemplatePadding, SectionTitle } from "./core";
import { Tab } from "../layout/tab";
import { Accordian } from "../elements/accordian";

import DotSeparator from "../elements/dot-separator";
import Image, { ImageProps } from "../elements/image";
export interface TemplateGradientCardsProps {
  heading: {
    subTitle?: string;
    title?: string;
    description?: string;
  };
  cards: {
    title: string;
    description: string;
  }[];
}
export interface TemplateGradientCardsData {
  type: "TemplateGradientCards";
  data: TemplateGradientCardsProps;
}

export class TemplateGradientCards extends Component<
  TemplateGradientCardsProps
> {
  render() {
    const { cards, heading } = this.props;
    return (
      <div>
        <TemplatePadding>
          <div className="mb-7">
            <SectionTitle
              className="flex flex-col items-center text-center"
              {...heading}
            />
          </div>
          <div className="md:flex md:-mx-3">
            {cards.map((value, i) => (
              <div key={i} className="md:w-1/2 md:px-3" style={{ marginBottom: 20 }}>
                <div className="rounded-lg overflow-hidden shadow-custom2 h-full">
                  <div className=" background-gradient text-white text-2xl text-center py-4">
                    {value.title}
                  </div>
                  <div className="text-sm text-gray-700 p-7 leading-loose">
                    {value.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TemplatePadding>
      </div>
    );
  }
}
