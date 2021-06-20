import { Component } from "react";
import Image, { ImageProps } from "../elements/image";
import Container from "../layout/container";
import { withRouter } from "next/router";
import Link from "next/link";
import { programs } from "../../screens/programs/data";
import iconSet from "../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobileOnly
} from "react-device-detect"; 

import { TemplatePadding, SectionTitle } from "./core";
import {
  GradientCardPercProps,
  GradientCardPerc
} from "../elements/gradientCardPerc";
import { Bullet } from "../elements/bullet";
export interface TemplateStatCardWithTextProps {
  heading: {
    subTitle?: string;
    title?: string;
    description?: string;
  };
  cardLocation: "left" | "right";
  card: GradientCardPercProps;
  list?: string[];
}
export interface TemplateStatCardWithTextData {
  type: "TemplateStatCardWithText";
  data: TemplateStatCardWithTextProps;
}
export class TemplateStatCardWithText extends Component<
  TemplateStatCardWithTextProps
> {
  useWith(left: any, right: any) {
    if (this.props.cardLocation === "left") {
      return left;
    } else {
      return right;
    }
  }
  render() {
    const { heading } = this.props;
    return (
      <div className=" relative" style={{ marginBottom: -50 }}>
        <TemplatePadding>
          <div
            className={` flex items-center md:items-start flex-col-reverse ${this.useWith(
              " md:flex-row-reverse",
              " md:flex-row"
            )}`}>
            <div>
              <SectionTitle
                className="flex flex-col items-center md:items-start"
                descriptionClass={isMobileOnly ? "text-left md:text-left" : "text-center md:text-left"}
                {...heading}
              />

              {this.props.list ? (
                <div className="md:flex  flex-wrap">
                  {this.props.list.map((value, i) => (
                    <Bullet
                      key={i}
                      text={value}
                      className="md:w-1/2 text-gray-700 text-sm"
                    />
                  ))}
                </div>
              ) : (
                undefined
              )}
            </div>
            <div
              className={`mb-12 md:mb-0 ${this.useWith(
                "md:mr-1/12",
                "md:ml-1/12"
              )}`}>
              <GradientCardPerc {...this.props.card} />
            </div>
          </div>
        </TemplatePadding>
      </div>
    );
  }
}
