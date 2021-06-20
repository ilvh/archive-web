import { Component } from "react";
import iconSet from "../../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";

export class NavLink extends Component<{
  text: string;
  activeSub?: boolean;
  href?: string;
  iconClassName?: string;
  openSubMenu?: () => void;
}> {
  clickLink = (event: any) => {
    if (this.props.openSubMenu) {
      return this.props.openSubMenu();
    } else {
      return (this.props as any).onClick(event);
    }
  };
  render() {
    return (
      <a
        onClick={this.clickLink}
        href={!this.props.openSubMenu ? this.props.href : undefined}
        className={`text-xs px-6 cursor-pointer h-full flex items-center  group relative `}>
        <span
          className={`link-gradient absolute w-full h-0 bottom-0 left-0 transition group-hover:h-full ${
            this.props.activeSub ? "h-full" : ""
          }`}
        />
        <span className="relative">
          {this.props.text}
          {this.props.openSubMenu ? (
            <span
              className="inline-flex  items-center justify-center ml-1 "
              style={{
                transition: "transform  0.3s ease",
                transform: this.props.activeSub
                  ? "rotate(180deg)"
                  : "rotate(0deg)"
              }}>
              <IcomoonReact
                className={`fill-current ${this.props.iconClassName || ""}`}
                iconSet={iconSet}
                // color="#000"
                size={10}
                icon="arrow-down"
              />
            </span>
          ) : (
            undefined
          )}
        </span>
      </a>
    );
  }
}
