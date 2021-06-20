import { Component } from "react";
import Container from "../../components/layout/container";
import { programs } from "./data";
import iconSet from "../../../core/selection.json";
import IcomoonReact, { iconList } from "icomoon-react";
import { Button } from "../../components/elements/button";

function filterProgram(type: "offline" | "online") {
  return programs
    .filter(
      program =>
        program.getCourses().filter(course => course.types.includes(type))
          .length > 0
    )
    .map(program => {
      let courses = program
        .getCourses()
        .filter(course => course.types.includes(type));

      return {
        program,
        courses
      };
    });
}


export const offline = filterProgram("offline");
export const online = filterProgram("online");
const buttons = [
  { id: "online", text: "证书类保过课程", programs: online },
  { id: "offline", text: "实战技能提升", programs: offline }
];
export class ProgramMain extends Component {
  state: {
    active: string;
    activeProgram: number;
  } = {
    active: buttons[0].id,
    activeProgram: 0
  };

  active(num: string) {
    this.setState({ ...this.state, active: num, activeProgram: 0 });
  }
  program(num: number) {
    this.setState({ ...this.state, activeProgram: num });
  }

  render() {
    const { active, activeProgram } = this.state;
    return (
      <div>
        <Container className="py-24 ">
          <div className="lg:flex lg:-mx-5">
            <div className="lg:w-1/4 lg:px-5">
              {buttons.map((value, i) => (
                <div
                  key={i}
                  onClick={() => this.active(value.id)}
                  className={` rounded-lg text-white text-xl py-7 px-6 shadow-custom2 mb-5 cursor-pointer transition flex items-center ${
                    active === value.id
                      ? "background-gradient"
                      : "text-gray-600 bg-white"
                  }`}>
                  <IcomoonReact
                    className={`fill-current mr-2 transition ${
                      active === value.id ? "" : "text-gray-400"
                    }`}
                    iconSet={iconSet}
                    // color="#000"
                    size={30}
                    icon="circle-check"
                  />
                  {value.text}
                </div>
              ))}
            </div>
            <div className="lg:w-3/4 lg:px-5">
              {buttons.map((value, i) => (
                <div className={`${active === value.id ? "" : "hidden"}`}>
                  {value.programs.map((value, i) => (
                    <div className="rounded-lg bg-white shadow-custom2 mb-5 overflow-hidden">
                      <div
                        className="py-7 text-xl font-medium text-gray-600 pl-8 pr-5 relative cursor-pointer"
                        onClick={() => this.program(i)}>
                        <div
                          className={`background-gradient absolute w-full h-full top-0 left-0 transition ${
                            activeProgram === i ? "opacity-100" : "opacity-0"
                          }`}
                        />
                        <div
                          className={`relative flex justify-between items-center transition ${
                            activeProgram === i ? "text-white text-shadow" : ""
                          }`}>
                          {value.program.name}
                          <span
                            className="inline-flex transition"
                            style={{
                              transform:
                                activeProgram === i
                                  ? "rotate(-90deg)"
                                  : "rotate(90deg)"
                            }}>
                            <IcomoonReact
                              className={`fill-current transition ${
                                activeProgram === i
                                  ? "text-white"
                                  : "text-yellow-500"
                              }`}
                              iconSet={iconSet}
                              // color="#000"
                              size={30}
                              icon="right-arrow-circle"
                            />
                          </span>
                        </div>
                      </div>
                      <div
                        className="overflow-hidden transition"
                        style={{
                          maxHeight: activeProgram === i ? "610px" : "0"
                        }}>
                        <div className="py-4 ">
                          {value.courses.map((value, i) => {
                            return(
                            <div className="px-8 text-gray-700 py-4">
                              <div className="text-lg font-medium mb-3">
                                {value.name}
                              </div>
                              <div className="text-sm leading-loose">
                                {value.description}
                              </div>
                              <Button onClick={() => { window.location.href = value.link }} className="text-black mt-5">
                                了解详情
                              </Button>
                            </div>
                          )})}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
