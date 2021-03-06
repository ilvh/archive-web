
import { Course } from "../data";
export const VBAProject: Course = {
  backgroundImage: {
    webp: {
      1: require("../../../static/pages/programs/excel.png?webp"),
      2: require("../../../static/pages/programs/excel.png?webp")
    },
    jpeg: {
      1: require("../../../static/pages/programs/excel.png?resize&size=1500"),
      2: require("../../../static/pages/programs/excel.png?resize&size=2000")
    }
  },
  id: "VBAProject",
  name: "VBA Project实战班",
  cmsId: 2,
  description:
    "这门课程是Excel/VBA实战班的进阶课程，是针对已经参加过实战班或有一年以上VBA实战经验，想进一步提升操作经验的同学。课程会通过6个完整的工业届实际案例，让大家完美掌握Excel办公自动化中所需要的全部技能。",
  link: './courses/VBAProject',
  video: {
    link: 'https://savvyuni-web.s3.amazonaws.com/banners/Excel-VBA_banner.mp4',
    poster: "../../../static/pages/programs/excel.png"
  },
  bannerInfo: {
    courseDetails: 'VBA Project实战班',
    dateAndPlace: '美东时间2019年10月12日开课  |  多伦多  |  线上',
    price: 599,
    discountedPrice: 499,
    extraInfo: '（开课后6天内无条件退换课）',
    chatBubble: '早报名，惊喜优惠'
  },
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
            body: <div style={{ width: '353px', lineHeight: 2, letterSpacing: '1px', fontSize: 14 }}>VBA Project实战班作为Excel/VBA的进阶课程，是针对已经参加过实战班或有一年以上VBA实战经验，想进一步提升操作经验的同学。课程会通过6个完整的工业届实际案例，让大家完美掌握Excel办公自动化中所需要的全部技能。<br /> <br />老师们会分享自己在工作中的技能运用经验，并向大家讲解如何把课程中的Projects专业的写到简历里，作为亮点。</div>,
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
              videoId: "https://savvyuni-web.s3.amazonaws.com/vbaproject12019ch1.mp4",
              caption: "想要试听完整公开课？$$联系客服",
              text: "5分钟免费公开课试听"
            },
            ban: {
              infos: [
                {
                  big: "18",
                  small: "总计课程小时"
                },
                {
                  big: "6",
                  small: "课节总数"
                },
                // {
                //   big: "6-12",
                //   small: "周时长"
                // },
                {
                  big: "6",
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
                  name: "多伦多线下课程",
                  cards: [
                    {
                      title: "VBA Project 实战班",
                      classes: [
                        {
                          name: "7月实战班",
                          address: "720 Spadina Ave, Unit 310",
                          date: new Date("Jul 6, 2019")
                        },
                        {
                          name: "9月实战班",
                          address: "720 Spadina Ave, Unit 310",
                          date: new Date("Sep 28, 2019")
                        },
                        {
                          name: "10月实战班",
                          address: "720 Spadina Ave, Unit 310",
                          date: new Date("Oct 12, 2019")
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "线上课程",
                  cards: [
                    {
                      title: "VBA Project 实战班",
                      classes: [
                        {
                          name: "7月实战班",
                          date: new Date("Jul 06, 2019")
                        },
                        // {
                        //   name: "8月全程班",
                        //   date: new Date("Aug 23, 2019")
                        // },
                        {
                          name: "9月实战班",
                          date: new Date("Sep 28, 2019")
                        },
                        {
                          name: "10月实战班",
                          date: new Date("Oct 12, 2019")
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
              title: "课程$$大纲",
            },
            type: "TemplateAccordian",
            data: {
              heading: {},
              tabs: [
                {
                  name: "",
                  items: [
                    {
                      name: "Processing Large Amount of Files",
                      body: 'After this class, candidates can use multiple methods to process large amount of files, such as Excel, TXT and CSV files etc.',
                    },
                    {
                      name: "VBA Event Programming and Case Study",
                      body: [
                        {
                          title: 'After this class, candidates can utilize VBA program to handle of all kinds of VBA event and provide the response, such as:',
                          data: [
                            'Button Event (VBA event casued by user pressed button)',
                            'Scheduled event ( Process a VBA program on specific time)',
                          ],
                        },
                      ],
                    },
                    {
                      name: "VBA Charting and Pivot Table",
                      body: 'After this class, candidates can utilize VBA programming to generate automated Charting and PivotTable in all working situation.'
                    },
                    {
                      name: "Data Cleaning and Array Programming",
                      body: 'After this class, candidates will have a knowledge on all kinds of Array usage and techniques to clean input data.'
                    },
                    {
                      name: "Automated Email and Outlook VBA Programming",
                      body: "After this class candidates will send an automated email; how to attach a file or files in local system; how to attach PDFs or Images."
                    },
                    {
                      name: "Trading Tranaction Management",
                      body: "Grab all knowledges above, resolve a case project associated with trading transaction management."
                    }
                  ]
                },
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
                title: "Jinke",
                description: "博士毕业于复旦大学BioComp, CMIC研发部门负责软件开发",
                body: {
                //   minHeight: 250,
                  data: "博士毕业于复旦大学BioComp, 主修计算机和软件工程。现任职于CMIC研发部门，任软件工程师，主要负责Oracle数据库的开发，曾先后任职于多伦多CIBC资本部，具有丰富的软件开发及Excel-VBA操作经验。Jinke老师教学严谨，知识功底扎实，深受学员的好评。"
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
                  1: require("../../../static/pages/courses/cfa/wechat/excelProject/excel1.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelProject/excel1.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelProject/excel1.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelProject/excel1.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelProject/excel2.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelProject/excel2.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelProject/excel2.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelProject/excel2.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelProject/excel3.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelProject/excel3.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelProject/excel3.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelProject/excel3.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelProject/excel4.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelProject/excel4.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelProject/excel4.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelProject/excel4.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelProject/excel5.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelProject/excel5.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelProject/excel5.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelProject/excel5.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelProject/excel6.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelProject/excel6.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelProject/excel6.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelProject/excel6.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelProject/excel7.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelProject/excel7.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelProject/excel7.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelProject/excel7.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelProject/excel8.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelProject/excel8.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelProject/excel8.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelProject/excel8.jpg?resize&size=600")
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
                  title: "开课后6天不满意，全额退款",
                  description:
                    "SavvyPro课程以高质量的口碑与优质的服务为目标，我们承诺，开课后6天内不满意无条件退款"
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
            heading: {
              title: "更多$$问题",
              description: "还有问题？看这里"
            },
            type: "TemplateAccordian",
            data: {
              heading: {},
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
