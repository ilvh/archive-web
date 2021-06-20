import { IndexOffer } from "./offer/index";
import { HomePlatformData } from "./platform";
import { WhyUsData } from "./whyus";
import { HomeSkillsData } from "./skills";
import { HomeCoursesData } from "./courses";
import { HomeBannerData } from "./banner";
interface IndexData {
  Banner: HomeBannerData;
  Offer: IndexOffer;
  Platform: HomePlatformData;
  WhyUs: WhyUsData;
  Skills: HomeSkillsData;
  Courses: HomeCoursesData;
};

const indexData: IndexData = {
  Banner: {
    slides: [
      {
        image: {
          webp: {
            1: require("../../static/pages/home/banner/2.jpg?webp"),
            2: require("../../static/pages/home/banner/2.jpg?webp")
          },
          jpeg: {
            1: require("../../static/pages/home/banner/2.jpg?resize&size=1500"),
            2: require("../../static/pages/home/banner/2.jpg?resize&size=2500")
          }
        },
        title: <div><span className="text-white">打造</span><span className="text-green-500">金融精英</span><span className="text-white">，</span><span className="text-white">成就</span><span className="text-green-500">职场未来</span></div>,
        description:
          <div><span className="text-white">我们致力于将</span><span className="text-yellow-500">世界级的教育体验</span><span className="text-white">带给下一代金融从业者</span></div>,
      },
      // {
      //   image: {
      //     webp: {
      //       1: require("../../static/pages/programs/defaultBanner.jpg?webp"),
      //       2: require("../../static/pages/programs/defaultBanner.jpg?webp")
      //     },
      //     jpeg: {
      //       1: require("../../static/pages/programs/defaultBanner.jpg?resize&size=1500"),
      //       2: require("../../static/pages/programs/defaultBanner.jpg?resize&size=2500")
      //     }
      //   },
      //   title: <div className="text-yellow-500" style={{ fontSize: 25 }}>备考12月，一触即发</div>,
      //   description:
      //     <div className="text-white" style={{ fontSize: 40 }}>CFA一级证书保过全程班</div>,
      //   action: {
      //     text: "查看详情",
      //     link: './courses/CFA-Level-1'
      //   },
      //   bannerInfo: {
      //     bannerTitle: '打架报名中🔥',
      //     courseDetails: 'CFA一级(12月考试) 7月全程班',
      //     dateAndPlace: '美东时间2019年7月6日开课  |  多伦多  |  线上',
      //     price: 2000,
      //     discountedPrice: 1480,
      //     extraInfo: '（开课后6天内无条件退换课）',
      //     chatBubble: '早报名，惊喜优惠',
      //     buttonInfo: '惊喜价！不容错过！'
      //   },
      // },
      // {
      //   image: {
      //     webp: {
      //       1: require("../../static/pages/programs/frm.jpg?webp"),
      //       2: require("../../static/pages/programs/frm.jpg?webp")
      //     },
      //     jpeg: {
      //       1: require("../../static/pages/programs/frm.jpg?resize&size=1500"),
      //       2: require("../../static/pages/programs/frm.jpg?resize&size=2500")
      //     }
      //   },
      //   title: <div>FRM Part 1证书保过班</div>,
      //   action: {
      //     text: "查看详情",
      //     link: './programs/FRM'
      //   },
      //   bannerInfo: {
      //     bannerTitle: '热血报名中🔥',
      //     courseDetails: 'FRM证书7月全程班',
      //     dateAndPlace: '美东时间2019年7月21日开课  | 线上',
      //     price: 2000,
      //     discountedPrice: 1480,
      //     extraInfo: '（开课后6天内无条件退换课）',
      //     buttonInfo: '惊喜价！不容错过！'
      //   },
      // }
    ]
  },
  Offer: {
    title: "学员的Offer",
    description:
      "SavvyPro已经帮助上千名学生通过包括CFA在内的金融考试，收获理想的工作Offer。我们的学生广泛分布并活跃在各大北美顶尖金融机构和科技公司，编织起一个紧密相联Networking网络，从而帮助更多的学生轻松通过考试，获得实战经验，找到理想工作,让求职变得更简单！",
    backgroundImage: {
      webp: {
        1: require("../../static/pages/home/offer/offerImage.png?webp"),
        2: require("../../static/pages/home/offer/offerImage.png?webp")
      },
      png: {
        1: require("../../static/pages/home/offer/offerImage.png?resize&size=1400"),
        2: require("../../static/pages/home/offer/offerImage.png?resize&size=2000")
      }
    },
    progress: [
      { percentage: 90, title: "求职率" },
      { percentage: 89, title: "证书通过率" }
    ],
    testimonials: [
      {
        text:
          "毕业之前一口气考了FRM和CFA证书，本以为可以很顺利的找到工作。考取两个证书我自己认为自己的优势还是很强的，结果在海投的路上我走了半年多，依然效果不佳。还好听了导师的建议，我学习了Networking，按照老师教的方法通过3个月的时间，积累了很多人脉，通过人脉资源最后找到了OTPP的工作，觉得自己非常幸运！",
        course: "FRM保过班, CFA保过班, Networking",
        offer: "OTPP投资管理",
        by: "Murphy"
      },
      {
        text:
          "我不是什么名校出身，自己知道要想和名校的学生竞争岗位一定要比别人付出的多，所以大学期间就在SavvyPro学习了很多软件技能，后来成功得到了SunLife的实习机会，毕业之后，SunLife岗位空缺，我也成功获得了全职岗位。感谢SavvyPro的课程，对我带来如此大的帮助，助我成功找到工作，迈出职场第一步。",
          course: "SAS 证书保过班, SAS Project实战班,  Python实战班",
          offer: "SunLife Financial 数据分析师",
          by: "Alice"
      },
      {
        text:
          "身在美国这样一个竞争激烈的国家，如果不提高自己的竞争力很难找到一份稳定，比较好的工作，机会多竞争也大。虽然在大学期间学习了SAS的基础，但实习过程中发现所学的东西根本不够，所以参加了SavvyPro的SAS Project课程，老师教了我们很多可以在工作项目中应用的技能，从而丰富了我的实战能力，在工作中受益匪浅。",
          course: "SAS Project实战班",
          offer: "Bank of America Merrill Lynch金融分析师",
          by: "Michael"
      },
      {
        text:
          "其实毕业之前一直在想自己应该做些什么，盲目且迷茫，就在这时，在朋友的推荐下报了SavvyPro的CFA证书保过班，在老师的帮助下，一次就通过了SavvyPro的CFA的一级考试，现在在准备CFA的二级证书，秋招时, 在SavvyPro老师的建议与辅导下，最终通过4次面试，成功斩获E&Y的Offer，非常感谢SavvyPro!",
          course: "CFA 证书保过班",
          offer: "E&Y 金融分析师",
          by: "Nino"
      },
      {
        text:
          "在就业这么难的加拿大，没有一技之长傍身，没有证书作为敲门砖的话，真的没有办法这么顺利找到工作。我在大学最后一年，根据SavvyPro导师给我的建议，考取了FRM的证书，顺利进入加拿大五大行TD银行Risk岗位，非常感谢SavvyPro的课程，帮助我成功考取FRM证书，从而找到今天的工作。",
          course: "SQL实战班, FRM证书保过班",
          offer: "TD银行，风险分析师",
          by: "Selina"
      },
    ]
  },
  Platform: {
    title: "我们的$$学习平台",
    subTitle: "积极打造人性化，自主化的用户学习体验",
    description:
      "思睿LMS作为思睿自主研发的学生学习管理平台，旨在帮助学生打造便捷，高效的学习体验，同时满足线上，线下的学习需求，从讲义，作业，视频到答疑，更好地服务学生的学习过程，帮助学生取得理想的学习成果。",
    platformImages: {
      1: {
        webp: {
          1: require("../../static/pages/home/platform/1.png?webp"),
          2: require("../../static/pages/home/platform/1.png?webp")
        },
        png: {
          1: require("../../static/pages/home/platform/1.png?resize&size=650"),
          2: require("../../static/pages/home/platform/1.png?resize&size=1200")
        }
      },
      2: {
        webp: {
          1: require("../../static/pages/home/platform/2.png?webp"),
          2: require("../../static/pages/home/platform/2.png?webp")
        },
        png: {
          1: require("../../static/pages/home/platform/2.png?resize&size=650"),
          2: require("../../static/pages/home/platform/2.png?resize&size=1200")
        }
      }
    },
    iconList: [
      {
        icon: "icon-video",
        text: "教学视频"
      },
      {
        icon: "icon-classnote",
        text: "课堂讲义"
      },
      {
        icon: "icon-homework",
        text: "课后作业"
      },
      {
        icon: "icon-sample",
        text: "实战案例"
      },
      {
        icon: "icon-questionbank",
        text: "海量题库"
      }
    ]
  },
  WhyUs: {
    title: "为什么选择我们的课程?",
    backgroundImage: {
      webp: {
        1: require("../../static/pages/home/whyus/background.jpg?webp"),
        2: require("../../static/pages/home/whyus/background.jpg?webp")
      },
      jpeg: {
        1: require("../../static/pages/home/whyus/background.jpg?resize&size=1500"),
        2: require("../../static/pages/home/whyus/background.jpg?resize&size=2000")
      }
    },
    cards: [
      {
        icon: "icon-teacher",
        title: "来自北美顶尖金融领域的专家授课",
        text:
          "授课导师来自北美顶尖金融机构；具有至少5年以上的工作与授课经验；深度钻研教学产品，不断改进教学方式；分享求职经验，指点求职迷津，工作机会内推。"
      },
      {
        icon: "icon-curriculum",
        title: "科学的课程设置，系统的教学体系",
        text:
          "不断钻研知识体系，优化教学方案；丰富课程练习，完善面试题库；课程内容深入浅出，理论与实践相结合。"
      },
      {
        icon: "icon-teacherta",
        title: "班主任&助教全程陪护式服务",
        text:
          "及时在线答疑解惑，协助同学完成作业与实战Project，课程中与学员不断复盘，力求掌握每个知识点，全程跟进教学，确保作业完成度与课程满意度。贴心售后，及时回访，不断提高服务与课程质量。"
      },
      {
        icon: "icon-onlineoffline",
        title: "线上&线下结合的教学模式",
        text:
          "结合在线学习与传统培训的优势；线上与面授相结合，加深学生对内容的理解；满足学生的自主性，灵活性与积极性；打造线上学习群，答疑讨论全总结。"
      }
    ]
  },
  Skills: {
    title: "选择你感兴趣的$$技能",
    skills: [
      {
        image: {
          svg: require("../../static/pages/home/skills/excelvba.svg")
        },
        text: "Excel-VBA",
        url: "/programs/Excel-VBA"

      },
      {
        image: {
          svg: require("../../static/pages/home/skills/cfa.svg")
        },
        text: "CFA证书",
        url: "/courses/CFA-Level-1"
      },
      {
        image: {
          svg: require("../../static/pages/home/skills/socialmedia.svg")
        },
        text: "社交Networking",
        url: "/programs/Networking"
      },
      {
        image: {
          svg: require("../../static/pages/home/skills/frm.svg")
        },
        text: "FRM 证书",
        url: "/programs/FRM"
      },
      {
        image: {
          svg: require("../../static/pages/home/skills/sas.svg")
        },
        text: "SAS",
        url: "/programs/SAS"
      },
      {
        image: {
          svg: require("../../static/pages/home/skills/python.svg")
        },
        text: "Python数据分析",
        url: "/programs/Python"
      },
      {
        image: {
          svg: require("../../static/pages/home/skills/sql.svg")
        },
        text: "SQL数据库",
        url: "/programs/SQL"
      },
      {
        image: {
          svg: require("../../static/pages/home/skills/csc.svg")
        },
        text: "CSC证书",
        url: "/programs/CSC"
      },
      // {
      //   image: {
      //     svg: require("../../static/pages/home/skills/tableau.svg")
      //   },
      //   text: "Tableau"
      // },
      // {
      //   image: {
      //     svg: require("../../static/pages/home/skills/r.svg")
      //   },
      //   text: "R语言"
      // }
    ]
  },
  Courses: {
    cmsTitle: "实战$$专场",
    cmsSubtitle: "软件实战",
    cmsCourses: [],

    cmsTitle2: "实战$$专场",
    cmsSubtitle2: "求职实战",
    cmsCourses2: [],

    cmsTitle3: "证书$$专场",
    cmsSubtitle3: null,
    cmsCourses3: [],

    //第一行
    title1: "我们的$$课程",
    description1: "8月即将开课",
    courses1: [
      {
        starts: "7月14日",
        name: "线上课程&多伦多线下",
        pastPrice: "$999",
        newPrice: "$750",
        types: ["查看详情"],
        link: "./courses/SAS-Base-1",
        image: {
          jpeg: {
            1: require("../../static/pages/home/courses/sas.png?resize&size=360"),
            2: require("../../static/pages/home/courses/sas.png?resize&size=560")
          },
          webp: {
            1: require("../../static/pages/home/courses/sas.png?webp"),
            2: require("../../static/pages/home/courses/sas.png?webp")
          }
        }
      },

      {
        starts: "10月5日",
        name: "线上课程&多伦多线下",
        pastPrice: "$999",
        newPrice: "$750",
        types: ["查看详情"],
        link: '../courses/Excel-VBA',
        image: {
          jpeg: {
            1: require("../../static/pages/home/courses/excel.jpg?resize&size=360"),
            2: require("../../static/pages/home/courses/excel.jpg?resize&size=560")
          },
          webp: {
            1: require("../../static/pages/home/courses/excel.jpg?webp"),
            2: require("../../static/pages/home/courses/excel.jpg?webp")
          }
        }
      },

      {
        starts: "10月23日",
        name: "线上课程&多伦多线下",
        pastPrice: "$999",
        newPrice: "$750",
        types: ["查看详情"],
        link: "./programs/SQL",
        image: {
          jpeg: {
            1: require("../../static/pages/home/courses/sql.jpg?resize&size=360"),
            2: require("../../static/pages/home/courses/sql.jpg?resize&size=560")
          },
          webp: {
            1: require("../../static/pages/home/courses/sql.jpg?webp"),
            2: require("../../static/pages/home/courses/sql.jpg?webp")
          }
        }
      },

    ],

    //第二行
    title2: "数据$$专场",
    description2: "数据入门",
    courses2: [

      {
        starts: "10月15日",
        name: "线上课程&多伦多线下",
        pastPrice: "$980",
        newPrice: "$739",
        types: ["查看详情"],
        link: "./courses/SAS-Base-1",
        image: {
          jpeg: {
            1: require("../../static/pages/home/courses/sas.png?resize&size=360"),
            2: require("../../static/pages/home/courses/sas.png?resize&size=560")
          },
          webp: {
            1: require("../../static/pages/home/courses/sas.png?webp"),
            2: require("../../static/pages/home/courses/sas.png?webp")
          }
        }
      },

      {
        starts: "10月23日",
        name: "线上课程&多伦多线下",
        pastPrice: "$749",
        newPrice: "$549",
        types: ["查看详情"],
        link: "./programs/SQL",
        image: {
          jpeg: {
            1: require("../../static/pages/home/courses/sql.jpg?resize&size=360"),
            2: require("../../static/pages/home/courses/sql.jpg?resize&size=560")
          },
          webp: {
            1: require("../../static/pages/home/courses/sql.jpg?webp"),
            2: require("../../static/pages/home/courses/sql.jpg?webp")
          }
        }
      },

      {
        starts: "10月5日",
        name: "线上课程&多伦多线下",
        pastPrice: "$980",
        newPrice: "$739",
        types: ["查看详情"],
        link: '../courses/Excel-VBA',
        image: {
          jpeg: {
            1: require("../../static/pages/home/courses/excel.jpg?resize&size=360"),
            2: require("../../static/pages/home/courses/excel.jpg?resize&size=560")
          },
          webp: {
            1: require("../../static/pages/home/courses/excel.jpg?webp"),
            2: require("../../static/pages/home/courses/excel.jpg?webp")
          }
        }
      },

    ],

    //第三行
    title3: "数据$$专场",
    description3: "数据大师",
    courses3: [
    
      {
        starts: "9月11日",
        name: "直播",
        pastPrice: "$499",
        newPrice: "$199",
        types: ["即将上线"],
        image: {
          jpeg: {
            1: require("../../static/pages/home/courses/Tableau.png?resize&size=360"),
            2: require("../../static/pages/home/courses/Tableau.png?resize&size=560")
          },
          webp: {
            1: require("../../static/pages/home/courses/Tableau.png?webp"),
            2: require("../../static/pages/home/courses/Tableau.png?webp")
          }
        }
      },

      {
        starts: "9月18日",
        name: "线上课程",
        pastPrice: "$980",
        newPrice: "$599",
        types: ["查看详情"],
        link: "./courses/SASProject",
        image: {
          jpeg: {
            1: require("../../static/pages/home/courses/SAS实战.png?resize&size=360"),
            2: require("../../static/pages/home/courses/SAS实战.png?resize&size=560")
          },
          webp: {
            1: require("../../static/pages/home/courses/SAS实战.png?webp"),
            2: require("../../static/pages/home/courses/SAS实战.png?webp")
          }
        }
      },

      {
        starts: "9月21日",
        name: "线上课程&多伦多线下",
        pastPrice: "$849",
        newPrice: "$599",
        types: ["查看详情"],
        link: "./programs/Python",
        image: {
          jpeg: {
            1: require("../../static/pages/home/courses/Python.png?resize&size=360"),
            2: require("../../static/pages/home/courses/Python.png?resize&size=560")
          },
          webp: {
            1: require("../../static/pages/home/courses/Python.png?webp"),
            2: require("../../static/pages/home/courses/Python.png?webp")
          }
        }
      },

    ],

    //第四行
    title4: "金融$$专场",
    description4: "银行前台",
    courses4: [
    
      {
        starts: "10月5日",
        name: "线上课程",
        pastPrice: "$749",
        newPrice: "$599",
        types: ["查看详情"],
        link: "./programs/CSC",
        image: {
          jpeg: {
            1: require("../../static/pages/home/courses/CSC.png?resize&size=360"),
            2: require("../../static/pages/home/courses/CSC.png?resize&size=560")
          },
          webp: {
            1: require("../../static/pages/home/courses/CSC.png?webp"),
            2: require("../../static/pages/home/courses/CSC.png?webp")
          }
        }
      },

      {
        starts: "10月5日",
        name: "线上课程&多伦多线下",
        pastPrice: "$980",
        newPrice: "$739",
        types: ["查看详情"],
        link: '../courses/Excel-VBA',
        image: {
          jpeg: {
            1: require("../../static/pages/home/courses/excel.jpg?resize&size=360"),
            2: require("../../static/pages/home/courses/excel.jpg?resize&size=560")
          },
          webp: {
            1: require("../../static/pages/home/courses/excel.jpg?webp"),
            2: require("../../static/pages/home/courses/excel.jpg?webp")
          }
        }
      },

      {
        starts: "10月26日",
        name: "线上课程&多伦多线下",
        pastPrice: "$999",
        newPrice: "$719",
        types: ["查看详情"],
        link: "./programs/Networking",
        image: {
          jpeg: {
            1: require("../../static/pages/home/courses/Networking.png?resize&size=360"),
            2: require("../../static/pages/home/courses/Networking.png?resize&size=560")
          },
          webp: {
            1: require("../../static/pages/home/courses/Networking.png?webp"),
            2: require("../../static/pages/home/courses/Networking.png?webp")
          }
        }
      },

    ],

    //第五行
    title5: "金融$$专场",
    description5: "金融后台",
    courses5: [
    
      {
        starts: "9月8日",
        name: "线上课程&多伦多线下",
        pastPrice: "$2000",
        newPrice: "$1480",
        types: ["查看详情"],
        link: "./courses/CFA-Level-1",
        image: {
          jpeg: {
            1: require("../../static/pages/home/courses/CFA1.png?resize&size=360"),
            2: require("../../static/pages/home/courses/CFA1.png?resize&size=560")
          },
          webp: {
            1: require("../../static/pages/home/courses/CFA1.png?webp"),
            2: require("../../static/pages/home/courses/CFA1.png?webp")
          }
        }
      },

      {
        starts: "10月23日",
        name: "线上课程&多伦多线下",
        pastPrice: "$749",
        newPrice: "$549",
        types: ["查看详情"],
        link: "./programs/SQL",
        image: {
          jpeg: {
            1: require("../../static/pages/home/courses/sql.jpg?resize&size=360"),
            2: require("../../static/pages/home/courses/sql.jpg?resize&size=560")
          },
          webp: {
            1: require("../../static/pages/home/courses/sql.jpg?webp"),
            2: require("../../static/pages/home/courses/sql.jpg?webp")
          }
        }
      },

      {
        starts: "10月5日",
        name: "线上课程&多伦多线下",
        pastPrice: "$980",
        newPrice: "$739",
        types: ["查看详情"],
        link: '../courses/Excel-VBA',
        image: {
          jpeg: {
            1: require("../../static/pages/home/courses/excel.jpg?resize&size=360"),
            2: require("../../static/pages/home/courses/excel.jpg?resize&size=560")
          },
          webp: {
            1: require("../../static/pages/home/courses/excel.jpg?webp"),
            2: require("../../static/pages/home/courses/excel.jpg?webp")
          }
        }
      },

    ],

    //第六行
    title6: "金融$$专场",
    description6: "金融模型",
    courses6: [
    
      {
        starts: "10月23日",
        name: "线上课程&多伦多线下",
        pastPrice: "$749",
        newPrice: "$549",
        types: ["查看详情"],
        link: "./programs/SQL",
        image: {
          jpeg: {
            1: require("../../static/pages/home/courses/sql.jpg?resize&size=360"),
            2: require("../../static/pages/home/courses/sql.jpg?resize&size=560")
          },
          webp: {
            1: require("../../static/pages/home/courses/sql.jpg?webp"),
            2: require("../../static/pages/home/courses/sql.jpg?webp")
          }
        }
      },

      {
        starts: "9月21日",
        name: "线上课程&多伦多线下",
        pastPrice: "$849",
        newPrice: "$599",
        link: "",
        types: ["查看详情"],
        link: "./programs/Python",
        image: {
          jpeg: {
            1: require("../../static/pages/home/courses/Python.png?resize&size=360"),
            2: require("../../static/pages/home/courses/Python.png?resize&size=560")
          },
          webp: {
            1: require("../../static/pages/home/courses/Python.png?webp"),
            2: require("../../static/pages/home/courses/Python.png?webp")
          }
        }
      },

      {
        starts: "10月15日",
        name: "线上课程&多伦多线下",
        pastPrice: "$980",
        newPrice: "$739",
        types: ["查看详情"],
        link: "./courses/SAS-Base-1",
        image: {
          jpeg: {
            1: require("../../static/pages/home/courses/sas.png?resize&size=360"),
            2: require("../../static/pages/home/courses/sas.png?resize&size=560")
          },
          webp: {
            1: require("../../static/pages/home/courses/sas.png?webp"),
            2: require("../../static/pages/home/courses/sas.png?webp")
          }
        }
      },

    ],    

    //第七行
    title7: "金融$$专场",
    description7: "风险管理",
    courses7: [
    
      {
        starts: "2020年1月",
        name: "多伦多线下",
        // pastPrice: "$600",
        newPrice: "$1480",
        types: ["查看详情"],
        link: './programs/FRM',
        image: {
          jpeg: {
            1: require("../../static/pages/home/courses/FRM.png?resize&size=360"),
            2: require("../../static/pages/home/courses/FRM.png?resize&size=560")
          },
          webp: {
            1: require("../../static/pages/home/courses/FRM.png?webp"),
            2: require("../../static/pages/home/courses/FRM.png?webp")
          }
        }
      },

      {
        starts: "10月15日",
        name: "线上课程&多伦多线下",
        pastPrice: "$980",
        newPrice: "$739",
        types: ["查看详情"],
        link: "./courses/SAS-Base-1",
        image: {
          jpeg: {
            1: require("../../static/pages/home/courses/sas.png?resize&size=360"),
            2: require("../../static/pages/home/courses/sas.png?resize&size=560")
          },
          webp: {
            1: require("../../static/pages/home/courses/sas.png?webp"),
            2: require("../../static/pages/home/courses/sas.png?webp")
          }
        }
      },

      {
        starts: "10月5日",
        name: "线上课程&多伦多线下",
        pastPrice: "$980",
        newPrice: "$739",
        types: ["查看详情"],
        link: '../courses/Excel-VBA',
        image: {
          jpeg: {
            1: require("../../static/pages/home/courses/excel.jpg?resize&size=360"),
            2: require("../../static/pages/home/courses/excel.jpg?resize&size=560")
          },
          webp: {
            1: require("../../static/pages/home/courses/excel.jpg?webp"),
            2: require("../../static/pages/home/courses/excel.jpg?webp")
          }
        }
      },

    ],                

    description222: "理论，软件，实战三合一",
    threeInOne: [
      {
        icon: "icon-software",
        title: "实用性软件操作",
        description:
          "教授职场必备软件技能，手把手带你练习，提高工作效率, 为你的技能加分！"
      },
      {
        icon: "icon-handshake",
        title: "经典商业案例实操",
        description:
          "商业案例贯穿课程，学与练结合，弥补工作经验空白，为你的简历加分！"
      },
      {
        icon: "icon-theory",
        title: "知识理论讲解",
        description: "知识点梳理，重难点攻破，扎实金融知识，为你的理论加分！"
      }
    ]
  }
};
export default indexData;
