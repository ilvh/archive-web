import { Course } from "../data";
export const CFALevel2: Course = {
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
  id: "CFA-Level-2",
  name: "CFA二级证书保过班",
  cmsId: 4,
  bannerInfo: {
    courseDetails: 'CFA二级(2020年6月考试) 1月全程班',
    dateAndPlace: '美东时间2019年11月17日开课  |  多伦多  |  线上',
    price: 2000,
    discountedPrice: 1480,
    extraInfo: '（开课后6天内无条件退换课）',
    chatBubble: '早报名，惊喜优惠',
    buttonInfo: '惊喜价！不容错过！'
  },
  video: {
    link: 'https://savvyuni-web.s3.amazonaws.com/banners/CFA_banner_new.mp4',
    poster: "../../../static/pages/programs/defaultBanner.jpg"
  },
  description:
    "这门课程是面向已经通过一级证书，备考CFA二级考试的学生准备的，涵盖全部考试重难点，帮助同学扎实理论基础，同时通过大量的真题训练，帮助同学们轻松通过考试。",
  link: './courses/CFA-Level-2',
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
              "系统化的保过课程，包含CFA 二级考试的全部知识点",
              "无死角梳理课程理论，5年CFA易错点难点剖析",
              "5名拥有3年以上教课经验的老师一同代课，学习小组互相督促",
              "专门配备的CFA班主任老师为大家实时答疑",
              "海量精选模拟真题",
              "线上、线下两种模式，配套讲义，视频与作业",
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
              videoId: "https://savvyuni-web.s3.amazonaws.com/Quant+0126+1.mov",
              caption: "想要试听完整公开课？$$联系客服",
              text: "5分钟免费公开课试听"
            },
            ban: {
              card: {
                first: "SavvyPro学员CFA二级证书",
                second: "一次通过率",
                large: "82",
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
                  big: "1000+",
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
                  name: "多伦多线下班",
                  cards: [
                    {
                      title: "CFA2020年6月2级备考",
                      classes: [
                        {
                          name: "CFA2级备考全程班",
                          address: "720 Spadina Ave, Unit 310",
                          date: new Date("Nov 17, 2019")
                        }
                      ]
                    }
                  ]
                },
                {
                  name: "线上课程",
                  cards: [
                    {
                      title: "CFA 2020年6月2级备考",
                      classes: [
                        {
                          name: "CFA2级备考全程班",
                          // address: "720 Spadian Ave, Unit 310",
                          date: new Date("Nov 17, 2019")
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
                  minHeight: 330,
                  data: <div style={{ lineHeight: 1.8 }}>新加坡南洋理工大学生物工程学士，多伦多大学MBA, 加拿大五大行BMO银行Manager, 负责 Aggregate Model Risk，制定Model Risk架构等工作。<br/>作为CFA的一级导师，具有大量的教学经验，上课风趣幽默，已经帮助超过百名同学高分通过CFA考试。</div>
                }
              },
              {
                title: "Sophia",
                description: "CFA & FRM持证人，多伦多大学MFE, \nCPPIB负责债券投资",
                body: {
                  minHeight: 330,
                  data: <div style={{ lineHeight: 1.8 }}>研究生毕业于多伦多大学 Master of Financial Economics(MFE)专业，CFA&FRM 持证人。现就职于加拿大最大的私募基金之一CPPIB, 主要负责债券类投资的Portfolio Construction Management和 Business Management。<br/>作为CFA一级授课导师，主要负责Economics Equity Investments 和Portfolio Managment部分，理论知识扎实，教学经验丰富。</div>

                }
              },
              {
                title: "Lingjie",
                description: <div style={{ lineHeight: 1.8 }}>CFA持证人，TD Bank Risk Managment</div>,
                body: {
                  minHeight: 330,
                  data: <div style={{ lineHeight: 1.8 }}>
                  研究生毕业于加拿大皇后大学Master of Finance，CFA持证人，目前就职于加拿大五大行TD银行，负责Risk Management。曾在中国招商银行担任理财师，为高净值客户搭建Portfolio并随时根据市场情况调整。
                  <br/>CFA一级考试中主要负责Quant和Fixed Income部分，在教授理论同时，积极与学员分享自己丰富的工作经验以及在不同背景银行的工作经历，为学生就业提供建议与帮助。
                 </div>
                }
              },
              {
                title: "Daisy",
                description: <div style={{ lineHeight: 1.8 }}>Ivey Business School MBA, ACCA会员</div>,
                body: {
                  minHeight: 330,
                  data: <div style={{ lineHeight: 1.8 }}>
                 毕业于Ivey Business School, Western University的工商管理硕士(MBA) 项目， 英国注册会计师协会ACCA会员。 目前就职于加拿大联邦政府旗下某政策性银行，为本地中小企业提供战略运营管理咨询服务。曾在某世界知名500强快速消费品公司中国总部担任任职，历任财务、采购和市场等部门多个项目的负责人。
                 <br/>作为CFA二级课程导师，教学经验丰富，与其他导师共同帮助学员高效通过CFA考试。
                 </div>
                }
              },
              {
                title: "Sunny",
                description: <div style={{ lineHeight: 1.8 }}>Master of Finance, 90% percentile通过CFA二级考试</div>,
                body: {
                  minHeight: 330,
                  data: <div style={{ lineHeight: 1.8 }}>
                 毕业于Wilfrid Laurier University，本科Business Administrative+Accounting专业，研究生就读Master of finance，对Accounting及Finance有深入的学习。
                 <br/>Sunny导师曾以90%以上percentile通过CFA二级考试，非常了解这两年CFA考试趋势及考试重点的变化。同时也在在同步辅导教授Accounting等课程。
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
                  1: require("../../../static/pages/courses/cfa/cfa2_1.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/cfa2_1.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/cfa2_1.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/cfa2_1.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/cfa2_2.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/cfa2_2.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/cfa2_2.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/cfa2_2.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/cfa2_3.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/cfa2_3.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/cfa2_3.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/cfa2_3.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/cfa2_4.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/cfa2_4.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/cfa2_4.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/cfa2_4.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/cfa2_5.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/cfa2_5.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/cfa2_5.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/cfa2_5.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/cfa2_6.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/cfa2_6.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/cfa2_6.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/cfa2_6.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/cfa2_7.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/cfa2_7.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/cfa2_7.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/cfa2_7.jpg?resize&size=600")
                }
              },
              {
                webp: {
                  1: require("../../../static/pages/courses/cfa/cfa2_8.jpg?webp"),
                  2: require("../../../static/pages/courses/cfa/cfa2_8.jpg?webp")
                },
                jpeg: {
                  1: require("../../../static/pages/courses/cfa/cfa2_8.jpg?resize&size=400"),
                  2: require("../../../static/pages/courses/cfa/cfa2_8.jpg?resize&size=600")
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
