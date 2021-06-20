import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import fetch from 'node-fetch';

class News extends React.Component<{ post: any }> {
  static async getInitialProps(context: any) {
    const { req } = context;
    const res = await fetch('http://api.jdbyx.com.cn/api/news/' + req.params.id + '/detail', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await res.json();
    return { post: data.data.data };
  }

  render() {
    const { post } = this.props;
    return (
      <div>
        <Head title="Savvypro | 新闻详情" description="" />
        <Layout>
          <div className="sm:max-w-2xl md:px-4 lg:max-w-7xl mx-auto mx-auto divide-y divide-gray-200">
            <div className="pt-32 pb-4 text-4xl text-center pb-6">
              <div className="text-3xl font-extrabold text-black tracking-tight sm:text-4xl md:text-5xl md:leading-[3.5rem]">
                {post.title}
              </div>
              <div className="text-base leading-6 font-medium text-gray-500">{post.created_at.substring(0, 10)}</div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8" dangerouslySetInnerHTML={{ __html: post.content }}></div>
            </div>
            <div></div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default News;
