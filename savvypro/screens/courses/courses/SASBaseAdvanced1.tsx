import { Course } from "../data";
import { Icon } from 'antd'
import BulletPointCard from '../../../components/elements/BulletPointCard'
export const SASBaseAdvanced1: Course = {
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
  id: "SAS-Base-1",
  name: "SAS Base+Advance 证书班",
  cmsId: 5,
  bannerInfo: {
    courseDetails: 'SAS Base+Advance证书保过班',
    dateAndPlace: '美东时间2019年10月15日开课  |  多伦多  |  线上',
    price: 980,
    discountedPrice: 739,
    extraInfo: '',
    chatBubble: '早报名，惊喜优惠'
  },
  description:
    "SAS证书班是面向零基础学员开设的，旨在短期内帮助学生顺利通过SAS Base和Advance的证书，提高简历的含金量。课程包括Base+Advance两个证书的全部内容，包括理论知识，实战练习以及老师独家整理的500+真题。",
  video: {
    link: 'https://savvyuni-web.s3.amazonaws.com/banners/SAS_banner.mp4',
    poster: "../../../static/pages/programs/sas.png"
  },
  link: './courses/SAS-Base-1',
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
            body: <div style={{
                    display: 'grid', 
                    gridTemplateColumns: '1fr 1fr', 
                    gridTemplateRows: '1fr 1fr',
                    gridGap: '1rem'
                  }}>
                    <BulletPointCard title={'01 课程基础易懂'} items={['针对零基础学员开设的','即使没有任何统计学以及变成知识的同学也可轻易上手']}/>
                    <BulletPointCard title={'02 为面试直接加分'} items={['通过课程帮你准备SAS相关的Interview问题','更注重学生的编程能力，而不是答题能力']}/>
                    <BulletPointCard title={'03 快速取证不在话下'} items={['99.8%的同学都能在八周内考下Base+Advance两个证书','即使没有任何统计学以及变成知识的同学也可轻易上手']}/>
                    <BulletPointCard title={'04 导师专供推荐信'} items={['SavvyPro 优秀学员可获得导师团的Reference Letter 可用于研究生申请以及真实可靠，助你职场一臂之力']}/>
                    
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
              text: "5分钟免费公开课试听",
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
                  big: "36",
                  small: "总计课程小时"
                },
                {
                  big: "11",
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
                // {
                //   name: "多伦多线下班",
                //   cards: [
                //     {
                //       title: "SAS Base+Advance证书保过班",
                //       classes: [
                //         {
                //           name: "7月证书班",
                //           address: "720 Spadina Ave, Unit 310",
                //           date: new Date("July 14, 2019")
                //         },
                //         {
                //           name: "8月证书班",
                //           address: "720 Spadina Ave, Unit 310",
                //           date: new Date("Aug 6, 2019")
                //         },
                //         {
                //           name: "9月证书班",
                //           address: "720 Spadina Ave, Unit 310",
                //           date: new Date("Sept 15, 2019")
                //         },
                //         {
                //           name: "10月证书班",
                //           address: "720 Spadina Ave, Unit 310",
                //           date: new Date("Oct 15, 2019")
                //         },
                //       ]
                //     },
                //   ]
                // },
                {
                  name: "线上课程",
                  cards: [
                    {
                      title: "SAS Base+Advance证书保过班",
                      classes: [
                        {
                          name: "7月证书班",
                          date: new Date("July 14, 2019")
                        },
                        {
                          name: "8月证书班",
                          date: new Date("Aug 6, 2019")
                        },
                        {
                          name: "9月证书班",
                          date: new Date("Sept 15, 2019")
                        },
                        {
                          name: "10月证书班",
                          date: new Date("Oct 15, 2019")
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
                  name: "Part 1: Base",
                  items: [
                    {
                      name: "Introduction to SAS, SAS Data and Library, Read Dada into SAS",
                      body: "SAS基础介绍，SAS数据和库，将数据读入SAS"
                    },
                    {
                        name: "Read Data into SAS, Formats and Informats, Infile Statement Options, Data/Time Variables",
                        body: "将数据读入SAS、处理格式和信息、Infile语句选项、数据/时间变量"
                      },
                      {
                        name: "Data Step Functions, Data Step Flow of Executions, Dataset Options",
                        body: "SAS 生成数据步骤函数，执行的数据步骤流，数据集选项"
                      },
                      {
                        name: "Control Datastep Flow, Array, Concatenate/Merge Dataset, ODS, Retain and Sum Statements",
                        body: "控制数据步骤流，数组，连接/合并数据集，执行ODS, Retain和Sum语句"
                      },
                      {
                        name: "SAS Automatic Variables, Advanced Datastep Programming, Most Commonly Used ProcSteps",
                        body: "SAS自动变量，解析高级Datastep编程，剖析最常用的ProcSteps"
                      },
                  ]
                },
                {
                  name: "Part 2:  Advance",
                  items: [
                    {
                      name: "Performing Basic and Advanced Queries using PROC SQL；Combining Tables Horizontally and Vertically Using PROC SQL",
                      body: "使用PROC SQL执行基本和高级查询;使用PROC SQL 生成水平以及垂直组合表单"
                    },
                    {
                        name: "Creating and Managing Tables/Index/ Views Using PROC SQL; Managing Process Using PROC SQL",
                        body: "使用PROC SQL创建和管理表/索引/视图;使用PROC SQL管理总体进程"
                      },
                      {
                        name: "Introduction to Macro Variables and Execution time Macro Varibles Processing",
                        body: "介绍宏变量，执行宏变量的时间处理"
                      },
                      {
                        name: "Macro Programs Creating and Storing",
                        body: "创建和存储宏程序"
                      },
                      {
                        name: "Advanced SAS Programming Techniques: Indexes/Combining Datasets/Lookup Tables/Formatting and Tracking Changes",
                        body: "高级SAS编程技术:索引/组合数据集/查找表/格式化和跟踪更改"
                      },
                      {
                        name: "Optimizing SAS Programs: Memory Usage Control/ Data Storage Space/ PROC FCMP",
                        body: "优化SAS程序:内存使用控制/数据存储空间/程序FCMP"
                      },
                      {
                        name: "Credit Risk Project（Online)",
                        body: "在线实战信用风险项目"
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
                  minHeight: 350,
                  data: <div style={{ lineHeight: 1.8 }}>研究生毕业于加拿大滑铁卢大学数学系，曾担任中国某券商资产管理部门固定收益类(Fixed Income)产品首席交易员，对资本市场各类金融产品的交易以及买方机构产品运作模式有着丰富经验。
                  <br/>现就职于加拿大五大行RBC银行，担任风险管理高级经理一职，负责企业信用风险管理模型开发，在工作中积累了丰富的数据分析及建模的经验。
                  </div>
                }                 
              },
              {
                title: "Vincent",
                description: <div style={{ lineHeight: 1.8 }}>瑞士制药高级数据分析师，滑铁卢大学统计双硕士</div>,
                body: {
                  minHeight: 350,
                  data: <div style={{ lineHeight: 1.8 }}>
                  本科毕业于香港大学，主修统计和金融。研究生在滑铁卢大学修Stats/Biostats，现就职于全球市值第二大的瑞士制药公司做高级数据分析师。
                  <br/> Vincent老师一直以来都对数据分析这个领域感兴趣，工作中主要使用SAS和R做临床实验数据以及基因数据的分析，同时也负责一些新药上市前市场营销方面的报告和分析。Vincent老师凭借多年来累积的工作经验以及对数据分析的喜爱，帮助一大批同学斩获SAS技能并顺利求职。 
                  </div>
                }              
              },
              {
                title: "Helen",
                description: <div style={{ lineHeight: 1.8 }}><div></div> <br/>多伦多大学生物统计学硕士</div>,
                body: {
                  minHeight: 350,
                  data: <div style={{ lineHeight: 1.8 }}>
                  多伦多大学生物统计学硕士，现就职于加拿大知名大学Population Health Research Institite, 担任统计分析师（Statistician), 主要从事临床实验经验研究。在工作及读书期间积累了丰富的SAS经验。Helen同时也为在校学生、教师以及医生提供统计咨询和分析，在医药和健康科学领域拥有相当丰富的经验。
                  <br/> Helen老师通过扎实的基本功和丰富的工作经验帮助许多同学轻松拿下SAS证书。 
                 </div>
                }               
              }
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
                  1: require("../../../static/pages/courses/sas/SASFeedBack/001.jpg?webp"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/001.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/001.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/001.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/002.jpg?webp"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/002.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/002.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/002.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/003.jpg?webp"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/003.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/003.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/003.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/004.jpg?webp"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/004.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/004.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/004.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/005.jpg?webp"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/005.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/005.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/005.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/006.png?webp"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/006.png?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/006.png?resize&size=400"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/006.png?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/007.png?webp"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/007.png?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/007.png?resize&size=400"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/007.png?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/008.jpg?webp"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/008.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/008.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/008.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/009.jpg?webp"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/009.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/009.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/009.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/010.jpg?webp"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/010.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/010.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/010.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/011.jpg?webp"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/011.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/011.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/011.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/012.jpg?webp"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/012.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/012.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/012.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/013.jpg?webp"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/013.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/013.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/013.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/014.jpg?webp"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/014.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/014.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/014.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/015.jpg?webp"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/015.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/015.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/015.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/016.jpg?webp"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/016.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/016.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/016.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/017.jpg?webp"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/017.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/017.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/017.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/018.png?webp"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/018.png?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/018.png?resize&size=400"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/018.png?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/019.jpg?webp"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/019.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/019.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/019.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/020.jpg?webp"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/020.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/sas/SASFeedBack/020.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/sas/SASFeedBack/020.jpg?resize&size=600")
                }
              },
              
            ]
          }
        }
      },
      {
        // heading: { title: "课程$$服务", subTitle: "上课$$流程" },
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
              //   info: "开课前两三天，班主任建立群组"
              // },
              // {
              //   icon: "thick-classteacher",
              //   title: "添加班主任",
              //   info: "入群后请添加班主任微信号，班主任负责售后服务"
              // },
              // {
              //   icon: "fillform",
              //   title: "填写课前调查表",
              //   info: "了解学生学习背景，更好因材施教，及时调整课程设置"
              // },
              // {
              //   icon: "learn",
              //   title: "开始学习",
              //   info: "每节课的学习都配有相对的讲义和练习，线下课同学可以参加线上补课"
              // },
              // {
              //   icon: "moneyback",
              //   title: "打卡获取奖学金",
              //   info: "坚持上课作业打卡，学期结束后将获取奖学金"
              // },
              // {
              //   icon: "coupon",
              //   title: "参与回访，获取优惠券",
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
                  title: "一站到底轻松取证",
                  description:
                    "深度全方位透析SAS 知识"
                },
                {
                  icon: "experiencesharing",
                  title: "线上+线下双重体验",
                  description: "一线满足你对课程的全部需求"
                },
                {
                  icon: "hrs",
                  title: "双教师教学",
                  description:
                    "24小时在线答疑"
                },
                {
                  icon: "homework",
                  title: "SavvyPro 独家开发程序",
                  description: "可视化课程进度"
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
                      1: require("../../../static/pages/courses/sas/SASMaterial.png?webp"),
                      2: require("../../../static/pages/courses/sas/SASMaterial.png?webp")
                    },
                    jpeg: {
                      1: require("../../../static/pages/courses/sas/SASMaterial.png?resize&size=650"),
                      2: require("../../../static/pages/courses/sas/SASMaterial.png?resize&size=1050")
                    }
                  },
                  text: "职场经验分享"
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
                      name: "QA 1: 第一节课可做试听课。（无论是否出勤第一节课）如需退课：请在第一节课后的六天",
                      body: "第一节课可做试听课。（无论是否出勤第一节课）如需退课：请在第一节课后的六天内，联系学习督导员或课程班主任说明情况，\
                      既可无条件全额退款。插班报名课程的退课有效期Enroll课程后24小时内。",
                    },
                    {
                      name: "QA 2: 课程的有效期是多久呢？",
                      body: "参加当期课程均可参加直播（教室）和网课（录播）两种上课形式。课程有效期内可以回放观看课程且不限次数。【课程有效期为当期课程结束当日+21天】",
                    },
                    {
                      name: "QA 3: 我们是如何上课的？",
                      body: "参加当期课程均可参加直播（教室）和网课（录播）两种上课形式。课程有效期内可回放观看课程且不限次数。\
                      【课程有效期为当期课程结束当日+21天】"
                    },
                    {
                      name: "QA 4: 我报名了SAS课程，如果没考过怎么办？",
                      body: "如果需要重新报名参加考试，请将重新注册好的带有考试日期的报名完成截图发给班主任，并申请加入针对最新考试时间最近的新的班级进行免费补听。"
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
