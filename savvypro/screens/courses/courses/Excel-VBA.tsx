
import { Course } from "../data";
export const ExcelVBA: Course = {
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
  id: "Excel-VBA",
  name: "Excel-VBA实战班",
  cmsId: 1,
  description:
    "Excel-VBA实战班是一个面向零基础学员开设的，课程内容包括Excel和VBA中的重要操作技能，以及一个完整的Business Loan的Case Study与多个Project的练习。",
  link: './courses/Excel-VBA',
  video: {
    link: 'https://savvyuni-web.s3.amazonaws.com/banners/Excel-VBA_banner.mp4',
    poster: "../../../static/pages/programs/excel.png"
  },
  bannerInfo: {
    courseDetails: 'Excel-VBA实战班',
    dateAndPlace: '美东时间2019年10月5日开课  |  多伦多  |  线上',
    price: 980,
    discountedPrice: 739,
    extraInfo: '（开课后6天内无条件退换课）',
    chatBubble: '早报名，惊喜优惠'
  },
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
            body: <div style={{ width: '353px', lineHeight: 2, letterSpacing: '1px', fontSize: 14 }}>绝大多数的职场新人都会面临这样的窘境：大学经常用 Excel-VBA 写作业，但面对怎是的工作项目确不知道如何下手。<br />来自加拿大顶尖金融机构的老师专业教授， 以实战为向导，通过项目学习与大量的实操练习，让学员在六周内快速掌握在工作中系统化解决难题的能力。我们相信，通过认真完成学习与作业，优秀的你一定具备追求自己理想工作的能力！</div>,
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
              videoId: "https://savvyuni-web.s3.amazonaws.com/Lecture+1+-+1.mp4",
              caption: "想要试听完整公开课？$$联系客服",
              text: "5分钟免费公开课试听"
            },
            ban: {
              infos: [
                {
                  big: "36",
                  small: "总计课程小时"
                },
                {
                  big: "12",
                  small: "课节总数"
                },
                {
                  big: "100+",
                  small: "实战内容应用"
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
                      title: "Excel-VBA实战班",
                      classes: [
                        {
                          name: "7月实战班",
                          address: "720 Spadina Ave, Unit 310",
                          date: new Date("Jul 20, 2019")
                        },
                        {
                          name: "8月实战班",
                          address: "720 Spadina Ave, Unit 310",
                          date: new Date("Aug 23, 2019")
                        },
                        {
                          name: "9月实战班",
                          address: "720 Spadina Ave, Unit 310",
                          date: new Date("Sep 21, 2019")
                        },
                        {
                          name: "10月实战班",
                          address: "720 Spadina Ave, Unit 310",
                          date: new Date("Oct 5, 2019")
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "线上课程",
                  cards: [
                    {
                      title: "Excel-VBA实战班",
                      classes: [
                        {
                          name: "7月实战班",
                          date: new Date("Jul 20, 2019")
                        },
                        {
                          name: "8月实战班",
                          date: new Date("Aug 23, 2019")
                        },
                        {
                          name: "9月实战班",
                          date: new Date("Sep 21, 2019")
                        },
                        {
                          name: "10月实战班",
                          date: new Date("Oct 5, 2019")
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
                  name: "PART 1: Excel功能，函数与数据常识",
                  items: [
                    {
                      name: "Dynamic Data Analysis",
                      body: [
                        "了解Excel的常用功能及职场应用，熟练使用Excel快捷键操作",
                        "V/H lookup,Index/Match等函数，自动查询数据",
                        "Data Validation自动提示填入信息",
                        "Conditional Formatting，高效汇总数据"
                      ],
                    },
                    {
                      name: "Advanced Data Analysis & Display",
                      body: [
                        "Offset, Counta等函数，动态分析数据",
                        "Wildcard, 对数据进行模糊查找及分析",
                        "MS Application间的Direct/Indirect链接",
                        "Cell/Range动态命名"
                      ],
                    },
                    {
                      name: "Charts，Graphs& Excel Controls",
                      body: [
                        "掌握六种Excel绘图及Smart Art图形操作",
                        "改变绘图格式，与此坐标应用",
                        "Dashboard, 动态控制数据",
                        "Data Updates and Chart Optimization"
                      ],
                    },
                    {
                      name: "Pivot Table & Dynamic Updates",
                      body: [
                        "学习Pivot Table的应用和编辑",
                        "日期及数组合并，数据字段编辑",
                        "动态更新Pivot Table数据源",
                        "合并Pivot Table 及导入外部数据",
                        "多表联动应用"
                      ],
                    },
                    {
                      name: "Excel Modelling Case",
                      body: [
                        "Excel 功能: Advanced Reporting：Excel Indirect Link",
                        "Excel 功能: Dependent Data Validation Data",
                        "Excel 功能: Excel Controls and Dynamic Charting",
                        "Excel 功能: Indirect"
                      ],
                    },
                    {
                      name: "Dashboard",
                      body: [
                        "Excel 功能: PivotChart, PivotTable Slices, Dashboard",
                        "VBA知识：Record Macro, Macro and Shape Connection, Event Triggered Program"
                      ]
                    }
                  ]
                },
                {
                    name: "PART 2: VBA自动化办公",
                    items: [
                      {
                        name: "VBA开发界面与User-Defined Function",
                        body: [
                          "熟悉开发界面，掌握编程规则",
                          "学习VBA中的变量及Objects",
                          "掌握Function和Sub使用方法",
                          "如何使用VBA自定义函数"
                        ],
                      },
                      {
                        name: "逻辑判断与区间管理",
                        body: [
                          "掌握IF和Case/Select等逻辑判断函数",
                          "了解CurrentRegion， Offset, Resize等区间对象属性",
                          "通过VBA制作动态表格与数据处理",
                        ],
                      },
                      {
                        name: "人机交互与循环语句",
                        body: [
                          "学习Msgbox/InputBox等人机交互语言",
                          "利用WorksheetFunction大幅提高编程效率",
                          "学习Do While/Do Unitil等循环语句",
                          "掌握三种VBA拷贝粘贴的方法，可以在多张Sheet整合数据"
                        ],
                      },
                      {
                        name: "文件管理语句与多文件循环",
                        body: [
                          "学习VBA语句中的文件管理语言",
                          "如何Combine Dir与循环语句在多个Excel文件中整合数据",
                        ],
                      },
                      {
                        name: "出错处理及编程习惯 & 实际案例",
                        body: [
                          "程序防错要点，防错语句在程序及函数中的应用",
                          "代码优化，Screen Updating提高效率，With简化引用",
                          "使用动态引用，API函数提升兼容性，在运行中查看及修复出错",
                          "学习VBA中的GUI UserForm"
                        ],
                      },
                      {
                        name: "数据操纵技能训练",
                        body: [
                          "VBA技巧：Like Function & Wildcard",
                          "VBA技巧：String Function, Data Function",
                        ]
                      }
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
                title: "Elvis",
                description: "持有CFA, FRM, 精算等多级证书，职业风险管理师证书",
                body: {
                  minHeight: 300,
                  data: "毕业于加拿大滑铁卢大学金融分析与风险管理专业，曾任本专业高级顾问，同时拥有多家金融机构的工作经历。曾在投资银行Merrill Lynch，商业银行-TD Securities, 保险对冲Manulife, 加拿大最大的私募基金之一CPPIB工作。同时拥有CFA, FRM与精算等多级证书，与职业风险管理师证书。从大学至今，组织多场职场讲座，帮助很多学弟学妹找到理想的工作。讲课风趣幽默，深受学生欢迎。"
                }
              },
              {
                title: "Ryan",
                description: "金融数学和统计双硕士，CFA持证人，加拿大五大行Associate Director",
                body: {
                  minHeight: 300,
                  data: "毕业于加拿大西安大略大学金融数学硕士专业和卡尔加里大学统计硕士专业,CFA持证人。曾就职于加拿大五大行TD银行负责Model Development。目前在加拿大五大行RBC银行担任Credit Risk Analytics的Associate Director。凭借扎实的金融背景与Excel建模能力，自2015年毕业后连升三级，成为RBC最年轻的Associate Director之一。"
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
                  1: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel1.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel1.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel1.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel1.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel2.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel2.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel2.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel2.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel3.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel3.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel3.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel3.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel4.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel4.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel4.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel4.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel5.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel5.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel5.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel5.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel6.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel6.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel6.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel6.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel7.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel7.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel7.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel7.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel8.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel8.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel8.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/wechat/excelVBA/excel8.jpg?resize&size=600")
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
