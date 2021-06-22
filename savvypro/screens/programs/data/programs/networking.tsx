import { Program, ProgramIDS, withPage } from "../core";
import { TemplateRenderProps } from "../../../../components/template";
export class Networking extends Program implements withPage {
  icon = {
    webp: {
      1: require("../../../../static/pages/programs/icons/socialmedia.png?webp"),
      2: require("../../../../static/pages/programs/icons/socialmedia.png?webp")
    },
    jpeg: {
      1: require("../../../../static/pages/programs/icons/socialmedia.png?resize&size=40"),
      2: require("../../../../static/pages/programs/icons/socialmedia.png?resize&size=60")
    }
  };

  video = {
    //link: 'https://savvyuni-web.s3.amazonaws.com/banners/Networking_banner.mp4',
    poster: "../../../../static/pages/programs/networking.png"
  };

  bannerInfo = {
    courseDetails: 'Networking 求职集训营',
    dateAndPlace: '美东时间2019年10月26日开课  |  多伦多  |  线上',
    price: 999,
    discountedPrice: 719,
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
            body: <div style={{ width: '353px', lineHeight: 1.5, letterSpacing: '1px', fontSize: 14 }}>很多专业背景相同的竞争者，为什么有的人能快速找到工作，但是有的人就是海投简历，却迟迟没有面试？<br /> <br />Networking 作为北美求职的必备技能，能够让你的优秀快速让别人认识到。快速、有效地和他人Networking，建立长期的relationship对于成功求职至关重要，也是中国留学生真正融入加拿大社会重要的一步。SavvyPro 的Networking课程会为大家系统化地训练职场中的社交求职能力，讲解简历与面试并配以实战模拟。具体内容包括如何与理想工作的HR建立好的关系，获得内推机会，如何打好Cold Call或者发Cold Email及时联络感情等等，同时老师也会不定期地给大家分享大型金融公司的Networking Event。</div>,
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
              videoId: "https://savvyuni-web.s3.amazonaws.com/%E7%9C%8BExcel%E8%80%81%E5%B8%88%E5%A6%82%E4%BD%95%E2%80%9C%E8%8A%B1%E5%BC%8F%E5%90%90%E6%A7%BD%E2%80%9Dnetworking_1.mp4",
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
                {
                  big: "2",
                  small: "周实战"
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
                      title: "Networking实战班",
                      classes: [
                        {
                          name: "10月求职集训营",
                          address: "720 Spadina Ave, Unit 310",
                          date: new Date("Oct 26, 2019")
                        },
                      ]
                    }
                  ]
                },
                {
                  name: "线上课程",
                  cards: [
                    {
                      title: "Networking实战班",
                      classes: [
                        {
                          name: "10月求职集训营",
                          date: new Date("Oct 26, 2019")
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
                            title: '',
                            data: [
                                <div><strong>Networking Framework:</strong> In this module, you’ll learn why networking is important, the governing principles, and how to think about and approach your networking at a high-level.</div>,
                                <div><strong>Lead Generation: </strong>In this module, you’ll learn how to find names and contact information for people working in whatever industry you’re interested in. It is critical leverage all resources. </div>,
                                <div><strong>Tracking Your Networking:</strong> In this module, you’ll learn how to track your networking efforts. We will cover how to use effective templates and only track things that matter. You’ll get used to using your tracking file properly all the time.</div>
                            ]
                        }
                      ]
                    },
                    {
                        name: "Lecture 2",
                        body: [
                          {
                              title: '',
                              data: [
                                <div><strong>Requesting Informational Interviews: </strong>In this module, you’ll learn how to set up informational Interviews. This requires a different skill set and knowledge of specific tricks and tactics to increase your success rate. </div>,
                                <div><strong>Cold Calls and Cold Emails:</strong> In this module, you’ll learn how to contact strangers specifically to ask about jobs. in particular, we will cover how to initiate your first contact as well as different follow-up scenarios.</div>,
                                <div><strong>Sending Effective Emails: </strong>In this module, you’ll learn how to set up and write effective emails that will substantially boost your response rates when networking. You’ll learn the principles, practices, and etiquette first, and then you’ll get dozens of email templates you can use in different situations.</div>
                              ]
                          }
                        ]
                    },
                    {
                        name: "Lecture 3",
                        body: [
                          {
                              title: '',
                              data: [
                                <div><strong>Conducting Informational Interviews: </strong>In this module, you’ll learn how to prepare for informational interviews-not only could you receive all the “standard”interview questions, but you also need to research the interviewer’s backgound so you can ask intelligent questions.</div>,
                                <div><strong>'Crafting “Your Story”:</strong> In this module, you’ll learn how to develop a 1-2 minute oitch that answers 3 important questions: who you are; what 2-3 relevant skils/experience you can bring; what you want to do now and why. You’ll also learn how to shorten your pitch to 3-5 sentences under different scenarios, so people don’t lose interest.</div>,
                                <div><strong>Follow-up and Relationship Building: </strong>In this module, you’ll learn how to make your “mini-ask”, follow-up, and make your “real ask”, You will understand how to develop the relationship over time and how to convert relationships into job interviews.</div>,
                              ]
                          }
                        ]
                    },
                    
                    {
                        name: "Lecture 4",
                        body: [
                          {
                              title: '',
                              data: [
                                <div><strong>Feedback and Takeaways:</strong> In this module, we will have a collaborative discussion on your progress so far and make sure that you are on the right track (what to do vs. what to avoid)</div>
                              ]
                          }
                        ]
                    },
                    {
                        name: "Lecture 5",
                        body: [
                          {
                              title: '',
                              data: [
                                <div><strong>Mastering Inofrmation Sessions: </strong>In this module, you will learn the mindset and key strategies to information sessions. We will explore the key considerations , the preparations required, and how to maximize your productivity</div>,
                                <div><strong>Networking with Colleagues:</strong> In this module, you’ll learn how to properly network with colleagues and how to ask for referrals and reconmmendations.</div>,
                                <div><strong>Setting up the Perfect LinkedIn Profile:</strong> In this module, you’ll learn how to use LinkedIn effectively for networking purposes. You’ll learn how to create a proper LinkedIn profile, including what to avoid and the mistakes that result in low response rates.</div>
                              ]
                          }
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
                title: "Michael",
                description: "CFA持证人，CFA协会成员, 加拿大最大私募基金之一OTPP负责投资管理",
                body: {
                //   minHeight: 250,
                  data: "毕业于滑铁卢大学数学系，CFA持证人，同时担任CFA协会和多伦多社会关系委员会成员。Michael老师现工作于加拿大最大的私募基金之一OTPP, 负责投资管理，曾就职于Deloitte和Alignvest Capital Management。Michael老师拥有超过7年的授课经验，曾是CIBC的Senior Recruiting Captain, 对帮助新人求职深有研究。"
                }
              },
            ] 
          }
        },
        sections: []
      },
      // {
      //   heading: {
      //     title: "学员$$反馈",
      //     subTitle: "学员真实好评，$$口碑保障"
      //   },
      //   sections: [],
      //   template: {
      //     type: "TemplateFullImageSlider",
      //     data: {
      //       heading: {},
      //       cards: [
      //         {
      //           webp: {
      //             1: require("../../../../static/pages/courses/cfa/convo.jpg?webp"),
      //             2: require("../../../../static/pages/courses/cfa/convo.jpg?webp")
      //           },
      //           jpeg: {
      //             1: require("../../../../static/pages/courses/cfa/convo.jpg?resize&size=400"),
      //             2: require("../../../../static/pages/courses/cfa/convo.jpg?resize&size=600")
      //           }
      //         },
      //         {
      //           webp: {
      //             1: require("../../../../static/pages/courses/cfa/convo.jpg?webp"),
      //             2: require("../../../../static/pages/courses/cfa/convo.jpg?webp")
      //           },
      //           jpeg: {
      //             1: require("../../../../static/pages/courses/cfa/convo.jpg?resize&size=400"),
      //             2: require("../../../../static/pages/courses/cfa/convo.jpg?resize&size=600")
      //           }
      //         },
      //         {
      //           webp: {
      //             1: require("../../../../static/pages/courses/cfa/convo.jpg?webp"),
      //             2: require("../../../../static/pages/courses/cfa/convo.jpg?webp")
      //           },
      //           jpeg: {
      //             1: require("../../../../static/pages/courses/cfa/convo.jpg?resize&size=400"),
      //             2: require("../../../../static/pages/courses/cfa/convo.jpg?resize&size=600")
      //           }
      //         },
      //         {
      //           webp: {
      //             1: require("../../../../static/pages/courses/cfa/convo.jpg?webp"),
      //             2: require("../../../../static/pages/courses/cfa/convo.jpg?webp")
      //           },
      //           jpeg: {
      //             1: require("../../../../static/pages/courses/cfa/convo.jpg?resize&size=400"),
      //             2: require("../../../../static/pages/courses/cfa/convo.jpg?resize&size=600")
      //           }
      //         },
      //         {
      //           webp: {
      //             1: require("../../../../static/pages/courses/cfa/convo.jpg?webp"),
      //             2: require("../../../../static/pages/courses/cfa/convo.jpg?webp")
      //           },
      //           jpeg: {
      //             1: require("../../../../static/pages/courses/cfa/convo.jpg?resize&size=400"),
      //             2: require("../../../../static/pages/courses/cfa/convo.jpg?resize&size=600")
      //           }
      //         },
      //         {
      //           webp: {
      //             1: require("../../../../static/pages/courses/cfa/convo.jpg?webp"),
      //             2: require("../../../../static/pages/courses/cfa/convo.jpg?webp")
      //           },
      //           jpeg: {
      //             1: require("../../../../static/pages/courses/cfa/convo.jpg?resize&size=400"),
      //             2: require("../../../../static/pages/courses/cfa/convo.jpg?resize&size=600")
      //           }
      //         }
      //       ]
      //     }
      //   }
      // },
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
                    "或参加考试，凭Fail的邮件或报名的邮件即可申请重修"
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
    super("Networking", "Networking 求职集训营", ["Networking"], 6);
  }
}
