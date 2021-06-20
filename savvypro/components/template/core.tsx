import { Component } from "react";
import Container from "../layout/container";
import {
  SectionTitle as PreSectionTitle,
  SectionTitleProps
} from "../layout/section-title";
export class TemplatePadding extends Component<{ withCtn?: boolean }> {
  render() {
    let { withCtn } = this.props;
    if (withCtn === undefined) withCtn = true;
    return (
      <div className="py-16" style={{ marginBottom: -50 }}>
        {withCtn ? (
          <Container className="py-0">{this.props.children}</Container>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

export class SectionTitle extends Component<SectionTitleProps> {
  split(text: string) {
    let el: JSX.Element;
    let [white, blue] = text.split(/\$\$(.+)/);
    if (blue) {
      el = (
        <span style={{ fontWeight: 700 }}>
          <span>{white}</span>
          <span className="text-green-500">{blue}</span>
        </span>
      );
    } else {
      el = <span>{white}</span>;
    }
    return el;
  }
  render() {
    const {
      subTitle,
      description,
      separator,
      descriptionClass,
      ...restProps
    } = this.props;
    return (
      <div>
        <PreSectionTitle
          {...{
            ...restProps,
            separator: separator === false ? false : !!restProps.title
          }}
        />
        {subTitle ? (
          <h4
            className={`text-2.5xl text-center ${
              restProps.colorClass ? restProps.colorClass : " text-gray-700"
            } mb-7`}>
            {this.split(subTitle || "")}
          </h4>
        ) : (
          undefined
        )}
        {description ? (
          <p
            style={{ maxWidth: "713px", fontFamily: 'Alibaba-PuHuiTi-M' }}
            className={`text-sm ${
              descriptionClass ? descriptionClass : "text-center"
            } mx-auto leading-loose ${
              restProps.colorClass ? restProps.colorClass : " text-gray-700"
            } mb-7`}
          >
            {description}
          </p>
        ) : (
          undefined
        )}
      </div>
    );
  }
}
