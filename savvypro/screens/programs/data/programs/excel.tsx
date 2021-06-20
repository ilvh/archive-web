import { Program, ProgramIDS, withPage } from "../core";
import { TemplateRenderProps } from "../../../../components/template";
export class Excel extends Program implements withPage {
  icon = {
    webp: {
      1: require("../../../../static/pages/programs/icons/excelvba.png?webp"),
      2: require("../../../../static/pages/programs/icons/excelvba.png?webp")
    },
    jpeg: {
      1: require("../../../../static/pages/programs/icons/excelvba.png?resize&size=40"),
      2: require("../../../../static/pages/programs/icons/excelvba.png?resize&size=60")
    }
  };
  video = {
    link: 'https://savvyuni-web.s3.amazonaws.com/banners/Excel-VBA_banner.mp4',
    poster: "../../../../static/pages/programs/excel.png"
  };
  page: TemplateRenderProps = {
    sectionList: [
      {
        type: "TemplateGradientCards",
        data: {
          heading: {
            title: "技能硬，就会在求职中$$出彩",
            description:
              "大学经常使用Excel-VBA写作业，但进入职场后，面对真实的工作项目依然不知道如何下手。面对纷繁复杂的数据，如何高效率地完成项目，做出让老板眼前一亮的报告，Excel-VBA一定是你职场的必备武器。"
          },
          cards: [
            {
              title: "Excel",
              description:
                "从数据获取、操作、分析到展现，告别重复枯燥的数据整理工作，快速数据建模分析，高效率产出企业级分析报告。"
            },
            {
              title: "VBA",
              description:
                "编程自动化生成报告，表单，图表，Pivot Table 用户界面以及最终生成Email定时发给对应联系人。"
            },
            {
              title: "实战",
              description:
                "不仅仅局限于纸上谈兵，更多的是利用Excel-VBA解决工作中的实际问题，大量基于真实场景的商业案例，让你在实操中技能快速提升。"
            }
          ]
        }
      },
      {
        type: 'TemplateInfoCardTab',
        data: {
          heading: {
            title: "课程$$设置"
          },
          titleTag: "火热占位中",
          tabs: [
            {
              name: "Excel-VBA实战班",
              cards: [
                {
                  title: "Excel-VBA实战班",
                  topBody: {
                    minHeight: 150,
                    data: "Excel-VBA实战班是一个面向零基础学员开设的课程，内容包括Excel和VBA中的重要操作技能，以及一个完整的Business Loan的Case Study与多个Project的练习。",
                  },
                  times: [
                    {
                      course: 'excel',
                      end: new Date("Oct 5,2019"),
                      dates: [
                        new Date("Jan 24,2019"),
                        new Date("Feb 24,2019")
                      ],
                    },
                  ],
                  link: '../courses/Excel-VBA',
                },
                {
                  title: "VBA Project实战班",
                  topBody: {
                    minHeight: 150,
                    data: "这门课程是Excel-VBA实战班的进阶课程，是针对已经参加过实战班或有一年以上VBA实战经验，想进一步提升操作经验的同学。课程会通过6个完整的工业届实际案例，让大家完美掌握Excel办公自动化中所需要的全部技能。",
                  },
                  times: [
                    {
                      course: 'excel',
                      end: new Date("Oct 12,2019"),
                      dates: [
                        new Date("June 24,2019"),
                        new Date("Feb 24,2019")
                      ],
                    }
                  ],
                  link: '../courses/VBAProject'
                }
              ]
            }
          ]
        }
      },
    ]
  };
  constructor() {    
    super("Excel-VBA", "Excel-VBA软件实战班", ["Excel-VBA", "VBAProject"], 1);
  }
}
