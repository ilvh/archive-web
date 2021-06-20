import { Component } from "react";
import Container from "../container";
import { LinkRef } from "./index";
import Link from "next/link";
import iconSet from "../../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import Image from "../../elements/image";
import { programs } from "../../../screens/programs/data";
import { Courses } from "../../../screens/courses/data";
import { withRouter } from "next/router";
import Scroll from "react-scroll";
const Logo = {
  webp: {
    1: require("./savvypro_horse.png?webp"),
    2: require("./savvypro_horse.png?webp")
  },
  png: {
    1: require("./savvypro_horse.png?resize&size=50"),
    2: require("./savvypro_horse.png?resize&size=75")
  }
};
class ContextualNavPre extends Component<{
  links: { id: string; text: string }[];
  style: any;
}> {
  render() {
    const { links } = this.props;

    const router = (this.props as any).router;

    const backTo = {
      href: "/",
      text: "SavvyPro 首页",
      as: ""
    };
    let name = "";
    if (router.pathname === "/courses") {
      // TODO: change backto for courses
    } else if (router.pathname === "/program") {
      let program = programs.find(pr => pr.id === router.query.id);
      if (program) {
        name = program.name;
      }
    } else if (router.pathname === "/programs") {
      name = "所有课程";
    } else if (router.pathname === "/contactus") {
      name = "联系我们";
    } else if (router.pathname === "/course") {
      let course = Courses.find(pr => pr.id === router.query.id);
      let program = programs.find(pr => pr.courses.includes(router.query.id));
      if (course) {
        name = course.name;
      }
      if (program) {
        backTo.href = `/program?id=${program.id}`;
        backTo.as = `/programs/${program.id}`;
        backTo.text = program.name;
      }
    }

    return (
      <div
        className="fixed top-0 left-0 w-full bg-white-a85 z-50 transition"
        style={this.props.style}>
        <Container className="py-5 flex items-center">
          <div className="w-1/4 flex items-center">
            <Image {...Logo} style={{ height: "50px" }} />
            <div className="inline-flex flex-col ml-2 items-start justify-center">
              <Link href={backTo.href} as={backTo.as}>
                <a className="text-sm text-gray-600 hover:text-green-500 transition inline-block">
                  {backTo.text}
                </a>
              </Link>
              <h3 className="text-md text-green-500">{name}</h3>
            </div>
          </div>
          <div className="w-2/4">
            {links.map((value, i) => (
              <Scroll.Link
                key={`LayoutNavContextualLink${i}`}
                spy={true}
                className="text-xs px-4 cursor-pointer hover:text-blue-400"
                to={value.id}
                smooth={true}
                activeClass="text-blue-500">
                {value.text.replace("$$", "")}
              </Scroll.Link>
            ))}
          </div>
          <div className="w-1/4  justify-end hidden lg:flex ">
            <a
              onClick={() => {
                window.location.href = "https://lms.savvyuni.com"
              }}
              className={`text-xs flex items-center border-1 border-yellow-500 rounded-full py-1 px-5 hover:opacity-75 cursor-pointer transition text-black`}>
              注册/登陆
            </a>
          </div>
          {/* <Container className=" flex flex-col justify-right items-start  h-full text-white">
            <Link href={backTo.href}>
              <a className="text-2xl font-medium hover:text-yellow-700 transition">
                <IcomoonReact
                  className="fill-current"
                  iconSet={iconSet}
                  // color="#000"
                  size={32}
                  icon="arrow-left"
                />
                {backTo.text}
              </a>
            </Link>
            <h1 className="text-5xl font-medium">{name}</h1>
          </Container> */}
        </Container>
      </div>
    );
  }
}
export const ContextualNav = withRouter(ContextualNavPre);
