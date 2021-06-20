  import { Program, ProgramIDS, withPage } from "../core";
  import { TemplateRenderProps } from "../../../../components/template";
  export class CSC extends Program implements withPage {
    icon = {
      webp: {
        1: require("../../../../static/pages/programs/icons/csc.png?webp"),
        2: require("../../../../static/pages/programs/icons/csc.png?webp")
      },
      jpeg: {
        1: require("../../../../static/pages/programs/icons/csc.png?resize&size=40"),
        2: require("../../../../static/pages/programs/icons/csc.png?resize&size=60")
      }
    };
    
    bannerInfo = {
        courseDetails: 'CSC证书10月全程班',
        dateAndPlace: '美东时间2019年10月5日开课  |  多伦多  |  线上',
        price: 749,
        discountedPrice: 599,
        extraInfo: '（开课后6天内无条件退换课）',
        chatBubble: '早报名，惊喜优惠',
        buttonInfo: '惊喜价！不容错过！'
    };

    video = {
      link: "https://savvyuni-web.s3.amazonaws.com/banners/CSC_banner.mp4",
      poster: "../../../../static/pages/programs/csc.png"
    };

    page: TemplateRenderProps = {
      twoLayerSectionList: [
      {
        heading: {
          title: "课程$$介绍",
          subTitle: "CSC进入银行的敲门砖"
        },
        template: {
          type: "TemplateInfoSectionWithStats",
          data: {
            heading: {},
            body: <div style={{ width: '400px', lineHeight: 2, letterSpacing: '1px', fontSize: 14 }}>北美各大金融城市，包括银行，保险机构在内的金融公司每年都有大量的职位，加之金融领域工作具有稳定，高福利，养老计划等优势，使之成为最适合技术移民的工作之一，而CSC证书适用于广泛的银行工作, 如前台直接面对客户的服务工作，后台的风险管理，技术支持（包括IT类），日常业务管理与分析，金融/财务分析，证券分析与交易领域等工作。通过CSC考试成为进入银行或金融领域工作的敲门砖。</div>,
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
              videoId: "https://savvyuni-web.s3.amazonaws.com/CSC+Lec1+20190120.mp4",
              caption: "想要试听完整公开课？$$联系客服",
              text: "5分钟免费公开课试听"
            },
            ban: {
              card: {
                first: "SavvyPro学员CSC",
                second: "一次通过率",
                large: "85",
                symbol: "%",
              },
              infos: [
                {
                  big: "48",
                  small: "总计课程小时"
                },
                {
                  big: "16",
                  small: "课节总数"
                },
                {
                  big: "500+",
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
                      title: "CSC证书班",
                      classes: [
                        {
                          name: "10月全程班",
                          // address: "720 Spadian Ave, Unit 310",
                          date: new Date("Oct 5, 2019")
                        },
                      ]
                    }
                  ]
                }
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
                      name: "Lecture 1 The Canadian Market Place and The Economy",
                      body: ""                    },
                    {
                        name: "Lecture 2 Features and Types of Fixed-incoming Securities",
                        body: ""                      },
                      {
                        name: "Lecture 3 Pricing and Trading of Fixed-Income ",
                        body: ""
                      },
                      {
                        name: "Lecture 4 Common and Preferred Shares & Equity Transactions",
                        body: ""                      },
                      {
                        name: "lecture 5 Derivatives ",
                        body: ""                      },
                      {
                        name: "Lecture 6 Corporate Finance and Financial Statements",
                        body: ""                      },
                      {
                        name: "Lecture 7 Volume | 复习",
                        body: ""
                      },
                      {
                        name: "Lecture 8 Volume | 模考复习",
                        body: ""
                      },
                      {
                        name: "Lecture 9 Investment Analysis and Portfolio Analysis",
                        body: ""
                      },
                      {
                        name: "Lecture 10 Mutual Funds",
                        body: ""
                      },
                      {
                        name: "Lecture 11 Exchange Traded Fund (ETF)",
                        body: ""
                      },
                      {
                        name: "Lecture 12 Other Managed Products and Structured Productss",
                        body: ""
                      },
                      {
                        name: "Lecture 13 Canadian Taxation & Fee-Based Accounts",
                        body: ""
                      },
                      {
                        name: "Lecture 14 Working With Retail and Institution Clients",
                        body: ""
                      },
                      {
                        name: "Lecture 15 Volume || 复习",
                        body: ""
                      },
                      {
                        name: "Lecture 16 Volume || 模考解析",
                        body: ""
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
                1: require("../../../../static/pages/courses/cfa/cardBanner.jpg?webp"),
                2: require("../../../../static/pages/courses/cfa/cardBanner.jpg?webp")
              },
              jpeg: {
                1: require("../../../../static/pages/courses/cfa/cardBanner.jpg?resize&size=1500"),
                2: require("../../../../static/pages/courses/cfa/cardBanner.jpg?resize&size=2000")
              }
            },
            cards: [
              {
                title: "Murphy",
                description: 'TD银行高净值客户经理',
                body:  {
                  minHeight: 200,
                  data: <div style={{ minHeight: 1.8 }}>毕业于多伦多大学金融专业，拥有多年在Retail Banking工作经验，从银行职员一路今生至资深客户经理。目前就职于加拿大五大行中的TD银行，为公司注册财务规划，为高净值客户提供金融服务。<br/>作为CSC证书班的授课老师，上课通俗易懂幽默风趣，曾帮助多届学生高效高分成功通过CSC考试，并帮助多名同学成功进入银行斩获Offer。</div>
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
                  1: require("../../../../static/pages/courses/cfa/wechat/csc/csc1.jpg?webp"),
                  2: require("../../../../static/pages/courses/cfa/wechat/csc/csc1.jpg?webp")
                },
                jpeg: {
                  1: require("../../../../static/pages/courses/cfa/wechat/csc/csc1.jpg?resize&size=400"),
                  2: require("../../../../static/pages/courses/cfa/wechat/csc/csc1.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../../static/pages/courses/cfa/wechat/csc/csc2.jpg?webp"),
                  2: require("../../../../static/pages/courses/cfa/wechat/csc/csc2.jpg?webp")
                },
                jpeg: {
                  1: require("../../../../static/pages/courses/cfa/wechat/csc/csc2.jpg?resize&size=400"),
                  2: require("../../../../static/pages/courses/cfa/wechat/csc/csc2.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../../static/pages/courses/cfa/wechat/csc/csc3.jpg?webp"),
                  2: require("../../../../static/pages/courses/cfa/wechat/csc/csc3.jpg?webp")
                },
                jpeg: {
                  1: require("../../../../static/pages/courses/cfa/wechat/csc/csc3.jpg?resize&size=400"),
                  2: require("../../../../static/pages/courses/cfa/wechat/csc/csc3.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../../static/pages/courses/cfa/wechat/csc/csc4.jpg?webp"),
                  2: require("../../../../static/pages/courses/cfa/wechat/csc/csc4.jpg?webp")
                },
                jpeg: {
                  1: require("../../../../static/pages/courses/cfa/wechat/csc/csc4.jpg?resize&size=400"),
                  2: require("../../../../static/pages/courses/cfa/wechat/csc/csc4.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../../static/pages/courses/cfa/wechat/csc/csc5.jpg?webp"),
                  2: require("../../../../static/pages/courses/cfa/wechat/csc/csc5.jpg?webp")
                },
                jpeg: {
                  1: require("../../../../static/pages/courses/cfa/wechat/csc/csc5.jpg?resize&size=400"),
                  2: require("../../../../static/pages/courses/cfa/wechat/csc/csc5.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../../static/pages/courses/cfa/wechat/csc/csc6.jpg?webp"),
                  2: require("../../../../static/pages/courses/cfa/wechat/csc/csc6.jpg?webp")
                },
                jpeg: {
                  1: require("../../../../static/pages/courses/cfa/wechat/csc/csc6.jpg?resize&size=400"),
                  2: require("../../../../static/pages/courses/cfa/wechat/csc/csc6.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../../static/pages/courses/cfa/wechat/csc/csc7.jpg?webp"),
                  2: require("../../../../static/pages/courses/cfa/wechat/csc/csc7.jpg?webp")
                },
                jpeg: {
                  1: require("../../../../static/pages/courses/cfa/wechat/csc/csc7.jpg?resize&size=400"),
                  2: require("../../../../static/pages/courses/cfa/wechat/csc/csc7.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../../static/pages/courses/cfa/wechat/csc/csc8.jpg?webp"),
                  2: require("../../../../static/pages/courses/cfa/wechat/csc/csc8.jpg?webp")
                },
                jpeg: {
                  1: require("../../../../static/pages/courses/cfa/wechat/csc/csc8.jpg?resize&size=400"),
                  2: require("../../../../static/pages/courses/cfa/wechat/csc/csc8.jpg?resize&size=600")
                }
              },
            ]
          }
        }
      },
      {
        heading: { title: "课程$$服务", subTitle: "上课$$流程" },
        template: {
          type: "TemplateIconCarArrows",
          data: {
            heading: {},
            cards: [
              {
                icon: "register",
                title: "注册登陆",
                info: "新学员请先注册我的账户"
              },
              {
                icon: "buycourse",
                title: "购买课程",
                info: "付款后课程会添加到我的课程里"
              },
              {
                icon: "joinclass",
                title: "加入班级群",
                info: "开课前两三天，班主任建立群组"
              },
              {
                icon: "thick-classteacher",
                title: "添加班主任",
                info: "入群后请添加班主任微信号，班主任负责售后服务"
              },
              {
                icon: "fillform",
                title: "填写课前调查表",
                info: "了解学生学习背景，更好因材施教，及时调整课程设置"
              },
              {
                icon: "learn",
                title: "开始学习",
                info: "每节课的学习都配有相对的讲义和练习，线下课同学可以参加线上补课"
              },
              {
                icon: "moneyback",
                title: "打卡获取奖学金",
                info: "坚持上课作业打卡，学期结束后将获取奖学金"
              },
              {
                icon: "coupon",
                title: "参与回访，获取优惠券",
                info: "结课后对课程进行评价，参加回访的同学获取优惠券"
              }
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
                  1: require("../../../../static/pages/courses/cfa/cardBanner.jpg?webp"),
                  2: require("../../../../static/pages/courses/cfa/cardBanner.jpg?webp")
                },
                jpeg: {
                  1: require("../../../../static/pages/courses/cfa/cardBanner.jpg?resize&size=1500"),
                  2: require("../../../../static/pages/courses/cfa/cardBanner.jpg?resize&size=2000")
                }
              },
              cards: [
                {
                  icon: "teacher-two",
                  title: "班主任责任制",
                  description:
                    "贴心的服务与及时的监督，帮助你克服惰性，顺利完成学习"
                },
                {
                  icon: "experiencesharing",
                  title: "职场经验分享",
                  description: "导师现身分享职场经验，帮你解决实战中的困惑"
                },
                {
                  icon: "hrs",
                  title: "24小时答疑解惑",
                  description:
                    "知识盲点，作业难题，导师与助教专业评讲为你全方位答疑"
                },
                {
                  icon: "homework",
                  title: "作业批改讲评",
                  description: "及时的作业批改与反馈，保证对知识点的及时消化"
                }
              ],
              slides: [
                {
                  image: {
                    webp: {
                      1: require("../../../../static/pages/courses/cfa/slideImage.jpg?webp"),
                      2: require("../../../../static/pages/courses/cfa/slideImage.jpg?webp")
                    },
                    jpeg: {
                      1: require("../../../../static/pages/courses/cfa/slideImage.jpg?resize&size=650"),
                      2: require("../../../../static/pages/courses/cfa/slideImage.jpg?resize&size=1050")
                    }
                  },
                  text: "班主任责任制"
                },
                {
                  image: {
                    webp: {
                      1: require("../../../../static/pages/courses/cfa/slide2.jpg?webp"),
                      2: require("../../../../static/pages/courses/cfa/slide2.jpg?webp")
                    },
                    jpeg: {
                      1: require("../../../../static/pages/courses/cfa/slide2.jpg?resize&size=650"),
                      2: require("../../../../static/pages/courses/cfa/slide2.jpg?resize&size=1050")
                    }
                  },
                  text: "职场经验分享"
                },
                {
                  image: {
                    webp: {
                      1: require("../../../../static/pages/courses/cfa/slide3.jpg?webp"),
                      2: require("../../../../static/pages/courses/cfa/slide3.jpg?webp")
                    },
                    jpeg: {
                      1: require("../../../../static/pages/courses/cfa/slide3.jpg?resize&size=650"),
                      2: require("../../../../static/pages/courses/cfa/slide3.jpg?resize&size=1050")
                    }
                  },
                  text: "作业批改讲评"
                }
              ]
            }
          },
          {
            heading: { title: "我们对你的$$承诺" },
            type: "TemplateImageCards",
            data: {
              heading: {},
              cards: [
                {
                  image: {
                    webp: {
                      1: require("../../../../static/pages/courses/cfa/imageCards/1.png?webp"),
                      2: require("../../../../static/pages/courses/cfa/imageCards/1.png?webp")
                    },
                    jpeg: {
                      1: require("../../../../static/pages/courses/cfa/imageCards/1.png?resize&size=650"),
                      2: require("../../../../static/pages/courses/cfa/imageCards/1.png?resize&size=1050")
                    }
                  },
                  title: "开课后6天内不满意，无条件退换课",
                  description:
                    "SavvyPro课程以高质量的口碑与优质的服务为目标，我们承诺，第一节课结束后的6天内不满意无条件退换课"
                },
                {
                  image: {
                    webp: {
                      1: require("../../../../static/pages/courses/cfa/imageCards/2.png?webp"),
                      2: require("../../../../static/pages/courses/cfa/imageCards/2.png?webp")
                    },
                    jpeg: {
                      1: require("../../../../static/pages/courses/cfa/imageCards/2.png?resize&size=650"),
                      2: require("../../../../static/pages/courses/cfa/imageCards/2.png?resize&size=1050")
                    }
                  },
                  title: "课程有效期内允许多次补课",
                  description:
                    "参加线下课的同学在课程有效期内允许多次线下补课，无法参与的也可以申请线上补课。而参加线上课的同学在课程有效期内可以重复多次观看"
                },
                {
                  image: {
                    webp: {
                      1: require("../../../../static/pages/courses/cfa/imageCards/3.png?webp"),
                      2: require("../../../../static/pages/courses/cfa/imageCards/3.png?webp")
                    },
                    jpeg: {
                      1: require("../../../../static/pages/courses/cfa/imageCards/3.png?resize&size=650"),
                      2: require("../../../../static/pages/courses/cfa/imageCards/3.png?resize&size=1050")
                    }
                  },
                  title: "考试没有通过，免费重修",
                  description:
                    "如果证书考试没有通过，提供Fail的证明图片或者新一期考试成功报名的截图，即可申请重修，线下同学可以免费补听线下课程，网课同学支付50刀的补课费用，即可参加新一期的线上课程"
                }
              ]
            }
          },

          {
            heading: { title: "更多$$问题", description: "还有问题？看这里" },
            type: "TemplateAccordian",
            data: {
              heading: {title: "he"},
              tabs: [
                {
                  name: "tab 1werwe",
                  items: [
                    {
                      name: "QA 1: 对课程不满意可以退款或换成网课吗？",
                      body: "第一节课程可做试听课，如需退课或换课，请在第一节课后的6天内，联系学习督导员或班主任说明情况，即可无条件全额退款或更换成网课，逾期将不再办理退款或换课。",
                    },
                    {
                      name: "QA 2: 线下课程的有效期是多久呢？",
                      body: "线下课程的有效期为1年，在课程结束一年内可以随时免费补听线下课程，在线下课程结束的一年后，需要联系客服进行重新报名。",
                    },
                    {
                      name: "QA 3: 线上课程的有效期是多久呢？",
                      body: "线上课程的有效期为其对应的线下课程开课后第2天至线下课程结课后的21天之内。"
                    },
                    {
                      name: "QA 4: 线上课程逾有效期后，是否可以参加线上补课吗？",
                      body: "线上课程逾期后，可以在结课后一年内以$15/课次的价格进行线上补课，每课次的视频有效期为3天。"
                    },
                    {
                      name: "QA 5: 报名了线上课程的同学可以去线下教室上课吗？",
                      body: "报名线上课程的同学不可以参加线下课程，如果需要参加线下课程，需要找小助手重新报名线下课程。"
                    },
                    {
                      name: "QA 6: 是否可以提供报销凭证？",
                      body: "鼓励大家积极与公司沟通，报销课程学费，如需报销，请联系小助手说明情况，获取正式的报销信。"
                    }
                  ]
                },
              ]
            }
          }
        ]
      },
    ]
  };
  constructor() {
    super("CSC", "CSC证书班", ["CSC"], 8);
  }
};

