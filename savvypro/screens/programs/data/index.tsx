import { Program, ProgramIDS, withPage } from "./core";
import { TemplateRenderProps } from "../../../components/template";
import { CourseIDS } from "../../courses/data";
import { Excel } from "./programs/excel";
import { SAS } from "./programs/sas";
import { Python } from "./programs/python";
import { SQL } from "./programs/sql";
import { Networking } from "./programs/networking";
// import { CFA } from "./programs/cfa";
import { FRM } from "./programs/frm";
import { CSC } from "./programs/csc";

class CFA extends Program {
  icon = {
    webp: {
      1: require("../../../static/pages/programs/icons/cfa.png?webp"),
      2: require("../../../static/pages/programs/icons/cfa.png?webp")
    },
    jpeg: {
      1: require("../../../static/pages/programs/icons/cfa.png?resize&size=40"),
      2: require("../../../static/pages/programs/icons/cfa.png?resize&size=60")
    }
  };

  video = {
    //link: 'https://savvyuni-web.s3.amazonaws.com/banners/CFA_banner_new.mp4',
    poster: "../../../../static/pages/programs/defaultBanner.jpg"
  };

  page: TemplateRenderProps = {
    sectionList: [
      {
        type: "TemplateStatCardWithText",
        data: {
          heading: {
            title: "为什么选择$$CFA?",
            description:
              <div>CFA全称Chartered Financial Analyst (特许注册金融分析师)，作为全球投资业最为严格与高含金量的资格认证，被称为金融第一考试，为全球投资业在道德操守、专业标准及知识体系等方面设立了规范与标准。自1962年设立CFA考试以来，对投资知识、准则及道德设立了全球性标准， 《金融时报》杂志与2006年将CFA专业资格比喻成投资专才的黄金标准。 <br/> CFA考试通常分为3级，CFA 1级在每年6月和12月分别设置考试，CFA 2级和3级每年仅在6月设置考试。</div>
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
            large: "82",
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
          heading: {
            title: '课程$$设置',
          },
          titleTag: '火速占位中',
          tabs: [
            {
              name: "CFA一级证书保过班",
              cards: [
                {
                  title: "CFA一级保过班",
                  topBody: {
                      minHeight: 250,
                      data: [
                      "海量学习资料，超过10万字的独家研发学习资料，全方位透析考点",
                      "真题详解，独家整理2500道往届真题，210小时的详细解题过程，不给疑问留机会",
                      "拥有专属学习规划导师，督学导师规划专属CFA学习方案",
                      "5位名校金融精英导师，团队平均授课时长超过5年及以上，大量金融实战背景帮助同学拆解难点",
                      "治好“拖延症”，简历专属学术大一群，群内进行实时答疑，监督作业及学习进程",
                      "蝉联多年超高通过率，常年通过率维持在80%以上，为CFA官方通过率的两倍"
                      ]
                    },
                  times: [
                    {
                      end: new Date("June 24,2019"),
                      dates: [new Date("Jan 24,2019"), new Date("Feb 24,2019"), new Date("Mar 24,2019")]
                    },
                    {
                      end: new Date("Dec 24,2019"),
                      dates: [new Date("July 24,2019"), new Date("Aug 24,2019"), new Date("Sept 24,2019")]
                    }
                  ],
                  link: '../courses/CFA-Level-1'
                },
                {
                  title: "考前百题冲刺班",
                  topBody: {
                    minHeight: 250,
                    data: [
                      "21小时的突击课程，300+模拟真题，教学团队实时答疑",
                      "无死角梳理知识点，为你考前查漏补缺",
                      "1次全真模拟考试，3小时的模考解析",
                      "真实考试场景还原，让你为考试做好热身准备"
                    ]
                  },
                  times: [
                    {
                      end: new Date("June 24,2019"),
                      dates: [new Date("May 24,2019"),]
                    },
                    {
                      end: new Date("Dec 24,2019"),
                      dates: [new Date("Nov 24,2019")]
                    }
                  ],
                  link: '../courses/CFA-Level-1'
                }
              ]
            },
            {
              name: "CFA二级证书保过班",
              cards: [
                {
                  title: "CFA二级证书保过全程班",
                  topBody: {
                    minHeight: 250,
                    data: [
                      '系统化的保过课程，包含CFA 二级考试的全部知识点',
                      '无死角梳理课程理论，5年CFA易错点难点剖析',
                      '4名拥有3年以上教课经验的老师一同代课，学习小组互相督促',
                      '专门配备的CFA班主任老师为大家实时答疑',
                      '海量精选模拟真题，真实考试场景还原',
                      '线上、线下两种模式，配套讲义，视频与作业',
                    ]
                  },
                  times: [
                    {
                      end: new Date("Jun 24,2019"),
                      dates: [new Date("Jan 24,2019"), new Date("Feb 24,2019"), new Date("Mar 24, 2019")]
                    },
                  ],
                  link: '../courses/CFA-Level-2'
                },
              ]
            }
          ]
        }
      }
    ]
  };
  constructor() {
    super("CFA", "CFA 证书班", ["CFA-Level-1", "CFA-Level-2"], 2);
  }
}

// class Python extends Program {
//   icon = {
//     webp: {
//       1: require("../../..//static/pages/programs/icons/python.png?webp"),
//       2: require("../../..//static/pages/programs/icons/python.png?webp")
//     },
//     jpeg: {
//       1: require("../../../static/pages/programs/icons/python.png?resize&size=40"),
//       2: require("../../../static/pages/programs/icons/python.png?resize&size=60")
//     }
//   };
//   constructor() {
//     super("Python", "Python", ["Python"]);
//   }
// }

// class SQL extends Program {
//   icon = {
//     webp: {
//       1: require("../../..//static/pages/programs/icons/sql.png?webp"),
//       2: require("../../..//static/pages/programs/icons/sql.png?webp")
//     },
//     jpeg: {
//       1: require("../../../static/pages/programs/icons/sql.png?resize&size=40"),
//       2: require("../../../static/pages/programs/icons/sql.png?resize&size=60")
//     }
//   };
//   constructor() {
//     super("SQL", "SQL", ["SQL"]);
//   }
// }

// class SAS extends Program {
//   icon = {
//     webp: {
//       1: require("../../..//static/pages/programs/icons/sas.png?webp"),
//       2: require("../../..//static/pages/programs/icons/sas.png?webp")
//     },
//     jpeg: {
//       1: require("../../../static/pages/programs/icons/sas.png?resize&size=40"),
//       2: require("../../../static/pages/programs/icons/sas.png?resize&size=60")
//     }
//   };
//   constructor() {
//     super("SAS", "SAS", ["Base+Advance", "SASProject"]);
//   }
// }
// class Networking extends Program {
//   icon = {
//     webp: {
//       1: require("../../..//static/pages/programs/icons/socialmedia.png?webp"),
//       2: require("../../..//static/pages/programs/icons/socialmedia.png?webp")
//     },
//     jpeg: {
//       1: require("../../../static/pages/programs/icons/socialmedia.png?resize&size=40"),
//       2: require("../../../static/pages/programs/icons/socialmedia.png?resize&size=60")
//     }
//   };
//   constructor() {
//     super("Networking", "Networking", ["Networking"]);
//   }
// }

// class FRM extends Program {
//   icon = {
//     webp: {
//       1: require("../../..//static/pages/programs/icons/frm.png?webp"),
//       2: require("../../..//static/pages/programs/icons/frm.png?webp")
//     },
//     jpeg: {
//       1: require("../../../static/pages/programs/icons/frm.png?resize&size=40"),
//       2: require("../../../static/pages/programs/icons/frm.png?resize&size=60")
//     }
//   };
//   constructor() {
//     super("FRM", "FRM证书", ["FRM"]);
//   }
// }

// class Tableau extends Program {
//   icon = {
//     webp: {
//       1: require("../../..//static/pages/programs/icons/tableau.png?webp"),
//       2: require("../../..//static/pages/programs/icons/tableau.png?webp")
//     },
//     jpeg: {
//       1: require("../../../static/pages/programs/icons/tableau.png?resize&size=40"),
//       2: require("../../../static/pages/programs/icons/tableau.png?resize&size=60")
//     }
//   };
//   constructor() {
//     super("Tableau", "Tableau", ["Tableau"]);
//   }
// }
// class CSC extends Program {
//   icon = {
//     webp: {
//       1: require("../../..//static/pages/programs/icons/csc.png?webp"),
//       2: require("../../..//static/pages/programs/icons/csc.png?webp")
//     },
//     jpeg: {
//       1: require("../../../static/pages/programs/icons/csc.png?resize&size=40"),
//       2: require("../../../static/pages/programs/icons/csc.png?resize&size=60")
//     }
//   };
//   constructor() {
//     super("CSC", "CSC证书", ["CSC"]);
//   }
// }

export const programs: (Program & {
  page?: TemplateRenderProps;
})[] = [
  new Excel(),
  new CFA(),
  new Python(),
  new SQL(),
  new SAS(),
  new Networking(),
  new FRM(),
  // new Tableau(),
  new CSC()
];
