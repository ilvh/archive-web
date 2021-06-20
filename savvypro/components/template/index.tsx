import {
  TemplateStatCardWithTextData,
  TemplateStatCardWithText
} from "./statCardWithText";
import { TemplateInfoCardTabData, TemplateInfoCardTab } from "./infoCardTabs";
import {
  TemplateInfoSectionWithStatsData,
  TemplateInfoSectionWithStats
} from "./infoSectionWithStats";

import { TemplateClassesTabData, TemplateClassesTab } from "./classesTab";

import { TemplateAccordianData, TemplateAccordian } from "./accordian";
import {
  TemplateCardBannerSlider,
  TemplateCardBannerSliderData
} from "./cardBannerSlider";
import {
  TemplateFullImageSliderData,
  TemplateFullImageSlider
} from "./imageSlider";
import {
  TemplateIconCarArrows,
  TemplateIconCarArrowsData
} from "./iconCardArrows";
import {
  TemplateCardBannerSlider2,
  TemplateCardBannerSlider2Data
} from "./cardBannerSlider2";
import { TemplateImageCardsData, TemplateImageCards } from "./imageCards";
import {
  TemplateGradientCards,
  TemplateGradientCardsData
} from "./gradientCards";
function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}
import { Component } from "react";
import Scroll from "react-scroll";
type Templates =
  | TemplateStatCardWithTextData
  | TemplateInfoCardTabData
  | TemplateInfoSectionWithStatsData
  | TemplateClassesTabData
  | TemplateClassesTabDataMobile
  | TemplateAccordianData
  | TemplateCardBannerSliderData
  | TemplateFullImageSliderData
  | TemplateIconCarArrowsData
  | TemplateCardBannerSlider2Data
  | TemplateImageCardsData
  | TemplateGradientCardsData;

export type PropsOne = {
  twoLayerSectionList: {
    heading: {
      subTitle?: string;
      title: string;
      description?: string;
    };
    template: Templates;
    sections: (Templates & {
      heading: {
        title: string;
        description?: string;
      };
    })[];
  }[];
};
type PropsTwo = {
  sectionList: Templates[];
};

export type TemplateRenderProps = PropsOne | PropsTwo;

export class TemplateRender extends Component<TemplateRenderProps> {
  getTemplate(
    props: Templates,
    sectionTitle: {
      subTitle?: string;
      title?: string;
      description?: string;
    }
  ) {
    switch (props.type) {
      case "TemplateInfoCardTab":
        return <TemplateInfoCardTab {...props.data} heading={sectionTitle} />;

      case "TemplateStatCardWithText":
        return (
          <TemplateStatCardWithText {...props.data} heading={sectionTitle} />
        );
      case "TemplateInfoSectionWithStats":
        return (
          <TemplateInfoSectionWithStats
            {...props.data}
            heading={sectionTitle}
          />
        );
      case "TemplateClassesTab":
        return <TemplateClassesTab {...props.data} heading={sectionTitle} />;
      case "TemplateAccordian":
        return <TemplateAccordian {...props.data} heading={sectionTitle} />;
      case "TemplateCardBannerSlider":
        return <TemplateCardBannerSlider {...props.data} heading={sectionTitle} />;
      case "TemplateFullImageSlider":
        return (
          <TemplateFullImageSlider {...props.data} heading={sectionTitle} />
        );
      case "TemplateIconCarArrows":
        return <TemplateIconCarArrows {...props.data} heading={sectionTitle} />;
      case "TemplateCardBannerSlider2":
        return (
          <TemplateCardBannerSlider2 {...props.data} heading={sectionTitle} />
        );
      case "TemplateImageCards":
        return <TemplateImageCards {...props.data} heading={sectionTitle} />;
      case "TemplateGradientCards":
        return <TemplateGradientCards {...props.data} heading={sectionTitle} />;
      default:
        assertNever(props);
    }
  }
  render() {
    const props = this.props;

    return (
      <div style={{ margin: 0 }}>
        {(props as PropsTwo).sectionList &&
        (props as PropsTwo).sectionList.length > 0
          ? (props as PropsTwo).sectionList.map((val, i) => {
              return (
                <div key={i}>{this.getTemplate(val, val.data.heading)}</div>
              );
            })
          : (props as PropsOne).twoLayerSectionList.map((propsone, i) => {
              return (
                <Scroll.Element key={i} id={propsone.heading.title}>
                  {[
                    this.getTemplate(propsone.template, propsone.heading),
                    ...propsone.sections.map(section =>
                      this.getTemplate(section, {
                        subTitle: section.heading.title,
                        description: section.heading.description
                      })
                    )
                  ]}
                </Scroll.Element>
              );
            })}
      </div>
    );
  }
}
