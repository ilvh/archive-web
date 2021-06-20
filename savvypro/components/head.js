import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";

const defaultDescription = "";
const defaultOGURL = "";
const defaultOGImage = "";

const TheHead = props => (
 <div>
    <NextHead>
    <script dangerouslySetInnerHTML={{__html: `(function(w,d,s,l,i){
          w[l]=w[l]||[];
          w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-NVRCHZV');`}} />
    <meta charSet="UTF-8" />
    <title>{props.title || ""}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/static/favicon.ico" />
    <link rel="stylesheet" href="https://video-react.js.org/assets/video-react.css" />
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ""} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    {props.title.includes('SAS') &&
      <meta name="keywords" content="SAS 证书, SAS下载, SAS考证, SAS考点, SAS Base, SAS Advance, SAS项目, SAS培训, SAS补习, SAS课程, SAS考试, SAS Global Certification, SAS编程, 多伦多SAS, 加拿大SAS, 温哥华SAS, 卡尔加里SAS ,   Edmonton SAS Burnaby SAS , 滑铁卢SAS, 魁北克SAS,  蒙特利尔SAS, SAS 保过, SAS 真题, SAS好处,  SAS通过率, sas 简历, SAS实战, SAS练习, SAS银行, SAS五大行, SAS保险, SAS统计, SAS数学, SAS网课, SAS线上, SAS加拿大银行, SAS求职, SAS认证, SAS认证证书, SAS考试攻略, SAS考试详情, SAS Certification,   SAS 难, SAS难不难,  SAS题库, SAS教材, 什么是SAS, SAS语言, SAS教程, SAS测试, SAS Studio, SAS备考, SAS考点, SAS退费, SAS直播, SAS data,  SAS Library,  宏变量  , SAS Proc, SAS Statement, Retain和Sum语句, SAS时间, SAS考试, SAS考试时间, SAS报名, SAS报名截止, SAS报名费, SAS安装, SAS注册, EasyCareer SAS, 维多利亚SAS, 速成SAS, 滑铁卢, Victoria SAS, PowerCareer SAS, SAS工作, 数据分析, 市场分析, 医疗, 生物统计, 新媒体, 商业分析, Data Dnalysis, SAS金融, SAS风险, SAS应用, SAS文科"></meta>
    }
    {props.title.includes('CFA') &&
      <meta name="keywords" content="CFA证书, CFA考证, CFA考点, CFA一级, CFA二级, CFA培训, CFA补习, CFA课程, CFA考试, CFA三级, 加拿大CFA, 温哥华CFA, 卡尔加里CFA ,   Edmonton CFA Burnaby CFA, 滑铁卢CFA, 魁北克CFA,  蒙特利尔CFA, CFA 保过, CFA真题, CFA好处,  CFA通过率, CFA简历, CFA练习, CFA银行, CFA五大行, CFA投行, CFA统计, CFA数学, CFA网课, CFA线上, CFA加拿大银行, CFA求职, CFA认证, CFA认证证书, CFA考试攻略, CFA考试详情, CFA 难, CFA难不难,  SAS题库, CFA教材, CFA疫情, CFA取消, CFA协会, CFA延期, 什么是CFA, CFA考试要求, CFA自学, CFA Notes, CFA奖学金, CFA Early Bird, CFA机考, CFA一级公式, CFA词汇表, CPA CFA, CFA Level 1 book, CFA Canada, CFA加拿大, CFA中文, CFA国内, 特许注册金融分析师, 金融第一考试, CFA户口, CFA福利。CFA求职, CFA工资, CFA退考, CFA考点, CFA换考点, CFA考场, CFA等级, CFA直播, CFA人才, CFA费用, CFA备考, CFA考试费用, CFA考试时间2021, CFA题库, CFA考试时长, CFA一级PDF, CFA一级note, CFA一级网课, CFA学习顺序, CFA一级有用吗？CFA学生奖学金, 定量分析 , 经济学,  财务报表分析, 道德伦理准则, 投资组合管理, 公司理财, 权益证券分析, 固定收益证券, 衍生品投资, 另类投资, 期货, 股票, 对冲风险, CFA时间, CFA考试, CFA考试时间, CFA报名, CFA报名截止, CFA报名费, CFA安装, CFA注册,EasyCareer CFA, 高顿CFA,  品职CFA,  维多利亚CFA, 金程CFA, 世达CFA, EyesHigh CFA, PowerCareer CFA, CFA工作, 数据分析, 市场分析, 医疗, 生物统计, 新媒体, 商业分析, Data Analysis, CFA金融, CFA风险, CFA应用, CFA文科, CFA数学, CFA经济, CFA商科 "></meta>
    }
    {props.title.includes('SQL') && 
      <meta name="keywords" content="加拿大SQL, 温哥华SQL, 卡尔加里SQL ,   Edmonton SQL Burnaby SQL, 滑铁卢SQL, 魁北克SQL,  蒙特利尔SQL, SQL 题库, SQL真题, SQL好处,  SQL通过率, SQL简历, SQL练习, SQL银行, SQL五大行, SQL投行, SQL统计, SQL数学, SQL网课, SQL线上, SQL加拿大银行, SQL求职, SQL认证, SQL证书, SQL考试攻略, SQL考试详情, SQL 难, SQL难不难,  SAS题库, SQL教材, SQL疫情, 什么是SQL, SQL自学, SQL Notes, SQL词汇表, SQL Canada, SQL加拿大, SQL中文, SQL国内, SQL面试题, SQL好处, SQL有用吗？SQL Python, SQL区别,  SQL 语言, 函数 数据库,  Combime table,  Aggregation Functions , Distinct、Count、Case when、and if statement  ,  import/ Export Database, tables, and understand the meta data, SQL考试, SQL安装, SQL注册, SQL express 2019下载, SQL express 下载, SQL下载, SQL server, SQL server下载, SQL formatter, EasyCareer SQL,  维多利亚SQL, TK SQL ,SQL工作, 数据分析, 市场分析, 医疗, 生物统计, 新媒体, 商业分析, Data Analysis, SQL金融, SQL风险, SQL应用, SQL文科,  SQL数学,  SQL经济,  SQL商科 , business  Analysis, manulife, sunlife, DA, BA "></meta>
    }
    {props.title.includes('VIP') && 
      <meta name="keywords" content="简历修改, 面试辅导, 模拟面试, 内推, 保Offer, 如何写简历, 留学生回国, 找实习, Co-op, 滑铁卢Co-op, 面试题, 行为面试, 技术面试, Case面试, online test,求职辅助,职场讲座,求职规划与咨询,个人履历精修与人脉构建, 如何毕业找工作, Coffe Chat, Linkedin, 面经加拿大找工作, 加拿大Newgrad, 加拿大工作, 多伦多工作, 求职规划, 加拿大本科毕业, 留学生找工作, 加拿大找工作中介, 加拿大求职, 多伦多求职, 加拿大找工作猎头, 加拿大找工作经验, offer保证, 加拿大招聘, 四大, 五大行, 大厂, 快消, 加拿大求职辅导, 留学生求职辅导, 简历修改, 面试指导, 加拿大求职服务, 多伦多本地招聘, 加拿大找工作难吗, 多伦多找工作难吗, 移民加拿大找工作, 加拿大找工作资源, 加拿大求职资源, 多伦多求职资源, 加拿大找工作经验, 加拿大找工作移民, 加拿大机会, 加拿大工作机会, 多伦多求职辅导, 多伦多找工作, 加拿大工作机会, 加拿大暑假实习, 多伦多工作机会, 多伦多全职机会, 多伦多兼职机会, 多伦多打工, 转行,  跳槽, 空缺职位,  投资,  投行,  市场, 编程,  数据, 统计,  精算, 银行, EasyCareer VIP,  EasyCareer 求职, 维多利亚 VIP, 维多利亚 求职,  Easy, 速成 求职, 速成 求职, 世达 求职, EyesHigh 求职, PowerCareer 求职, Togocareer求职 高顿𝛼计划, 秋招, 春招, 毕业生招聘, 校园招聘,  Career Fair,  岗位内推, 回国, 留学生找工作"></meta>
    }
    <meta name="keywords" content="多伦多求职, 多伦多工作机会,  加拿大找工作,  温哥华找工作, 魁北克找工作, 埃德蒙顿找工作, 卡尔加里找工作,  本拿比找工作, 滑铁卢找工作, 列治文找工作, 数据分析, 市场分析, 医疗, 生物统计, 新媒体, 商业分析, Data Dnalysis, 风险管理 , 分析师, 金融分析, 文科求职, 数学, 金融会计, 会计, 转行, 秋招, 春招, 跳槽, 毕业,  移民,  学签, 什么是, 数据分析面试, 市场分析面试, 医疗面试, 生物统计面试, 新媒体面试, 商业分析面试, Data Dnalysis, 风险管理面试 , 分析师, 金融分析面试, 会计面试, 大学生找工作"></meta>
  </NextHead>
  <noscript>
    <iframe 
      src="https://www.googletagmanager.com/ns.html?id=GTM-NVRCHZV"
      height="0" width="0" style={{display:'none',visibility:'hidden'}}>
    </iframe>
  </noscript>
  </div>
);

TheHead.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default TheHead;
