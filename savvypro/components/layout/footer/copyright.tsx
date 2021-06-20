import React, { Component } from "react";
import { SocialIcons } from "../../../types";
import IcomoonReact, { iconList } from "icomoon-react";
import iconSet from "../../../../core/selection.json";
import Container from "../container";
interface SocialData {
  link: string;
  icon: SocialIcons;
}
const social: SocialData[] = [
  { link: "#", icon: "youtube-circle" },
  { link: "#", icon: "instagram-circle" },
  { link: "#", icon: "linkedin-circle" },
  { link: "#", icon: "weibo-circle" }
];

class TheCopyright extends Component {
  render() {
    return (
      <div className="text-xs text-center p-4 border-t-1 border-gray-400 text-gray-600 ">
        <Container className="md:flex md:items-center py-0">
          <p className="md:w-1/3 md:text-left">
            All Content © SavvyPro Inc. {new Date().getFullYear()}. All Rights
            Reserved.
          </p>
          {/* <div className="my-4 flex justify-center md:w-1/3 md:my-0">
            {social.map((value, i) => (
              <a
                key={`FooterCopyrightLink${i}`}
                href={value.link}
                className="opacity-50 hover:opacity-100 transition">
                <IcomoonReact
                  className="fill-current mx-1 "
                  iconSet={iconSet}
                  // color="#000"
                  size={17}
                  icon={value.icon}
                />
              </a>
            ))}
          </div> */}
          <p className="md:text-right md:w-1/3">
            Maintain by{" "}
            <a
              href="https://www.hexagonstudio.net"
              target="blank"
              className="text-green-500"
              rel="noreferrer noopener">
              SavvyDev
            </a>
          </p>
        </Container>
      </div>
    );
  }
}

export default TheCopyright;
