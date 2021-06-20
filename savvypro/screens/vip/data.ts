const data = {
  Area: {
    风险管理: ['Risk Management Analyst','Risk Control Consultant','Risk Management','Compliance & Governance'],
    商业分析: ['Business Analyst'],
    数据分析: ['Data Analyst','Data Scientist'],
    财务分析: [],
    会计审计: ['Fund Accountant'],
    零售银行: ['Retail Banking','CSR','FSR(Financial Service Representative)'],
    编程AI: ['Data Scientist','Machine Learning'],
    项目管理: ['Project Management'],
    资产管理: ['Investment Analyst','Asset Management Auditor','Wealth & Asset Management'],
    市场分析: ['Marketing Analyst','Marketing Coordinator','Marketing Specialist']
  },
  Highlights: [{
    title: '背景与技能提升阶段',
    icon: 'icon-software',
    description: '求职背景提升课程 - 求职必备技能课程 - 实习与系统化背景提升 - 远程实习',
    details: {
      求职背景提升课程: ['分析了解目前求职市场上最为热门的八大行业','全面拆分行业细节，分析个人求职优势，求职能力全面优化','行为面试全线辅导， 拆分难点，基础行为面试全解'],
      求职必备技能课程: ['Excel.png','Python.png','SAS.png','SQL.png','Tableau.png','商务口语.png'],
      实习与系统化背景提升: '饼图.png'
    }
  }, {
    title: '求职准备阶段',
    icon: 'icon-theory',
    description: '求职规划与咨询=>个人履历精修与人脉构建=>Networking 与职场社交 ',
    details: {
      求职规划与咨询: ['个人职业规划','求职行业解析','个人定制化求职策略'],
      个人履历精修与人脉构建: ['针对个人求职方向的简历精修','求职信（Cover Letter） 精修','求职邮件精修（ 与HR、Hiring Manager 的邮件） 精修'],
      Networking与职场社交 : ['社交与人脉拓展能力培训（沟通技能培训）','个人社交履历精修 （LinkedIn）','与行业大咖Coffee Chat 交流 ']
    }
  }, {
    title: '求职冲刺阶段',
    icon: 'icon-curriculum',
    description: '求职软硬技能提升=>求职辅助 ',
    details: {
      求职软硬技能提升: ['行为面试辅导', '行为面试逐字稿', '技术类面试指导','技术类面试逐字稿','模拟面试与复盘','面试复盘文档'],
      求职辅助: ['在线答疑', '一对一答疑课程'],
    }
  }, {
    title: '额外求职服务与职前辅导',
    icon: 'icon-handshake',
    description: ['SavvyPro 职场讲座无限次参与','职场心理疏通 沟通', '背景调查与职前咨询'],
  }],
  PlanSelections: [{
    title: '背景与技能提升阶段',
    level: 1,
    children: [{
      title: '求职背景提升课程',
      children: [{
        title: '行业解析课程',
        basic: true
      },{
        title: '求职强化课程',
        basic: true
      },{
        title: '行为面试辅导课程',
        basic: true
      }]
    },{
      title: '求职必备技能课程',
      children: [{
        title: 'SQL、SAS、 Excel/ VBA 、Python、 Tableau、商务口语等系列课程',
        premium: '可选3项',
        golden: '可选5项'
      }]
    },{
      title: '实习与系统化背景提升',
      children: [{
        title: '数据分析， 证券分析，风险管理等实战项目课程',
        premium: '可选1项',
        golden: '可选2项'
      },{
        title: '背景提升以及远程实习项目',
        golden: '1个'
      }]
    }]
  },{
    title: '求职准备阶段',
    level: 1,
    children: [{
      title: '求职规划与咨询',
      children: [{
        title: '个人职业规划',
        basic: true,
      },{
        title: '求职行业解析',
        basic: true,
      },{
        title: '个人定制化求职策略',
        basic: true,
      }]
    },{
      title: '个人履历精修与人脉构建',
      children: [{
        title: '针对个人求职方向的简历精修 ',
        basic:'1个方向',
        premium:'1个方向',
        golden:'1个方向'
      },{
        title: '求职信（Cover Letter）精修',
        basic:'1个方向',
        premium:'1个方向',
        golden:'1个方向'
      },{
        title: '求职邮件精修（ 与HR、Hiring Manager 的邮件）精修',
        basic:'3次',
        premium:'Unlimited',
        golden:'Unlimited'
      },{
        title: '手把手指导如何根据工作描述与所在行业个性化修改简历',
        golden:'三个工作'
      }]
    },{
      title: 'Networking 与职场社交',
      children: [{
        title: '社交与人脉拓展能力培训（沟通技能培训）',
        premium: true,
      },{
        title: '个人社交履历精修 （LinkedIn）',
        premium: true,
      },{
        title: '与行业大咖Coffee Chat交流',
        premium: '3位导师',
        golden: '5位导师'
      }]
    }]
  },{
    title:'求职冲刺阶段',
    level: 1,
    children: [{
      title:'求职软硬技能提升',
      children:[{
        title:'行为面试辅导',
        basic: true
      },{
        title:'行为面试逐字稿',
        premium: true
      },{
        title:'技术类面试辅导',
        basic: '1H x 2',
        premium: '1H x 2',
        golden: '1H x 3',
      },{
        title:'技术类面试逐字稿',
        premium: true
      },{
        title:'模拟面试与复盘',
        basic: '1H x 2',
        premium: '1H x 2',
        golden: '1H x 4',
      },{
        title:'面试复盘文档',
        premium: true
      }]
    },{
      title:'求职辅助',
      children: [{
        title:'在线答疑',
        basic: true
      },{
        title:'附加答疑课程（学员可因个人需要自行与老师安排）',
        premium: '1H',
        golden: '1H x 2'
      }]
    }]
  },{
    title:'额外增值服务与职前辅导',
    level: 1,
    children: [{
      title:'SavvyPro 职场讲座无限次参与',
      basic: true,
    },{
      title:'职场心理疏通沟通',
      golden: true,
    },{
      title:'背景调查与职前咨询',
      basic: true
    }]
  }],
  Tutors: [{
    name: 'James',
    subtitle: '复旦大学博士',
    description: ['博士毕业于复旦大学','现就职于Manulife GWAM的VA Hedging Team', '主要从事Hedging System的Software Technical analytics的工作','之前就职于CIBC的capital market','从事fixed income 相关的定量化模型开发']
  }, {
    name: 'Duke',
    subtitle: '约克大学计算机硕士',
    description: ['美国注册舞弊审查师协会注册审查师 10年金融反欺诈行业经验','五大行之一 高级经理']
  }, {
    name: 'Elena',
    subtitle: '西安大略大学统计学硕士',
    description: ['毕业于Brock的会计硕士专业','CPA加拿大注册会计师。拥有超过8年的会计从业经验', '现就职于世界五百强公司，担任高级财务分析师，负责财务报告与分析，企业盈利能力的分析与优化，以及公司薪酬管理及规划']
  }, {
    name: 'Sandy',
    subtitle: '多伦多大学统计专业, 皇后大学AI硕士',
    description: ['FRM CFA 双证持证人 SQL UNIX script EXCEL/VBA 各项编程语言','加拿大五大行5年以上BA 经验  目前就职于跨国投资银行']
  }, {
    name: 'Katrina',
    subtitle: '就职于五大行之一的业务分析专家',
    description: ['拥有多年项目管理以及数据分析经验','擅长市场风险，交易合规审查以及交易数据分析', '曾参与多项交易合规监控系统的自制与外购']
  }, {
    name: 'Jay',
    subtitle: '现任Scotiabank业务分析专家',
    description: ['拥有多年项目管理以及数据分析经验','擅长市场风险，交易合规审查以及交易数据分析','曾参与多项交易合规监控系统的自制与外购', '曾带领团队与第三方咨询公司完成内部自制合规监控系统的搭建并成功通过美国商品期货交易委员会的审计']
  }],
  OfferShowcase: {
    twoLayerSectionList:[{
      heading: {
        title: "学员$$好评",
      },
      sections: [],
      template: {
        type: "TemplateFullImageSlider",
        data: {
          heading: {},
          cards: [
            {
              webp: {
                1: require("../../static/pages/vip1v1/offer/1.jpg?webp"),
                2: require("../../static/pages/vip1v1/offer/1.jpg?webp")
              },
              jpeg: {
                1: require("../../static/pages/vip1v1/offer/1.jpg?resize&size=400"),
                2: require("../../static/pages/vip1v1/offer/1.jpg?resize&size=600")
              }
            },{
              webp: {
                1: require("../../static/pages/vip1v1/offer/2.jpg?webp"),
                2: require("../../static/pages/vip1v1/offer/2.jpg?webp")
              },
              jpeg: {
                1: require("../../static/pages/vip1v1/offer/2.jpg?resize&size=400"),
                2: require("../../static/pages/vip1v1/offer/2.jpg?resize&size=600")
              }
            },{
              webp: {
                1: require("../../static/pages/vip1v1/offer/3.jpg?webp"),
                2: require("../../static/pages/vip1v1/offer/3.jpg?webp")
              },
              jpeg: {
                1: require("../../static/pages/vip1v1/offer/3.jpg?resize&size=400"),
                2: require("../../static/pages/vip1v1/offer/3.jpg?resize&size=600")
              }
            },{
              webp: {
                1: require("../../static/pages/vip1v1/offer/4.jpg?webp"),
                2: require("../../static/pages/vip1v1/offer/4.jpg?webp")
              },
              jpeg: {
                1: require("../../static/pages/vip1v1/offer/4.jpg?resize&size=400"),
                2: require("../../static/pages/vip1v1/offer/4.jpg?resize&size=600")
              }
            },{
              webp: {
                1: require("../../static/pages/vip1v1/offer/5.jpg?webp"),
                2: require("../../static/pages/vip1v1/offer/5.jpg?webp")
              },
              jpeg: {
                1: require("../../static/pages/vip1v1/offer/5.jpg?resize&size=400"),
                2: require("../../static/pages/vip1v1/offer/5.jpg?resize&size=600")
              }
            },{
              webp: {
                1: require("../../static/pages/vip1v1/offer/6.jpg?webp"),
                2: require("../../static/pages/vip1v1/offer/6.jpg?webp")
              },
              jpeg: {
                1: require("../../static/pages/vip1v1/offer/6.jpg?resize&size=400"),
                2: require("../../static/pages/vip1v1/offer/6.jpg?resize&size=600")
              }
            },{
              webp: {
                1: require("../../static/pages/vip1v1/offer/7.jpg?webp"),
                2: require("../../static/pages/vip1v1/offer/7.jpg?webp")
              },
              jpeg: {
                1: require("../../static/pages/vip1v1/offer/7.jpg?resize&size=400"),
                2: require("../../static/pages/vip1v1/offer/7.jpg?resize&size=600")
              }
            },{
              webp: {
                1: require("../../static/pages/vip1v1/offer/8.jpg?webp"),
                2: require("../../static/pages/vip1v1/offer/8.jpg?webp")
              },
              jpeg: {
                1: require("../../static/pages/vip1v1/offer/8.jpg?resize&size=400"),
                2: require("../../static/pages/vip1v1/offer/8.jpg?resize&size=600")
              }
            }
          ]
        }
      }
    }]
  },
  Story: [{
    title: '16天收获五大行Dream Offer',
    img: '../../static/pages/vip1v1/offer/学员1.jpg',
    details:{
      学员介绍: ['多伦多大学Science专业应届研究生毕业','求职于数据分析行业'],
      求职困难: ['对于金融领域缺乏了解','缺乏拓展职业社交圈的经验和技巧','无法收揽心仪Offer'],
      SavvyPro解决方案: ['专属导师一对一进行针对性面试辅导，高强度的Mock Interview协助同学冲刺','资深导师传授Coffee Chat 的经验和技巧来提升Networking技能','通过SavvyPro技能类课程以及必备证书提升职场软硬技能应用技巧']
    }
  },{
    title: '应届毕业生顺利拿下风险管理分析师一职',
    img: '../../static/pages/vip1v1/offer/学员2.jpg',
    details:{
      学员介绍: ['多伦多大学统计学专业毕业生', '希望进入金融行业并收获风险分析师一职'],
      求职困难: ['缺乏面试经验','面试时口语表达能力缺乏自信','缺乏职场必备软件的应用技能'],
      SavvyPro解决方案: ['口语老师进行一对一商业英语口语辅导，让同学的口语能力更上一层楼','通过SavvyPro技能类课程提升工作必备软件技能','面试辅导师强化并提升对于相应职位必备软件技能的熟练度以及面试会考到题目进行讲解']
    }
  },{
    title: '3个月入职Deloitte Advisory',
    img: '../../static/pages/vip1v1/offer/学员3.jpg',
    details:{
      学员介绍: ['滑铁卢大学统计系应届毕业生','无加拿大面试和求职经验'],
      求职困难: ['英语写作水平以及口语能力欠佳','无实习或相关经验','专业成绩不理想','缺乏职场必备软件的应用技能'],
      SavvyPro解决方案: ['口语老师进行一对一商业英语口语辅导，听说读写全面提升','利用国内远程实习项目丰富简历，增加履历竞争力','通过SavvyPro技能类课程提升工作必备软件技能']
    }
  },{
    title: '应届毕业生收获五大行数据分析工作',
    img: '../../static/pages/vip1v1/offer/学员4.jpg',
    details:{
      学员介绍: ['多伦多大学理科应届毕业生','对想要进入的数据分析行业了解甚微'],
      求职困难: ['商业英语写作水平欠佳','缺乏面试技巧以及经验','Excel应用计能比较基础'],
      SavvyPro解决方案: ['资深导师协助修改Thank Letter，Networking Inmail等商业文件','一对一咨询后为同学制作专属学习方案以提升软件应用技能','专属导师分享面试需要注意的事项，深度分析面试公司以及面试官来提升面审成功率']
    }
  },{
    title: '澳洲留学生，加国新移民，喜获HSBC Analyst 一职',
    img: '../../static/pages/vip1v1/offer/学员5.jpg',
    details:{
      学员介绍: ['初来乍到新移民至多伦多职场','拥有澳洲丰富本地的工作经验','对多伦多的职场文化不熟悉'],
      求职困难: ['丰富的海外履历却缺乏加拿大本地工作经验','不够了解北美本地职场文化','缺乏面试技巧，对于面试官提出的问题反应不够灵活'],
      SavvyPro解决方案: ['专属导师给予专业Networking技能指导，协助同学在新城市扩展职场人脉','一对一传授本地面试经验以及回答技巧','导师打造专属逐字稿文件来指引同学如何灵活进行面试对答']
    }
  },{
    title: '十五天收揽五大行Analyst一职',
    img: '../../static/pages/vip1v1/offer/学员6.jpg',
    details:{
      学员介绍: ['多伦多大学应届毕业研究生','心仪Risk Modelling/Data  Scientist 相关职位'],
      求职困难: ['缺乏面试针对性的辅导', '职场必备软件基础技能较弱'],
      SavvyPro解决方案: ['参加SavvyPro SAS证书保过班后三周内获取SAS证书，获得数据分析职业必备软件技能','通过针对性模拟面试辅导来丰富面试经验，最终收获五大行RBC Analyst 一职']
    }
  }]
}

export default data