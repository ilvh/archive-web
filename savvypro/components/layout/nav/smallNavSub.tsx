import { Component } from "react";
import Container from "../container";
import { LinkRef } from "./index";
import Link from "next/link";
export class SubLink extends Component<LinkRef> {
  render = () => (
    <Link href={this.props.href} as={this.props.as}>
      <a className="hover:text-yellow-500 text-xs py-2 cursor-pointer">
        {this.props.text}
      </a>
    </Link>
  );
}
export class SmallSubNav extends Component<{
  links: LinkRef[];
}> {
  render() {
    const singles = this.props.links.filter(link => !link.children);
    const multi = this.props.links.filter(link => !!link.children);
    return (
      <div
        className="absolute top-full inline-flex  text-white left-1/2 whitespace-no-wrap min-w-full px-7 py-4"
        style={{
          background: "rgba(0,0,0,0.75)",
          transform: "translateX(-50%)"
        }}>
        <div className=" flex flex-col items-start">
          {singles.map((value, i) => (
            <SubLink key={i} {...value} />
          ))}
        </div>
      </div>
    );
  }
}
