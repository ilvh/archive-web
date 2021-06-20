import { TemplateRenderProps, PropsOne } from "../../components/template";
import { CFALevel2 } from "./courses/CFALevel2";
import { ExcelVBA } from "./courses/Excel-VBA";
import { ImageProps } from "../../components/elements/image";
import { VBAProject } from "./courses/VBAProject";
import { CFALevel1 } from "./courses/CFALevel1";
import { SASBaseAdvanced1 } from "./courses/SASBaseAdvanced1"
import { SASProject } from "./courses/SASProject";
// import { CSC } from "./courses/CSC";

export type CourseIDS =
  | "Excel-VBA"
  | "VBAProject"
  | "CFA-Level-1"
  | "CFA-Level-2"
  | "Base+Advance"
  | "SASProject"
  | "FRM"
  | "SQL"
  | "Python"
  | "Networking"
  // | "Tableau"
  | "CSC"
  | "SAS-Base-1"
  | "SASProject"

export interface Course {
  id: CourseIDS;
  name: string;
  cmsId: number;
  description: string;
  types: ("online" | "offline")[];
  page: PropsOne;
  backgroundImage?: ImageProps;
}
export const Courses: Course[] = [
  // {
  //   id: "Excel-VBA",
  //   name: "Excel-VBA实战班",
  //   description:
  //     "Excel-VBA实战班是一个面向零基础学员开设的，课程内容包括Excel和VBA中的重要操作技能，以及一个完整的Business Loan的Case Study与多个Project的练习。",
  //   types: ["offline", "online"],
  //   page: { twoLayerSectionList: [] }
  // },
  ExcelVBA,
  {
    id: "CSC",
    name: "CSC",
    description: "SavvyPro CSC证书班包括了Volume 1&2的全部内容，同时每个部分配有模拟真题考试及解析，三个月帮你快速打进银行内部！",
    link: './programs/CSC',
    types: ["online"],
    page: { twoLayerSectionList: [] }
  },
  // CSC,
  // {
  //   id: "VBAProject",
  //   name: "VBA Project 实战班",
  //   description:
  //     "Excel-VBA实战班是一个面向零基础学员开设的，课程内容包括Excel和VBA中的重要操作技能，以及一个完整的Business Loan的Case Study与多个Project的练习。",
  //   types: ["offline", "online"],
  //   page: { twoLayerSectionList: [] }
  // },
  VBAProject,
  CFALevel1,
  CFALevel2,
  SASBaseAdvanced1,
  SASProject,
  {
    id: "Python",
    name: "Python数据分析实战班",
    description:
      "面对零基础的学员设置的，7节课从基础到实战，掌握Data Analyst和Marketing Analyst的必备技能。同时配合按揭贷款，网络爬虫两大case及包括Pandas在内的Project的实战练习, 帮助你充实你的简历！",
    link: './programs/Python',
    types: ["offline", "online"],
    page: { twoLayerSectionList: [] }
  },
  {
    id: "SQL",
    name: "SQL数据库实战班",
    description:
      "SavvyPro的SQL课程面向零基础的学员开设，以实战为导向，包括SQL在日常任务中的应用，让你快速在四周之内掌握在工作中系统解决难题的能力。",
    link: './programs/SQL',
    types: ["offline", "online"],
    page: { twoLayerSectionList: [] }
  },
  {
    id: "Base+Advance",
    name: "Base + Advance证书班",
    description:
      "SAS证书班是面向零基础学员开设的，旨在短期内帮助学生顺利通过SAS Base和Advance的证书，提高简历的含金量。课程包括Base+Advance两个证书的全部内容，包括理论知识，实战练习以及老师独家整理的500+真题。",
    link: './programs/Base+Advance',
    types: ["online"],
    page: { twoLayerSectionList: [] }
  },
  // {
  //   id: "SASProject",
  //   name: "SAS Project实战班",
  //   description:
  //     "Excel-VBA实战班是一个面向零基础学员开设的，课程内容包括Excel和VBA中的重要操作技能，以及一个完整的Business Loan的Case Study与多个Project的练习。",
  //   types: ["online"],
  //   page: { twoLayerSectionList: [] }
  // },
  {
    id: "Networking",
    name: "Networking 社交训练营",
    description:
      "为大家系统化地训练职场中的社交求职能力，讲解简历与面试并配以实战模拟。具体内容包括如何与理想工作的HR建立好的关系，获得内推机会，如何及时联络感情等等，同时老师也会不定期地给大家分享大型金融公司的Networking Event。",
    link: './programs/Networking',
    types: ["online"],
    page: { twoLayerSectionList: [] }
  },
  {
    id: "FRM",
    name: "FRM 证书保过班",
    description:
      "SavvyPro的FRM课程作为一个系统化的保过课程，包含了FRM Part 1的全部知识点。帮你扎实理论基础，透彻理解概念，三个月，带你开启风险分析师的职业之路。",
    link: './programs/FRM',
    types: ["online"],
    page: { twoLayerSectionList: [] }
  },
  // {
  //   id: "Tableau",
  //   name: "Tableau",
  //   description:
  //     "Excel-VBA实战班是一个面向零基础学员开设的，课程内容包括Excel和VBA中的重要操作技能，以及一个完整的Business Loan的Case Study与多个Project的练习。",
  //   types: [],
  //   page: { twoLayerSectionList: [] }
  // }
];
