import { Component } from "react";
import Container from "../container";
import { LinkRef } from "./index";
import Link from "next/link";
import iconSet from "../../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import Image from "../../elements/image";
export class SubLink extends Component<LinkRef> {
  render = () => (
    <Link href={this.props.href} as={this.props.as}>
      <a className="hover:text-yellow-500 text-xs py-2 cursor-pointer flex items-center transition">
        {this.props.icon ? (
          <Image
            className="mr-2"
            {...this.props.icon}
            style={{ width: "30px", height: "30px" }}
          />
        ) : (
          undefined
        )}
        {this.props.text}
      </a>
    </Link>
  );
}
export class SubNav extends Component<{
  link: LinkRef;
  mouseLeave: () => void;
}> {
  render() {
    const { link } = this.props;
    const subLinks = link.children || [];
    const singles = subLinks.filter(link => !link.children);
    const multi = subLinks.filter(link => !!link.children);
    return (
      <div
        onMouseLeave={() => this.props.mouseLeave()}
        className="absolute top-full left-0 right-0  text-white"
        style={{ background: "rgba(0,0,0,0.75)" }}>
        <Container className="py-12 flex">
          {/* <div className="w-3/4 flex flex-wrap">
            {multi.map((value, i) => (
              <div className="w-1/3 flex flex-col items-start">
                <SubLink {...value} />
                {value.children
                  ? value.children.map((value, i) => <SubLink {...value} />)
                  : undefined}
              </div>
            ))}
          </div>
          <div className="w-1/4 flex flex-col items-start">
            {singles.map((value, i) => (
              <SubLink {...value} />
            ))}
          </div> */}
          <div className="w-1/4">
            <Link href={link.href} as={link.as}>
              <a className="hover:text-yellow-500 text-xs py-2 cursor-pointer flex items-center transition">
                {link.parentText || link.text}
                <IcomoonReact
                  className="fill-current "
                  iconSet={iconSet}
                  // color="#000"
                  size={14}
                  icon="arrow-right"
                />
              </a>
            </Link>
          </div>
          <div className="w-3/4 flex flex-wrap">
            {subLinks.map((value, i) => (
              <div key={i} className="w-1/3 flex flex-col items-start">
                <SubLink {...value} />
              </div>
            ))}
          </div>
        </Container>
      </div>
    );
  }
}
