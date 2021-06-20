import { Program, ProgramIDS, withPage } from "../core";
import { TemplateRenderProps } from "../../../../components/template";
export class Python extends Program implements withPage {
  icon = {
    webp: {
      1: require("../../../../static/pages/programs/icons/python.png?webp"),
      2: require("../../../../static/pages/programs/icons/python.png?webp")
    },
    jpeg: {
      1: require("../../../../static/pages/programs/icons/python.png?resize&size=40"),
      2: require("../../../../static/pages/programs/icons/python.png?resize&size=60")
    }
  };

  video = {
    link: 'https://savvyuni-web.s3.amazonaws.com/banners/Python_banner.mp4',
    poster: "../../../../static/pages/programs/python.png"
  };

  bannerInfo = {
    courseDetails: 'Python实战班 9月全程班',
    dateAndPlace: '加东时间9月21号开课 |  多伦多  |  线上',
    price: 849,
    discountedPrice: 599,
    extraInfo: '（开课后6天内无条件退换课）',
    chatBubble: '早报名，惊喜优惠'
  };

  page: TemplateRenderProps = {
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
            body: <div style={{ width: '353px', lineHeight: 2, letterSpacing: '1px', fontSize: 14 }}>Python作为风靡全球的编程语言，是当今数据分析行业的“新宠”，作为一个语法简洁，灵活强大的语言，是数据分析的“万金油”工具。想要年薪10万+，大牛Case写入简历，Python将成为你实现目标的起点。<br /> <br />SavvyPro的Python课程是面对零基础的学员设置的，7节课从基础到实战，掌握Data Analyst和Marketing Analyst的必备技能。同时配合按揭贷款，网络爬虫两大case及包括Pandas在内的Project的实战练习, 帮助你充实你的简历！</div>,
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
              videoId: "https://savvyuni-web.s3.amazonaws.com/Lecture+1+a.mp4",
              caption: "想要试听完整公开课？$$联系客服",
              text: "5分钟免费公开课试听"
            },
            cards: [
              {
                title: '按揭贷款-Mortgage Case',
                body: [
                  '介绍如何利用货币的时间价值计算贷款的每期还款金额',
                  '掌握如何在Python中熟练使用循环语句',
                  'Function嵌套',
                  'Pandas数据处理包',
                  '利用上述Python工具自动化生成贷款分期偿付时间表',
                ],
              },
              {
                title: '网络爬虫-Web Scraping Case',
                body: [
                  '介绍网页数据抓取的步骤及实际应用',
                  '介绍HTML的基本语法',
                  '深入理解如何使用Python的BeautifulSoup包进行网页数据抓取',
                  '掌握在Python中如何利用String Method对文本数据进行清洗',
                  '学习如何自动化抓取IMDB电影数据并保存成CSV格式文件',
                ],
              },
            ],
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
                {
                  big: "3",
                  small: "个实战Project"
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
                      title: "Python实战班",
                      classes: [
                        {
                          name: "7月全程班",
                          address: "720 Spadina Ave, Unit 310",
                          date: new Date("Jul 17, 2019")
                        },
                        {
                          name: "9月全程班",
                          address: "720 Spadina Ave, Unit 310",
                          date: new Date("Sep 21, 2019")
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "线上课程",
                  cards: [
                    {
                      title: "Python实战班",
                      classes: [
                        {
                          name: "7月全程班",
                          date: new Date("Jul 17, 2019")
                        },
                        {
                          name: "9月全程班",
                          date: new Date("Sep 21, 2019")
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
                      name: "Lecture 1",
                      body: [
                        {
                          title: 'Introduction and Numeric Data Types',
                          data: [
                            'Basic Framework of Class',
                            'Variables, Comment, Method and Attributes',
                            '4 Numeric Data Types and String Data Type',
                            'Format Method on Those 5 Data Types'
                          ]
                        },
                        {
                          title: 'Slicing and 4 other Data Types',
                          data: [
                            'Slicing and Range',
                            'List Data Type',
                            'Dictionary Data type',
                            'Set Data Type',
                            'Tuple Data Type',
                            'Aliasing',
                            'Difference Between Return Value and Process Result ',
                          ]
                        },
                      ]
                    },
                    {
                      name: "Lecture 2",
                      body: [
                        {
                          title: 'Python Logic Priority, Module and Function Define',
                          data: [
                            'Priority of All Python Calculations and the Process Sequence',
                            'Define a Function, Variables in Function, Scope',
                            'Import Module and Functions',
                            'Sys. Functions to Manage Module and Directions',
                            'Open, Read and Modify Txt Files',
                          ]
                        },
                        {
                          title: 'If, Loop and Error Handler',
                          data: [
                            'If, Elif, Else',
                            'For, While, Pass, Break, Else',
                            'Exception, Else'
                          ]
                        }
                      ]
                    },
                    {
                      name: "Lecture 3 - 4",
                      body: [
                        {
                          title: 'Case One - Create Mortgage Amortization Schedule Report in Python',
                          data: [
                            'Mortgage Basics',
                            'Compute Monthly Mortgage Payment Using User-Defined Function',
                            'Create Mortgage Amortization Schedule Report Using Pandas Library',
                            'Advanced: Implement Prepayment Option to Existing Report'
                          ]
                        },
                      ]
                    },
                    {
                      name: "Lecture 5",
                      body: [
                        {
                          title: 'Case Two - Web Scraping with Python',
                          data: [
                            'HTML Basics and How to Download It Using Python',
                            'An Introduction to Python Beautiful Soup Library For Extracting Data Out of HTML',
                            'How to Store Extracted Data into CSV File',
                          ]
                        },
                      ]
                    },
                    {
                      name: "Lecture 6 - 7",
                      body: [
                        {
                          title: 'Case Three - exploratory Data Analysis on Bank Marketing Dataset Using Pandas',
                          data: [
                            'Getting Started with Pandas',
                            'Data Cleaning and Preparation',
                            'Data Aggragation and Group Operations',
                            'Plotting and Visualization'
                          ]
                        },
                      ]
                    },
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
                title: "Lin",
                description: "Enercare Revenue Assurance & Reporting Analyst, 会计硕士",
                body: {
                  minHeight: 280,
                  data: "Lin老师作为布鲁克大学会计硕士，现就职于Enercare任职Revenue Assurance and Reporting Analyst,主管财务报表。拥有大量的VBA, SQL， SAS, Python实战经验以及丰富的教学经验。面对不同基础的学生，能够准确把握教学方法，用幽默的案例帮助大家用最少的经历学会最多的内容，同时也帮助很多同学顺利找到工作。"
                }
              },
              {
                title: "Ding Chao",
                description: "多伦多大学MBA, BMO银行Manager, CFA一级导师",
                body: {
                  minHeight: 280,
                  data: "现任职于加拿大五大行ScotiaBank，负责构建银行产品的定价模型，并对市场推广提供数据分析和支持。丁老师精通Python, SAS和SQL等数据分析软件，拥有丰富的机器学习实战经验。"
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
                  1: require("../../../../static/pages/courses/cfa/wechat/python/python1.jpg?webp"),
                  2: require("../../../../static/pages/courses/cfa/wechat/python/python1.jpg?webp")
                },
                jpeg: {
                  1: require("../../../../static/pages/courses/cfa/wechat/python/python1.jpg?resize&size=400"),
                  2: require("../../../../static/pages/courses/cfa/wechat/python/python1.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../../static/pages/courses/cfa/wechat/python/python2.jpg?webp"),
                  2: require("../../../../static/pages/courses/cfa/wechat/python/python2.jpg?webp")
                },
                jpeg: {
                  1: require("../../../../static/pages/courses/cfa/wechat/python/python2.jpg?resize&size=400"),
                  2: require("../../../../static/pages/courses/cfa/wechat/python/python2.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../../static/pages/courses/cfa/wechat/python/python3.jpg?webp"),
                  2: require("../../../../static/pages/courses/cfa/wechat/python/python3.jpg?webp")
                },
                jpeg: {
                  1: require("../../../../static/pages/courses/cfa/wechat/python/python3.jpg?resize&size=400"),
                  2: require("../../../../static/pages/courses/cfa/wechat/python/python3.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../../static/pages/courses/cfa/wechat/python/python4.jpg?webp"),
                  2: require("../../../../static/pages/courses/cfa/wechat/python/python4.jpg?webp")
                },
                jpeg: {
                  1: require("../../../../static/pages/courses/cfa/wechat/python/python4.jpg?resize&size=400"),
                  2: require("../../../../static/pages/courses/cfa/wechat/python/python4.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../../static/pages/courses/cfa/wechat/python/python5.jpg?webp"),
                  2: require("../../../../static/pages/courses/cfa/wechat/python/python5.jpg?webp")
                },
                jpeg: {
                  1: require("../../../../static/pages/courses/cfa/wechat/python/python5.jpg?resize&size=400"),
                  2: require("../../../../static/pages/courses/cfa/wechat/python/python5.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../../static/pages/courses/cfa/wechat/python/python6.jpg?webp"),
                  2: require("../../../../static/pages/courses/cfa/wechat/python/python6.jpg?webp")
                },
                jpeg: {
                  1: require("../../../../static/pages/courses/cfa/wechat/python/python6.jpg?resize&size=400"),
                  2: require("../../../../static/pages/courses/cfa/wechat/python/python6.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../../static/pages/courses/cfa/wechat/python/python7.jpg?webp"),
                  2: require("../../../../static/pages/courses/cfa/wechat/python/python7.jpg?webp")
                },
                jpeg: {
                  1: require("../../../../static/pages/courses/cfa/wechat/python/python7.jpg?resize&size=400"),
                  2: require("../../../../static/pages/courses/cfa/wechat/python/python7.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../../static/pages/courses/cfa/wechat/python/python8.jpg?webp"),
                  2: require("../../../../static/pages/courses/cfa/wechat/python/python8.jpg?webp")
                },
                jpeg: {
                  1: require("../../../../static/pages/courses/cfa/wechat/python/python8.jpg?resize&size=400"),
                  2: require("../../../../static/pages/courses/cfa/wechat/python/python8.jpg?resize&size=600")
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
                  title: "开课后6天不满意，全额退款",
                  description:
                    "SavvyPro课程以高质量的口碑与优质的服务为目标，我们承诺，开课后6天内不满意无条件退款"
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
  };
  constructor() {
    super("Python", "Python 大数据分析", ["Python"], 3);
  }
}
