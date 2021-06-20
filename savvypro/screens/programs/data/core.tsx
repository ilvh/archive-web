import { CourseIDS, Courses } from "../../courses/data";
import { TemplateRenderProps } from "../../../components/template";
import { ImageProps } from "../../../components/elements/image";
export type ProgramIDS =
  | "Excel-VBA"
  | "CFA"
  | "SAS"
  | "FRM"
  | "SQL"
  | "Python"
  | "Networking"
  // | "Tableau"
  | "CSC";
export interface withPage {
  page: TemplateRenderProps;
}
export class Program {
  backgroundImage: ImageProps = {
    webp: {
      1: require("../../../static/pages/programs/defaultBanner.jpg?webp"),
      2: require("../../../static/pages/programs/defaultBanner.jpg?webp")
    },
    jpeg: {
      1: require("../../../static/pages/programs/defaultBanner.jpg?resize&size=1500"),
      2: require("../../../static/pages/programs/defaultBanner.jpg?resize&size=2000")
    }
  };
  icon: ImageProps;
  constructor(
    public id: ProgramIDS,
    public name: string,
    public courses: CourseIDS[],
    public cmsId: number,
  ) {
    this.courses.map(id => {
      if (!Courses.find(course => course.id === id)) {
        throw new Error(
          `Program ${
            this.id
          } defines course ${id} but does not exist in courses list.`
        );
      }
    });
  }
  getCourses() {
    return Courses.filter(course => this.courses.includes(course.id));
  }
}
