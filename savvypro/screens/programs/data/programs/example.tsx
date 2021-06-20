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
  page: TemplateRenderProps = {
    sectionList: [
      {
        type: "TemplateGradientCards",
        data: {
          heading: {
            title: "技能硬，就会在求职中$$出彩",
            description:
              "大学经常使用Excel/VBA写作业，但进入职场后，面对真实的工作项目依然不知道如何下手。面对纷繁复杂的数据，如何高效率地完成项目，作出让老板眼前一亮的报告，ExcelVBA一定是你职场的必备武器。"
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
                "不仅仅局限于纸上谈兵，更多的是利用Excel/VBA解决工作中的实际问题，大量基于真实场景的商业案例，让你在实操中技能快速提升。"
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
                    data: "Excel-VBA实战班是一个面向零基础学员开设的，课程内容包括Excel和VBA中的重要操作技能，以及一个完整的Business Loan的Case Study与多个Project的练习。",
                  },
                  times: [
                    {
                      course: 'excel',
                      end: new Date("Dec 24,2019"),
                      dates: [
                        new Date("Jan 24,2019"),
                        new Date("Feb 24,2019")
                      ],
                    },
                  ]
                },
                {
                  title: "VBA Project实战班",
                  topBody: {
                    minHeight: 150,
                    data: "这门课程是Excel/VBA实战班的进阶课程，是针对已经参加过实战班或有一年以上VBA实战经验，想进一步提升操作经验的同学。课程会通过6个完整的工业届实际案例，让大家完美掌握Excel办公自动化中所需要的全部技能。",
                  },
                  times: [
                    {
                      course: 'excel',
                      end: new Date("Dec 24,2019"),
                      dates: [
                        new Date("June 24,2019"),
                        new Date("Feb 24,2019")
                      ],
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        heading: {
          title: "课程$$大纲"
        },
        type: "TemplateAccordian",
        data: {
          heading: {},
          tabs: [
            {
              name: "tab 1werwe",
              items: [
                {
                  name: "定量分析 (Quantitative)",
                  body: [
                    "以数量工具测算投资组合关联性，",
                    "以数量工具测算投资组合关联性，",
                    "以数量工具测算投资组合关联性，"
                  ]
                },
                {
                  name: "定量分析 (Quantitative)",
                  body: [
                    "以数量工具测算投资组合关联性，",
                    "以数量工具测算投资组合关联性，",
                    "以数量工具测算投资组合关联性，"
                  ]
                },
                {
                  name: "定量分析 (Quantitative)",
                  body: [
                    "以数量工具测算投资组合关联性，",
                    "以数量工具测算投资组合关联性，",
                    "以数量工具测算投资组合关联性，"
                  ]
                },
                {
                  name: "定量分析 (Quantitative)",
                  body: [
                    "以数量工具测算投资组合关联性，",
                    "以数量工具测算投资组合关联性，",
                    "以数量工具测算投资组合关联性，"
                  ]
                }
              ]
            },
            {
              name: "tab 2",
              items: [
                {
                  name: "定量分析 (Quantitative)",
                  body: [
                    "以数量工具测算投资组合关联性，",
                    "以数量工具测算投资组合关联性，",
                    "以数量工具测算投资组合关联性，"
                  ]
                },
                {
                  name: "定量分析 (Quantitative)",
                  body: [
                    "以数量工具测算投资组合关联性，",
                    "以数量工具测算投资组合关联性，",
                    "以数量工具测算投资组合关联性，"
                  ]
                },
                {
                  name: "定量分析 (Quantitative)",
                  body: [
                    "以数量工具测算投资组合关联性，",
                    "以数量工具测算投资组合关联性，",
                    "以数量工具测算投资组合关联性，"
                  ]
                },
                {
                  name: "定量分析 (Quantitative)",
                  body: [
                    "以数量工具测算投资组合关联性，",
                    "以数量工具测算投资组合关联性，",
                    "以数量工具测算投资组合关联性，"
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        type: "TemplateInfoSectionWithStats",
        data: {
          heading: {
            title: "技能硬，就会在求职中$$出彩",
            description:
              "CFA全称Charted Financial Analyst (特许注册金融分析师)，作为全球投资业最为严格与高含金量的资格认证，被称为金融第一考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。自1962年设立CFA课程以来，对投资知识、准则及道德设立了全球性标准， 《金融时报》杂志与2006年将CFA专业资格比喻成投资专才的黄金标准。 \n\nCFA考试通常分为3级，CFA 1级在每年6月和12月分别设置考试，CFA 2级和3级每年仅在6月设置考试。"
          },
          body: [
            "系统化的保过课程，包含CFA 一级考试的全部知识点",
            "无死角梳理课程理论，5年CFA易错点难点剖析",
            "4名拥有3年以上教课经验的老师一同代课，学习小组互相督促",
            "专门配备的CFA班主任老师为大家实时答疑",
            "海量精选模拟真题，真实考试场景还原",
            "线上、线下两种模式，配套讲义，视频与作业",
            "科学的课程设置，即使是零基础学员也能学习"
          ],
          video: {
            cover: {
              webp: {
                1: require("../../../../static/pages/courses/cfa/videoCover.jpg?webp"),
                2: require("../../../../static/pages/courses/cfa/videoCover.jpg?webp")
              },
              jpeg: {
                1: require("../../../../static/pages/courses/cfa/videoCover.jpg?resize&size=500"),
                2: require("../../../../static/pages/courses/cfa/videoCover.jpg?resize&size=700")
              }
            },
            videoId: "",
            caption: "想要试听完整公开课？$$联系客服",
            text: "5分钟免费公开课试听"
          },
          ban: {
            card: {
              first: "SavvyPro学员CFA",
              second: "一次通过率",
              large: "85",
              symbol: "%",
              bottom: "(是大约CFA官方通过率的两倍)"
            },
            infos: [
              {
                big: "96",
                small: "总计课程小时"
              },
              {
                big: "32",
                small: "课节总数"
              },
              {
                big: "11",
                small: "周时长"
              },
              {
                big: "1000+",
                small: "道真题讲解"
              }
            ]
          }
        }
      },
      {
        type: "TemplateStatCardWithText",
        data: {
          heading: {
            title: "为什么选择$$CFA?",
            description:
              "CFA全称Charted Financial Analyst (特许注册金融分析师)，作为全球投资业最为严格与高含金量的资格认证，被称为金融第一考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。自1962年设立CFA课程以来，对投资知识、准则及道德设立了全球性标准， 《金融时报》杂志与2006年将CFA专业资格比喻成投资专才的黄金标准。 \n\nCFA考试通常分为3级，CFA 1级在每年6月和12月分别设置考试，CFA 2级和3级每年仅在6月设置考试。"
          },

          card: {
            first: "CFA证书持有者",
            second: "平均薪资",
            large: "10",
            symbol: "万"
          },
          cardLocation: "right"
        }
      },
      {
        type: "TemplateStatCardWithText",
        data: {
          heading: {
            title: "课程$$介绍",
            description:
              "SavvyPro 开设面向CFA 一级和二级考试的课程，通过系统化的证书保过全程班和临考前的百题冲刺班，为学生全面梳理知识理论 ，无死角剖析过去5年CFA考试的重难点，同时，通过科学的课程设计和大量的真题模拟练习，保证学生即使零基础，也能够轻松通过考试。"
          },
          card: {
            first: "SavvyPro学员CFA",
            second: "一次通过率",
            large: "85",
            symbol: "%",
            bottom: "(是大约CFA官方通过率的两倍)"
          },
          cardLocation: "left",
          list: [
            "线上、线下两种模式",
            "一年多次开课",
            "多名拥有丰富授课经验的导师一同代课",
            "专门配备班主任实时答疑",
            "配套讲义与作业，海量真题模拟",
            "零基础也能无压力"
          ]
        }
      },
      {
        type: "TemplateInfoCardTab",
        data: {
          heading: {},
          tabs: [
            {
              name: "CFA一级证书保过班",
              cards: [
                {
                  title: "CFA一级全程班",
                  topBody: [
                    "系统化的保过课程，包含CFA 一级考试的全部知识点",
                    "无死角梳理课程理论，5年CFA易错点难点剖析",
                    "专门配备的CFA班主任老师为大家实时答疑",
                    "4名拥有3年以上教课经验的老师一同代课，学习小组互相督促",
                    "精选模拟真题，真实考试场景还原",
                    "往期通过率是官方的两倍左右, 高达85%",
                    "专门配备的CFA班主任老师为大家实时答疑",
                    "4名拥有3年以上教课经验的老师一同代课，学习小组互相督促",
                    "精选模拟真题，真实考试场景还原",
                    "往期通过率是官方的两倍左右, 高达85%"
                  ],
                  times: [
                    {
                      end: new Date("Dec 24,2019"),
                      dates: [new Date("Jan 24,2019"), new Date("Feb 24,2019")]
                    },
                    {
                      end: new Date("Dec 24,2019"),
                      dates: [new Date("Jan 24,2019"), new Date("Feb 24,2019")]
                    }
                  ]
                },
                {
                  title: "考前百题冲刺班",
                  topBody: [
                    "21小时的突击课程，300+模拟真题，教学团队实时答疑",
                    "无死角梳理知识点，为你考前查漏补缺",
                    "1次全真模拟考试，3小时的模考解析",
                    "真实考试场景还原，让你为考试做好热身准备"
                  ],
                  times: [
                    {
                      end: new Date("Dec 24,2019"),
                      dates: [new Date("June 24,2019"), new Date("Feb 24,2019")]
                    }
                  ]
                }
              ]
            },
            {
              name: "CFA二级证书保过班",
              cards: [
                {
                  title: "one",
                  topBody: ["系统化的保过课程，包含CFA 一级考试的全部知识点"],
                  times: [
                    {
                      end: new Date("Dec 24,2019"),
                      dates: [new Date("Jan 24,2019"), new Date("Feb 24,2019")]
                    },
                    {
                      end: new Date("Dec 24,2019"),
                      dates: [new Date("Jan 24,2019"), new Date("Feb 24,2019")]
                    }
                  ]
                },
                {
                  title: "考前百题冲刺班",
                  topBody: [
                    "21小时的突击课程，300+模拟真题，教学团队实时答疑",
                    "无死角梳理知识点，为你考前查漏补缺",
                    "1次全真模拟考试，3小时的模考解析",
                    "真实考试场景还原，让你为考试做好热身准备"
                  ],
                  times: [
                    {
                      end: new Date("Dec 24,2019"),
                      dates: [new Date("June 24,2019"), new Date("Feb 24,2019")]
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    ]
  };
  constructor() {
    super("Excel-VBA", "Excel-VBA", ["Excel-VBA", "VBAProject"]);
  }
}
