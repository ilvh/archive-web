import { Course } from "../data";
export const CFALevel1: Course = {
  backgroundImage: {
    webp: {
      1: require("../../../static/pages/programs/cfa.jpg?webp"),
      2: require("../../../static/pages/programs/cfa.jpg?webp")
    },
    jpeg: {
      1: require("../../../static/pages/programs/cfa.jpg?resize&size=1500"),
      2: require("../../../static/pages/programs/cfa.jpg?resize&size=2000")
    }
  },
  id: "CFA-Level-1",
  name: "CFA一级证书保过班",
  cmsId: 3,
  bannerInfo: {
    courseDetails: 'CFA一级(12月考试) 9月全程班',
    dateAndPlace: '美东时间2019年9月8日开课  |  多伦多  |  线上',
    price: 2000,
    discountedPrice: 1480,
    extraInfo: '',
    chatBubble: '早报名，惊喜优惠',
    buttonInfo: '惊喜价！不容错过！'
  },
  video: {
    link: 'https://savvyuni-web.s3.amazonaws.com/banners/CFA_banner_new.mp4',
    poster: "../../../static/pages/programs/defaultBanner.jpg"
  },
  description:
    "SavvyPro CFA一级证书班作为面向CFA 一级考试的课程，全面梳理知识理论 ，无死角剖析考试重难点，通过科学的课程设计和大量的真题模拟练习，保证学生即使零基础，也能够轻松通过考试。",
  link: './courses/CFA-Level-1',
  types: ["online"],
  page: {
    twoLayerSectionList: [
      {
        heading: {
          title: "课程$$介绍",
          subTitle: "为什么选择$$我们?"
        },
        template: {
          type: "TemplateInfoSectionWithStats",
          data: {
            heading: {},
            body: [
              "海量学习资料，超过10万字的独家研发学习资料，全方位透析考点",
              "真题详解，独家整理2500道往届真题，210小时的详细解题过程，不给疑问留机会",
              "拥有专属学习规划导师，督学导师规划专属CFA学习方案",
              "5位名校金融精英导师，团队平均授课时长超过5年及以上，大量金融实战背景帮助同学拆解难点",
              "治好“拖延症”，简历专属学术大一群，群内进行实时答疑，监督作业及学习进程",
              "蝉联多年超高通过率，常年通过率维持在80%以上，为CFA官方通过率的两倍",
            ],
            video: {
              cover: {
                webp: {
                  1: require("../../../static/pages/courses/cfa/videoCover.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/videoCover.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/videoCover.jpg?resize&size=500"),
                  2: require("../../../static/pages/courses/cfa/videoCover.jpg?resize&size=700")
                }
              },
              videoId: "https://savvyuni-web.s3.amazonaws.com/%E8%AF%BE%E5%A0%82%E7%B2%BE%E5%BD%A9%E7%89%87%E6%AE%B5+CFA%E8%80%81%E5%B8%88%E4%B8%BA%E4%BD%A0%E8%AE%B2%E8%BF%B0Ethics%E7%9A%84%E7%B2%BE%E9%AB%93.mp4",
              caption: "想要试听完整公开课？$$联系客服",
              text: "5分钟免费公开课试听"
            },
            ban: {
              card: {
                first: "SavvyPro学员CFA",
                second: "一次通过率",
                large: "82",
                symbol: "%",
                bottom: "(是大约CFA官方通过率的两倍)"
              },
              infos: [
                {
                  big: "126",
                  small: "总计课程小时"
                },
                {
                  big: "35",
                  small: "课节总数"
                },
                {
                  big: "2500+",
                  small: "道真题讲解"
                }
              ]
            }
          }
        },
        sections: [
          {
            heading: {
              title: "课程$$时间"
            },
            type: "TemplateClassesTab",
            data: {
              heading: {},
              tabs: [
                {
                  name: "线上课程",
                  cards: [
                    {
                      title: "CFA2020年12月一级备考",
                      classes: [
                        {
                          name: "7月CFA一级备考",
                          address: "720 Spadina Ave, Unit 310",
                          date: new Date("July 6, 2019")
                        },
                        {
                          name: "8月CFA一级备考",
                          address: "720 Spadina Ave, Unit 310",
                          date: new Date("Aug 04, 2019")
                        },
                        {
                          name: "9月CFA一级备考",
                          address: "720 Spadina Ave, Unit 310",
                          date: new Date("Sept 08, 2019")
                        }
                      ]
                    }
                  ]
                },
                // {
                //   name: "线上课程",
                //   cards: [
                //     {
                //       title: "CFA2019年12月一级备考",
                //       classes: [
                //         {
                //           name: "7月CFA一级备考",
                //           // address: "720 Spadian Ave, Unit 310",
                //           date: new Date("July 6, 2019")
                //         },
                //         {
                //           name: "8月CFA一级备考",
                //           // address: "720 Spadian Ave, Unit 310",
                //           date: new Date("Aug 04, 2019")
                //         },
                //         {
                //           name: "9月CFA一级备考",
                //           // address: "720 Spadian Ave, Unit 310",
                //           date: new Date("Sept 08, 2019")
                //         }
                //       ]
                //     }
                //   ]
                // }
              ]
            }
          },
          {
            heading: {
              title: "课程$$大纲",
              description: "涵盖CFA考试全部考点，无死角扫盲重难点"
            },
            type: "TemplateAccordian",
            data: {
              heading: {},
              tabs: [
                {
                  name: "",
                  items: [
                    {
                      name: "定量分析 (Quantitative)",
                      body:
                        "以数量工具测算投资组合关联性，概率统计、为设定合理理性的投资规划提供技术支撑。在一级二级考试中是考试占比较大的考试科目，主要是计算方法的考核。"
                    },
                    {
                        name: "经济学 (Economics)",
                        body:
                          "经济学课程以经典宏观、微观经济学内容讲解弹性、价格曲线、生产者剩余、消费者剩余、垄断和市场形态，宏观金融政策和中央银行等知识，让考生了解经济运行的宏观和微观经济知识。所占考试比重在10%左右，考试形式为垄断或经济影响的定性判断的单选题。"
                      },
                      {
                        name: "财务报表分析 (Financial Statement Analysis)",
                        body:
                          "财务报表是一级二级的考试重点，内容涉及三大会计报表，现金流量测控，养老会计、管理会计、税收规避FACC等会计术语，考试难度不大，并且现在的考核方式更加灵活。一级二级中财务报表是重点科目，占比考试20%左右，权重较大。"
                      },
                      {
                        name: "伦理与职业准则 (Ethics and Professional Standards)",
                        body:
                          "提高从业人员的职业和道德素养，特别是国际上对受托人的责任的要求，降低了公司内部人员职业违规方面的风险，同时提升公司内部的整体职业素养，由此提高公司整体的管治。"
                      },
                      {
                        name: "投资组合管理 (Portfolio Management)",
                        body:
                          "投资组合管理旨在是给人了解投资组合业务进行的整个流程，如何配合客户需求，计算回报、厘定风险，运用投资组合管理理论作资产分配、分散风险、并且定时作出检讨如何利用投资组合法，提升保险公司资产管理水平。"
                      },
                      {
                        name: "公司理财 (Corporate Finance)",
                        body:
                          "公司理财详细地介绍了资本的成本，使公司规划出最合适的资本结构，来获得资本的收益。在制定资本预算是，可作出正确的现金流量估计和风险分析，从而作出正确的决定。在决定股利政策时，充分了解其中的资讯和意义。深入了解如何实现公司融资结构与投资结构化。"
                      },
                      {
                        name: "权益证券分析 (Equity Investments)",
                        body:
                          "权益证券分析详细介绍了上市、集资时的定价流程，在收购合并时该付出多少。也可在评估过程中了解行业的前景，从而作出正确的商业决定，一级并购行动中，如何评估企业的价值。"
                      },
                      {
                        name: "固定收益证券 (Fixed Income)",
                        body:
                          "权益证券分析详细介绍了上市、集资时的定价流程，在收购合并时该付出多少。也可在评估过程中了解行业的前景，从而作出正确的商业决定，一级并购行动中，如何评估企业的价值。"
                      },
                      {
                        name: "衍生品投资 (Ethics and Professional Standards)",
                        body:
                          "金融衍生品详细介绍如何面对现金大幅波动的金融、商品市场，运用各种衍生工具作风险管理，对冲风险和减少损失。反之，亦可作投机炒卖或作套活动。"
                      },
                      {
                        name: "另类投资 (Alternative Investments)",
                        body:
                          "另类投资详细介绍了非传统的投资工具，如对冲基金、风险投资基金和房地产信托基金等等，同时认识投资这些工具面对的风险。"
                      },
                  ]
                }
              ]
            }
          }
        ]
      },

      {
        heading: {
          title: "讲师介绍",
          description: "雄厚师资力量，来自顶尖金融机构的导师为你保驾护航"
        },
        template: {
          type: "TemplateCardBannerSlider",
          data: {
            heading: {},
            image: {
              webp: {
                1: require("../../../static/pages/courses/cfa/cardBanner.jpg?webp"),
                2: require("../../../static/pages/courses/cfa/cardBanner.jpg?webp")
              },
              jpeg: {
                1: require("../../../static/pages/courses/cfa/cardBanner.jpg?resize&size=1500"),
                2: require("../../../static/pages/courses/cfa/cardBanner.jpg?resize&size=2000")
              }
            },
            cards: [
              {
                title: "Leon",
                description: "多伦多大学MBA, BMO银行Manager, \nCFA一级导师",
                body: {
                  minHeight: 305,
                  data:  <div style={{ lineHeight: 1.8 }}>新加坡南洋理工大学生物工程学士，多伦多大学MBA, 加拿大五大行BMO银行Manager, 负责 Aggregate Model Risk，制定Model Risk架构等工作。<br/>作为CFA的一级导师，具有大量的教学经验，上课风趣幽默，已经帮助超过百名同学高分通过CFA考试 </div>
                }
              },
              {
                title: "Sophia",
                description: "CFA & FRM持证人，多伦多大学MFE, \nCPPIB负责债券投资",
                body:
                {
                  minHeight: 305,
                  data: <div style={{ lineHeight: 1.8 }}>研究生毕业于多伦多大学 Master of Financial Economics(MFE)专业，CFA&FRM 持证人。现就职于加拿大最大的私募基金之一CPPIB, 主要负责债券类投资的Portfolio Construction Management和 Business Management。<br/>作为CFA一级授课导师，主要负责Economics Equity Investments 和Portfolio Managment部分，理论知识扎实，教学经验丰富。</div>

                }
              },
              {
                title: "Jasmine",
                description: <div style={{ lineHeight: 1.8 }}>CSC & IFC持证人, CFA会员 <br/>RBC Bank Financial Advisor</div>,
                body: {
                  minHeight: 305,
                  data: <div style={{ lineHeight: 1.8 }}>本科毕业于多伦多大学 Rotman Commerce Finance专业，研究生毕业于皇后大学 Master of Finance。现就职于加拿大五大行 RBC Financial Advisor, 曾就职于加拿大五大行TD Bank Wealth Management 部门。<br/> 曾在高顿教育任职CFA培训讲师，为国内各大高校财会学生提供CFA培训，具有丰富财会培训经验，以及丰富的备考实战经验。</div>
                }
              },
              {
                title: "Lingjie",
                description: <div style={{ lineHeight: 1.8 }}>CFA持证人，TD Bank Risk Managment</div>,
                body: {
                  minHeight: 305,
                  data: <div style={{ lineHeight: 1.8 }}>
                  研究生毕业于加拿大皇后大学Master of Finance，CFA持证人，目前就职于加拿大五大行TD银行，负责Risk Management。曾在中国招商银行担任理财师，为高净值客户搭建Portfolio并随时根据市场情况调整。
                  <br/>CFA一级考试中主要负责Quant和Fixed Income部分，在教授理论同时，积极与学员分享自己丰富的工作经验以及在不同背景银行的工作经历，为学生就业提供建议与帮助。
                 </div>
                }
              },
              {
                title: "Mia",
                description: <div style={{ lineHeight: 1.8 }}>多伦多大学Rotman金融风险管理硕士，TD Bank Risk Analysit</div>,
                body: {
                  minHeight: 305,
                  data: <div style={{ lineHeight: 1.8 }}>
                  本科毕业于多伦多大学金融专业，研究生毕业于多伦多大学Rotman商学院金融风险管理。在读期间一直担任不同学科的助教，教学与备考实战经验丰富。
                  <br/>现就职于加拿大五大行TD银行Risk Analyst, 曾在RBC任职Risk Modelling Analyst, Ontario Financing Authority，DeBeers任职Financial Analyst. 
                </div>
                }                 
              },
            ]
          }
        },
        sections: []
      },
      {
        heading: {
          title: "学员$$反馈",
          subTitle: "学员真实好评，$$口碑保障"
        },
        sections: [],
        template: {
          type: "TemplateFullImageSlider",
          data: {
            heading: {},
            cards: [
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/001.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/001.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/001.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/001.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/002.png?webp"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/002.png?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/002.png?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/002.png?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/003.png?webp"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/003.png?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/003.png?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/003.png?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/004.png?webp"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/004.png?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/004.png?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/004.png?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/005.png?webp"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/005.png?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/005.png?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/005.png?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/006.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/006.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/006.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/006.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/007.png?webp"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/007.png?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/007.png?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/007.png?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/008.png?webp"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/008.png?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/008.png?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/008.png?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/009.png?webp"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/009.png?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/009.png?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/009.png?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/010.png?webp"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/010.png?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/010.png?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/010.png?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/011.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/011.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/011.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/011.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/012.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/012.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/012.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/012.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/013.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/013.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/013.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/013.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/014.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/014.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/014.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/014.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/015.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/015.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/015.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/015.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/016.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/016.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/016.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/016.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/017.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/017.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/017.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/017.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/018.png?webp"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/018.png?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/studentFeedBack/018.png?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/studentFeedBack/018.png?resize&size=600")
                }
              }
            ]
          }
        }
      },
      {
        heading: { title: "", subTitle: "" },
        template: {
          type: "TemplateIconCarArrows",
          data: {
            heading: {},
            cards: [
              // {
              //   icon: "register",
              //   title: "注册登陆",
              //   info: "新学员请先注册我的账户"
              // },
              // {
              //   icon: "buycourse",
              //   title: "购买课程",
              //   info: "付款后课程会添加到我的课程里"
              // },
              // {
              //   icon: "joinclass",
              //   title: "加入班级群",
              //   info: "开课前两三天，客服建立群组"
              // },
              // {
              //   icon: "thick-classteacher",
              //   title: "添加班主任",
              //   //info: <div style={{ lineHeight: 2, textAlign: 'center', marginLeft: 54, marginRight: 53 }}>入群后请添加班主任微信号，班主任负责售后服务</div>
              //   info: "入群后请添加班主任微信号，班主任负责售后服务"
              // },
              // {
              //   icon: "fillform",
              //   title: "填写课前调查表",
              //   //info: <div style={{ lineHeight: 2, textAlign: 'center', marginLeft: 51, marginRight: 51 }}>了解学生学习背景，更好因材施教，及时调整课程设置</div>
              //   info: "了解学生学习背景，更好因材施教，及时调整课程设置"
              // },
              // {
              //   icon: "learn",
              //   title: "开始学习",
              //   //info: <div style={{ lineHeight: 2, textAlign: 'center', marginLeft: 17.5, marginRight: 16.5 }}>每节课的学习都配有相对的讲义和练习，线下课同学可以参加线上补课</div>
              //   info: "每节课的学习都配有相对的讲义和练习，线下课同学可以参加线上补课"
              // },
              // {
              //   icon: "moneyback",
              //   title: "打卡获取奖学金",
              //   //info: <div style={{ lineHeight: 2, textAlign: 'center', marginLeft: 46.5, marginRight: 46.5 }}>坚持上课作业打卡，学期结束后将获取奖学金</div>
              //   info: "坚持上课作业打卡，学期结束后将获取奖学金"
              // },
              // {
              //   icon: "coupon",
              //   title: "参与回访，获取优惠券",
              //   //info: <div style={{ lineHeight: 2, textAlign: 'center', marginLeft: 31, marginRight: 32 }}>结课后对课程进行评价，参加回访的同学获取优惠券</div>
              //   info: "结课后对课程进行评价，参加回访的同学获取优惠券"
              // }
            ]
          }
        },
        sections: [
          {
            heading: {
              title: "陪伴式学习服务",
              description: "贴心教学服务，保障学习效果"
            },
            type: "TemplateCardBannerSlider2",
            data: {
              heading: {},
              image: {
                webp: {
                  1: require("../../../static/pages/courses/cfa/cardBanner.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/cardBanner.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/cardBanner.jpg?resize&size=1500"),
                  2: require("../../../static/pages/courses/cfa/cardBanner.jpg?resize&size=2000")
                }
              },
              cards: [
                {
                  icon: "teacher-two",
                  title: "独家研发LMS教学系统",
                  description:
                    "LMS教学系统思睿集团自主研发的学生学习管理平台，旨在帮助学生打造便捷，高效的学习体验。"
                },
                {
                  icon: "hrs",
                  title: "专属微信群实时答疑",
                  description: "服务期内不限次数答疑24小时之内解答学生提问"
                },
                {
                  icon: "experiencesharing",
                  title: "独家录播先导课系统",
                  description:
                    "梳理CFA知识点，为之后的CFA 整体系统化学习夯实基础"
                },
                {
                  icon: "homework",
                  title: "海量学习资料",
                  description: "超过10万字SavvyPro 独家研发学习资料，超19小时先导课程，96 小时精讲课程，全方位透析所有考点，无忧通过CFA。"
                }
              ],
              slides: [
                {
                  image: {
                    webp: {
                      1: require("../../../static/pages/courses/cfa/slideImage.png?webp"),
                      2: require("../../../static/pages/courses/cfa/slideImage.png?webp")
                    },
                    jpeg: {
                      1: require("../../../static/pages/courses/cfa/slideImage.png?resize&size=650"),
                      2: require("../../../static/pages/courses/cfa/slideImage.png?resize&size=1050")
                    }
                  },
                  text: "独家研发LMS教学系统"
                },
                {
                  image: {
                    webp: {
                      1: require("../../../static/pages/courses/cfa/slideImage2.png?webp"),
                      2: require("../../../static/pages/courses/cfa/slideImage2.png?webp")
                    },
                    jpeg: {
                      1: require("../../../static/pages/courses/cfa/slideImage2.png?resize&size=650"),
                      2: require("../../../static/pages/courses/cfa/slideImage2.png?resize&size=1050")
                    }
                  },
                  text: "海量学习资料"
                },
                {
                  image: {
                    webp: {
                      1: require("../../../static/pages/courses/cfa/slideImage3.jpg?webp"),
                      2: require("../../../static/pages/courses/cfa/slideImage3.jpg?webp")
                    },
                    jpeg: {
                      1: require("../../../static/pages/courses/cfa/slideImage3.jpg?resize&size=650"),
                      2: require("../../../static/pages/courses/cfa/slideImage3.jpg?resize&size=1050")
                    }
                  },
                  text: "独家录播先导课系统"
                }
              ]
            }
          },
          // {
          //   heading: { title: "我们对你的$$承诺" },
          //   type: "TemplateImageCards",
          //   data: {
          //     heading: {},
          //     cards: [
          //       {
          //         image: {
          //           webp: {
          //             1: require("../../../static/pages/courses/cfa/imageCards/1.png?webp"),
          //             2: require("../../../static/pages/courses/cfa/imageCards/1.png?webp")
          //           },
          //           jpeg: {
          //             1: require("../../../static/pages/courses/cfa/imageCards/1.png?resize&size=650"),
          //             2: require("../../../static/pages/courses/cfa/imageCards/1.png?resize&size=1050")
          //           }
          //         },
          //         title: "开课后6天内不满意，无条件退换课",
          //         description:
          //           "SavvyPro课程以高质量的口碑与优质的服务为目标，我们承诺，第一节课结束后的6天内不满意无条件退换课"
          //       },
          //       {
          //         image: {
          //           webp: {
          //             1: require("../../../static/pages/courses/cfa/imageCards/2.png?webp"),
          //             2: require("../../../static/pages/courses/cfa/imageCards/2.png?webp")
          //           },
          //           jpeg: {
          //             1: require("../../../static/pages/courses/cfa/imageCards/2.png?resize&size=650"),
          //             2: require("../../../static/pages/courses/cfa/imageCards/2.png?resize&size=1050")
          //           }
          //         },
          //         title: "课程有效期内允许多次补课",
          //         description:
          //           "参加线下课的同学在课程有效期内允许多次线下补课，无法参与的也可以申请线上补课。而参加线上课的同学在课程有效期内可以重复多次观看"
          //       },
          //       {
          //         image: {
          //           webp: {
          //             1: require("../../../static/pages/courses/cfa/imageCards/3.png?webp"),
          //             2: require("../../../static/pages/courses/cfa/imageCards/3.png?webp")
          //           },
          //           jpeg: {
          //             1: require("../../../static/pages/courses/cfa/imageCards/3.png?resize&size=650"),
          //             2: require("../../../static/pages/courses/cfa/imageCards/3.png?resize&size=1050")
          //           }
          //         },
          //         title: "考试没有通过，免费重修",
          //         description:
          //           "如果证书考试没有通过，提供Fail的证明图片或者新一期考试成功报名的截图，即可申请重修，线下同学可以免费补听线下课程，网课同学支付50刀的补课费用，即可参加新一期的线上课程"
          //       }
          //     ]
          //   }
          // },

          {
            heading: { title: "Q&$$A", description: "常见问题" },
            type: "TemplateAccordian",
            data: {
              heading: {title: "he"},
              tabs: [
                {
                  name: "",
                  items: [
                    {
                      name: "QA 1: 对课程不满意可以退款或换成网课吗？",
                      body: `第一节课可做试听课。（无论是否出勤第一节课）如需退课：请在第一节课后的六天内，
                      联系学习督导员或课程班主任说明情况，既可无条件全额退款。插班报名课程的退课有效期Enroll
                      课程后24小时内。` ,
                    },
                    {
                      name: "QA 2: 课程的有效期是多久呢？",
                      body: `参加当期课程均可参加直播（教室）和网课（录播）两种上课形式。课程有效期内可以回
                      放观看课程且不限次数。【课程有效期为当期课程结束当日+21天】` ,
                    },
                    {
                      name: "QA 3: 我们是如何上课的？",
                      body: `参加当期课程均可参加直播（教室）和网课（录播）两种上课形式。课程有效期内可回放
                      观看课程且不限次数。【课程有效期为当期课程结束当日+21天】`
                    },
                    {
                      name: "QA 4: 我报名了CFA课程，如果没考过怎么办？",
                      body: `如果需要重新报名参加考试，请将重新注册好的带有考试日期的报名完成截图发给班主任，并申请加入
                      针对最新考试时间最近的新的班级进行免费补听。`,
                    },
                    {
                      name: "QA 5: 是否可以提供报销凭证？",
                      body: "鼓励大家积极与公司沟通，报销课程学费，如需报销，请联系小助手说明情况，获取正式的报销信。"
                    }
                  ]
                },
              ]
            }
          }
        ]
      },
      // {
      //   heading: {
      //     title: "技能硬，就会在求职中$$出彩",
      //     description:
      //       "大学经常使用Excel/VBA写作业，但进入职场后，面对真实的工作项目依然不知道如何下手。面对纷繁复杂的数据，如何高效率地完成项目，作出让老板眼前一亮的报告，ExcelVBA一定是你职场的必备武器。"
      //   },
      //   template: {
      //     type: "TemplateGradientCards",
      //     data: {
      //       heading: {},
      //       cards: [
      //         {
      //           title: "Excel",
      //           description:
      //             "从数据获取、操作、分析到展现，告别重复枯燥的数据整理工作，快速数据建模分析，高效率产出企业级分析报告。"
      //         },
      //         {
      //           title: "VBA",
      //           description:
      //             "编程自动化生成报告，表单，图表，Pivot Table 用户界面以及最终生成Email定时发给对应联系人。"
      //         },
      //         {
      //           title: "实战",
      //           description:
      //             "不仅仅局限于纸上谈兵，更多的是利用Excel/VBA解决工作中的实际问题，大量基于真实场景的商业案例，让你在实操中技能快速提升。"
      //         }
      //       ]
      //     }
      //   },
      //   sections: []
      // },
      // {
      //   heading: {
      //     title: "课程$$设置"
      //   },
      //   template: {
      //     type: "TemplateInfoCardTab",
      //     data: {
      //       heading: {},
      //       titleTag: "火热占位中",
      //       tabs: [
      //         {
      //           name: "CFA一级证书保过班",
      //           cards: [
      //             {
      //               title: "CFA一级全程班",
      //               topBody:
      //                 "Excel-VBA实战班是一个面向零基础学员开设的，课程内容包括Excel和VBA中的重要操作技能，以及一个完整的Business Loan的Case Study与多个Project的练习。",
      //               times: [
      //                 {
      //                   end: new Date("Dec 24,2019"),
      //                   dates: [
      //                     new Date("Jan 24,2019"),
      //                     new Date("Feb 24,2019")
      //                   ]
      //                 },
      //                 {
      //                   end: new Date("Dec 24,2019"),
      //                   dates: [
      //                     new Date("Jan 24,2019"),
      //                     new Date("Feb 24,2019")
      //                   ]
      //                 }
      //               ]
      //             },
      //             {
      //               title: "考前百题冲刺班",
      //               topBody:
      //                 "Excel-VBA实战班是一个面向零基础学员开设的，课程内容包括Excel和VBA中的重要操作技能，以及一个完整的Business Loan的Case Study与多个Project的练习。",
      //               times: [
      //                 {
      //                   end: new Date("Dec 24,2019"),
      //                   dates: [
      //                     new Date("June 24,2019"),
      //                     new Date("Feb 24,2019")
      //                   ]
      //                 }
      //               ]
      //             }
      //           ]
      //         }
      //       ]
      //     }
      //   },
      //   sections: []
      // }
    ]
  }
};
