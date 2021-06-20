import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import { Pagination } from 'antd';
import Router from 'next/router';
import fetch from 'node-fetch';
import './news.css';
class News extends React.Component<{ posts: any[], total: number, router: any, page: any }> {
  static async getInitialProps(context: any) {
    const { query } = context;
    let params = { page: query.page || 1 };
    const res = await fetch(`http://api.jdbyx.com.cn/api/news?page=${params.page}&page_size=10`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });
    const data: any = await res.json();
    const { data: posts, total } = data.data;
    return {
      page: Number(params.page),
      total,
      posts
    };
  }

  pageChange = (page: number) => {
    Router.push(`/news?page=${page}`);
  }

  render() {
    const { page, total, posts = [] } = this.props;
    return (
      <div>
        <Head title="Savvypro | 新闻中心" description="" />
        <Layout>
          <div className="sm:max-w-2xl md:px-4 lg:max-w-7xl mx-auto mx-auto flex flex-col divide-y divide-gray-200">
            <div className="pt-32 pb-4 text-4xl">新闻中心</div>
            {posts.map((post: any) => {
              return (
                <div className="py-12 flex justify-between items-baseline">
                  <div className="flex-none pr-32">{post.created_at.substring(0, 10)}</div>
                  <div className="flex-auto">
                    <div className="font-bold text-xl">
                      <a className="text-black" target="_blank" href={`/detail/${post.id}`}>
                        {post.title}
                      </a>
                    </div>
                    <div className="prose max-w-none text-gray-500 mt-6 sub_title" dangerouslySetInnerHTML={{ __html: post.sub_title }}></div>
                    <div className="text-base font-medium mt-7">
                      <a className="text-teal-600 hover:text-teal-700" target="_blank" href={`/detail/${post.id}`} >
                        查看更多 →
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="text-right pt-5">
              {
                total > 10 ?
                  <Pagination defaultCurrent={page} total={total} onChange={this.pageChange} /> :
                  null
              }
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default News;
