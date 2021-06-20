import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';

class News extends React.Component<{ post: any }> {
  render() {
    const { post } = this.props;
    return (
      <div>
        <Head title="Savvypro | 新闻详情" description="" />
        <Layout>
          <div className="sm:max-w-2xl md:px-4 lg:max-w-7xl mx-auto mx-auto divide-y divide-gray-200">
            <div className="pt-32 pb-4 text-4xl text-center pb-6 w-1/3">
              <div className="text-3xl font-extrabold text-black tracking-tight sm:text-4xl md:text-5xl md:leading-[3.5rem]">
                {post.title}
              </div>
              <div className="text-base leading-6 font-medium text-gray-500">2021-06-07</div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8">{post.body}</div>
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export async function getStaticProps() {
  // const res = await fetch('http://api.jdbyx.com.cn/api/news?page=1&page_size=10', {
  //   method: 'GET',
  //   headers: { 'Content-Type': 'application/json' },
  // });
  // const data = await res.json();
  return {
    props: {
      post: {
        title: '12232323',
        body: `5月28日，上海聚水潭网络科技有限公司（以下简称聚水潭）正式对外宣布，聚水潭完成战略投资上海画龙信息科技有限公司（以下简称画龙科技）。双方将共同在AI智能运营决策领域携手并进，持续赋能商家，推动行业数字化与智能化转型升级。
        聚水潭创始人兼CEO骆海东表示：“AI决策大脑驱动的智能运营能够让商家更加‘聪明’！画龙科技拥有一支业内顶尖的国际研发团队，并在商业和供应链方向有成熟的行业智能运营决策解决方案，服务国内各行业众多领头企业，为企业实现降本增效。未来，双方将以本次战略投资为契机，共同努力为用户带来更加一体化、自动化与智能化的运营解决方案，为用户创造更大的价值。”
        画龙科技创始人宋碧莲表示：“感谢聚水潭对于画龙科技的认可！聚水潭作为中国SaaS行业的引领者，经过7年多的发展，已经服务近百万家电商企业。通过与聚水潭的深度合作，我们非常有信心把我们团队的AI能力服务于聚水潭的百万商家，同时也会将AI智能决策大脑更好地运用到各个领域，服务更多的用户，助力客户提升运营ROI！”
        ｜关于画龙科技
        上海画龙信息科技有限公司（简称：画龙科技）由硅谷AI运营博士专家团队回国创立，是国际商业AI发起者，致力于将商业AI决策大脑标准化、产品化、规模化推广到全球市场。画龙科技已经成为国际领先的数字化智能运营供应商，成功将人工智能、大数据与运营相结合，首创了智能运营决策机器人系统——“AI运营官”，通过数百个商业AI和工业AI算法构成的智能决策大脑和五大中心，构建“商机挖掘、智能决策、商机转化、循环优化”的营销运营机制，帮助金融、零售等行业实现数字化智能化运营转型，为私域流量实现全生命周期的智能运营（AI拉新、AI复购、AI促活、AI权益优化、AI成本优化等），为企业实现降本增效，提高运营ROI。
        画龙科技已经成功与国内各行业的领头企业进行了合作，如银联、平安保险、阳光保险、华泰保险、大地保险、广发证券、光大银行、诺亚财富、海尔、玛氏、东方钢铁、联合利华、奔驰汽车、广汽丰田等各行业标杆企业，完成了数百个成功实践。
 `,
      },
    },
  };
}

export default News;
