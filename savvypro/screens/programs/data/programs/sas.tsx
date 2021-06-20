import { Program, ProgramIDS, withPage } from "../core";
import { TemplateRenderProps } from "../../../../components/template";
export class SAS extends Program implements withPage {
  icon = {
    webp: {
      1: require("../../../../static/pages/programs/icons/sas.png?webp"),
      2: require("../../../../static/pages/programs/icons/sas.png?webp")
    },
    jpeg: {
      1: require("../../../../static/pages/programs/icons/sas.png?resize&size=40"),
      2: require("../../../../static/pages/programs/icons/sas.png?resize&size=60")
    }
  };
  video = {
    link: 'https://savvyuni-web.s3.amazonaws.com/banners/SAS_banner.mp4',
    poster: "../../../../static/pages/programs/sas.png"
  };
  page: TemplateRenderProps = {
    sectionList: [
      {
        type: "TemplateGradientCards",
        data: {
          heading: {
            title: "分析师入行的$$基础技能",
            description: 
              <div>
                SAS证书课程是为想要进入金融行业做数据分析的毕业生准备的证书及技能培训课程，SAS证书作为一个全球认证，并且终身有效的证书，不仅仅是收到金融分析职位面试和Offer的必备证书，也是实际工作中需要的必备技能。
                <div style={{ marginTop: 50 }}>在成功通过SAS Base和Advance证书后，SavvyPro同时提供SAS实战课程，帮助已有SAS基础知识的学员增加实战的编程经验，旨在6周内帮助学生掌握SAS常用编程技巧，从而能够自己独立解决工作中的常见问题，做到学以致用。</div>
              </div>
          },
          cards: []
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
              name: "SAS",
              cards: [
                {
                  title: "SAS Base+Advance 证书班",
                  topBody: {
                    minHeight: 150,
                    data: "SAS证书班是一个面向零基础学员开设的，旨在短期内帮助学生顺利通过SAS Base和Advance的证书，提高简历的含金量。课程包括Base+Advance两个证书的全部内容，包括理论知识，实战练习以及老师独家整理的500+真题。",
                  },
                  times: [
                    {
                      course: 'sas',
                      end: new Date("Oct 15,2019"),
                      dates: [
                        new Date("Jan 24,2019"),
                        new Date("Feb 24,2019")
                      ],
                    },
                  ],
                  link: '../courses/SAS-Base-1'
                },
                {
                  title: "SAS Project 实战班（仅限线上）",
                  topBody: {
                    minHeight: 150,
                    data: "SAS实战班适合已经有SAS基础知识（Base+Advance证书），但缺少SAS编程经验的学员，这门课程旨在帮助学员在通过6周，每周1节课的学习，快速掌握工作中常用的SAS编程技巧，真正做到学以致用。课程包括8个Case Study,通过解决工作中的实际问题来学习编程。",
                  },
                  times: [
                    {
                      course: 'sas',
                      end: new Date("Sept 18,2019"),
                      dates: [
                        new Date("June 24,2019"),
                        new Date("Feb 24,2019")
                      ],
                    }
                  ],
                  link: '../courses/SASProject'
                }
              ]
            }
          ]
        }
      },
    ]
  };
  constructor() {
    super("SAS", "SAS证书班", ["SAS-Base-1", "SASProject"], 5);
  }
}
