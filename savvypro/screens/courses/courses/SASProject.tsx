import { Course } from "../data";
export const SASProject: Course = {
  backgroundImage: {
    webp: {
      1: require("../../../static/pages/programs/sas.png?webp"),
      2: require("../../../static/pages/programs/sas.png?webp")
    },
    jpeg: {
      1: require("../../../static/pages/programs/sas.png?resize&size=1500"),
      2: require("../../../static/pages/programs/sas.png?resize&size=2000")
    }
  },
  id: "SASProject",
  name: "SAS Project 证书班",
  cmsId: 6,
  bannerInfo: {
    courseDetails: 'SAS Project实战班',
    dateAndPlace: '美东时间2019年9月18日开课  |  线上',
    price: 980,
    discountedPrice: 599,
    extraInfo: '（开课后6天内无条件退换课）',
    chatBubble: '早报名，惊喜优惠'
  },
  video: {
    link: 'https://savvyuni-web.s3.amazonaws.com/banners/SAS_banner.mp4',
    poster: "../../../static/pages/programs/sas.png"
  },
  description:
    "SAS实战班适合已经有SAS基础知识（Base+Advance证书），但缺少SAS编程经验的学员，这门课程旨在帮助学员在通过6周，每周1节课的学习，快速掌握工作中常用的SAS编程技巧，真正做到学以致用。",
  link: './courses/SASProject',
  types: ["offline", "online"],
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
            body: <div style={{ minHeight: 290, minWidth: 391, lineHeight: 2 }}>
                    <p>SAS证书作为一个全球认证，并且终身有效的证书，不仅仅是收到金融分析职位面试和Offer的必备证书，也是实际工作中需要的必备技能。对于想要进入金融行业做数据分析的毕业生的敲门砖。</p> 
                    <br/>
                    <p>SavvyPro的SAS证书课程是针对零基础学员开设的，课程内容包括Base+Advance两个证书的全部内容。课程中包括了理论知识，实战演习以及独家整理的500+真题，只要紧跟老师步伐，认真完成作业，就能轻松住你通过考试。通常绝大多数同学都能在八周内考下两个证书，在短期内实现简历含金量的巨大提升！</p>
                  </div>,
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
              videoId: "https://savvyuni-web.s3.amazonaws.com/sasp+l1+1.mp4",
              caption: "想要试听完整公开课？$$联系客服",
              text: "5分钟免费公开课试听"
            },
            ban: {
            //   card: {
            //     first: "SavvyPro学员CFA",
            //     second: "一次通过率",
            //     large: "85",
            //     symbol: "%",
            //     bottom: "(是大约CFA官方通过率的两倍)"
            //   },
              infos: [
                {
                  big: "18",
                  small: "总计课程小时"
                },
                {
                  big: "6",
                  small: "课节总数"
                },
                {
                  big: "8",
                  small: "个商业案例"
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
                      title: "SAS Project实战班",
                      classes: [
                        {
                          name: "7月实战班",
                          address: "720 Spadina Ave, Unit 310",
                          date: new Date("July 17, 2019")
                        },
                        {
                          name: "9月实战班",
                          address: "720 Spadina Ave, Unit 310",
                          date: new Date("Sept 18, 2019")
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
              title: "课程$$大纲"
            },
            type: "TemplateAccordian",
            data: {
              heading: {},
              tabs: [
                {
                  name: "",
                  items: [
                    {
                      name: "Lecture 1",
                      body: [
                        "Review Data Library Set Up",
                        "Case Study 1: Methods to Calculate Mean - Difference Among Operator, Function and Procedure",
                        "Case Study 2: Read in CSV/Excel Data",
                        "Case Study 3: Reconcile Data Format",
                        "Sample Header Code "
                      ]
                    },
                    {
                        name: "Lecture 2",
                        body: [
                          "Review Operators and Functions",
                          "Case Study 4-Calculate Management Fee for Asset Management Fund",
                          "Most Commonly Used Procedures 1"
                        ]
                      },
                      {
                        name: "Lecture 3",
                        body: [
                          "Most Commonly Used Procedures 2",
                          "Review of Do Loop and Array"
                        ]
                      },
                      {
                        name: "Lecture 4",
                        body: "Case Study 5-Risk Rating Conversion"
                      },
                      {
                        name: "Lecture 5",
                        body: [
                          "Three Ways of Creating Macro Variables, Review of Macro",
                          "Case Study 6 - Automate Risk Rating Comparison using Macro"
                        ]
                      },
                      {
                        name: "Lecture 6",
                        body: [
                          "Case Study 7- Segment Data Automatically using Macro",
                          "Case Study 8 - Avoid Hard Coding using Procs/Macro/SQL",
                          "SAS Debug, Interview Questions, Suggested Resume Session"
                        ]
                      },
                  ]
                }
              ]
            }
          },
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
                title: "Kevin",
                description: "RBC银行风险管理高级经理，滑铁卢大学数学硕士",
                body: {
                  minHeight: 250,
                  data:  <div style={{ lineHeight: 1.8 }}>研究生毕业于加拿大滑铁卢大学数学系，曾担任中国某券商资产管理部门固定收益类(Fixed Income)产品首席交易员，对资本市场各类金融产品的交易以及买方机构产品运作模式有着丰富经验。
                     <br/>现就职于加拿大五大行RBC银行，担任风险管理高级经理一职，负责企业信用风险管理模型开发，在工作中积累了丰富的数据分析及建模的经验。
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
                  1: require("../../../static/pages/courses/cfa/wechat/sasProject/sas1.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/sasProject/sas1.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/sasProject/sas1.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/sasProject/sas1.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/wechat/sasProject/sas2.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/sasProject/sas2.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/sasProject/sas2.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/sasProject/sas2.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/wechat/sasProject/sas3.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/sasProject/sas3.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/sasProject/sas3.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/sasProject/sas3.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/wechat/sasProject/sas4.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/sasProject/sas4.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/sasProject/sas4.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/sasProject/sas4.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/wechat/sasProject/sas5.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/sasProject/sas5.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/sasProject/sas5.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/sasProject/sas5.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/wechat/sasProject/sas6.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/sasProject/sas6.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/sasProject/sas6.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/sasProject/sas6.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/wechat/sasProject/sas7.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/sasProject/sas7.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/sasProject/sas7.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/sasProject/sas7.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/wechat/sasProject/sas8.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/sasProject/sas8.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/sasProject/sas8.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/sasProject/sas8.jpg?resize&size=600")
                }
              }
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
                info: "开课前两三天，客服建立群组"
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
                      1: require("../../../static/pages/courses/cfa/slideImage.jpg?webp"),
                      2: require("../../../static/pages/courses/cfa/slideImage.jpg?webp")
                    },
                    jpeg: {
                      1: require("../../../static/pages/courses/cfa/slideImage.jpg?resize&size=650"),
                      2: require("../../../static/pages/courses/cfa/slideImage.jpg?resize&size=1050")
                    }
                  },
                  text: "班主任责任制"
                },
                {
                  image: {
                    webp: {
                      1: require("../../../static/pages/courses/cfa/slide2.jpg?webp"),
                      2: require("../../../static/pages/courses/cfa/slide2.jpg?webp")
                    },
                    jpeg: {
                      1: require("../../../static/pages/courses/cfa/slide2.jpg?resize&size=650"),
                      2: require("../../../static/pages/courses/cfa/slide2.jpg?resize&size=1050")
                    }
                  },
                  text: "职场经验分享"
                },
                {
                  image: {
                    webp: {
                      1: require("../../../static/pages/courses/cfa/slide3.jpg?webp"),
                      2: require("../../../static/pages/courses/cfa/slide3.jpg?webp")
                    },
                    jpeg: {
                      1: require("../../../static/pages/courses/cfa/slide3.jpg?resize&size=650"),
                      2: require("../../../static/pages/courses/cfa/slide3.jpg?resize&size=1050")
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
                      1: require("../../../static/pages/courses/cfa/imageCards/1.png?webp"),
                      2: require("../../../static/pages/courses/cfa/imageCards/1.png?webp")
                    },
                    jpeg: {
                      1: require("../../../static/pages/courses/cfa/imageCards/1.png?resize&size=650"),
                      2: require("../../../static/pages/courses/cfa/imageCards/1.png?resize&size=1050")
                    }
                  },
                  title: "开课后6天内不满意，无条件退换课",
                  description:
                    "SavvyPro课程以高质量的口碑与优质的服务为目标，我们承诺，第一节课结束后的6天内不满意无条件退换课"
                },
                {
                  image: {
                    webp: {
                      1: require("../../../static/pages/courses/cfa/imageCards/2.png?webp"),
                      2: require("../../../static/pages/courses/cfa/imageCards/2.png?webp")
                    },
                    jpeg: {
                      1: require("../../../static/pages/courses/cfa/imageCards/2.png?resize&size=650"),
                      2: require("../../../static/pages/courses/cfa/imageCards/2.png?resize&size=1050")
                    }
                  },
                  title: "课程有效期内允许多次补课",
                  description:
                    "参加线下课的同学在课程有效期内允许多次线下补课，无法参与的也可以申请线上补课。而参加线上课的同学在课程有效期内可以重复多次观看"
                },
                {
                  image: {
                    webp: {
                      1: require("../../../static/pages/courses/cfa/imageCards/3.png?webp"),
                      2: require("../../../static/pages/courses/cfa/imageCards/3.png?webp")
                    },
                    jpeg: {
                      1: require("../../../static/pages/courses/cfa/imageCards/3.png?resize&size=650"),
                      2: require("../../../static/pages/courses/cfa/imageCards/3.png?resize&size=1050")
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
                  name: "",
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
  }
};
