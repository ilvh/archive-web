import React from 'react';
import Layout from '../components/layout';
import Head from '../components/head';
import fetch from 'node-fetch';
import { Form, Input, Button, Select, Modal } from 'antd';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};
class ApplyForm extends React.Component<{ form: any }> {
    constructor(props: any) {
        super(props);
        this.state = {
            showModal: false
        }
    }
    handleSubmit = (e: any) => {
        e.preventDefault();
        this.props.form.validateFields(async (err: any, values: any) => {
            if (!err) {

                await fetch('http://api.jdbyx.com.cn/api/contact', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(values)
                }).then((response: any) => {
                    const { data } = response.json();
                    console.log(data);
                    if (true) {
                        Modal.success({
                            content: '提交成功',
                            okText: '确定',
                            onOk: () => {
                                this.props.form.resetFields();
                            }
                        });
                    }
                })
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const { Option } = Select
        const { TextArea } = Input;
        return (
            <div>
                <Head title="Savvypro | 报名咨询" description="" />
                <Layout>
                    <div className="sm:max-w-2xl md:px-4 lg:max-w-7xl mx-auto mx-auto flex justify-center">
                        <div className="sm:max-w-2xl lg:max-w-4xl w-2/3 pt-32 pb-4 ">
                            <Form
                                {...formItemLayout}
                                onSubmit={this.handleSubmit}
                            >
                                <Form.Item label="姓名">
                                    {getFieldDecorator('real_name', {
                                        rules: [

                                            {
                                                required: true,
                                                message: '请输入姓名',
                                            },
                                        ],
                                    })(<Input />)}
                                </Form.Item>
                                <Form.Item label="微信号">
                                    {getFieldDecorator('wechat_id', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入微信号',
                                            },
                                        ],
                                    })(<Input />)}
                                </Form.Item>
                                <Form.Item label="邮箱">
                                    {getFieldDecorator('email', {
                                        rules: [{
                                            type: 'email',
                                            message: '不是有效的email地址',
                                        },
                                        {
                                            required: true,
                                            message: '请输入邮箱',
                                        },
                                        ],
                                    })(<Input />)}
                                </Form.Item>
                                <Form.Item label="年龄段">
                                    {getFieldDecorator('age', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请选择年龄段',
                                            },
                                        ],
                                    })(<Select >
                                        <Option value="18-22">18-22</Option>
                                        <Option value="22-25">22-25</Option>
                                        <Option value="25-30">25-30</Option>
                                        <Option value="30-35">30-35</Option>
                                    </Select>)}
                                </Form.Item>
                                <Form.Item label="所在地区">
                                    {getFieldDecorator('area', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请选择所在地区',
                                            },
                                        ],
                                    })(<Select >
                                        <Option value="中国">中国</Option>
                                        <Option value="加拿大">加拿大</Option>
                                        <Option value="美国">美国</Option>
                                        <Option value="英国">英国</Option>
                                        <Option value="澳大利亚">澳大利亚</Option>
                                        <Option value="其他">其他</Option>
                                    </Select>)}
                                </Form.Item>
                                <Form.Item label="所在或毕业院校">
                                    {getFieldDecorator('school', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入所在或毕业院校',
                                            },
                                        ],
                                    })(<Input />)}
                                </Form.Item>
                                <Form.Item label="目前职业状态">
                                    {getFieldDecorator('job_title', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请选择目前职业状态',
                                            },
                                        ],
                                    })(<Select >
                                        <Option value="大学在读">大学在读</Option>
                                        <Option value="回国就业">回国就业</Option>
                                        <Option value="读研/读博'">读研/读博</Option>
                                        <Option value="海外求职">海外求职</Option>
                                        <Option value="自主创业">自主创业</Option>
                                        <Option value="其他">其他</Option>
                                    </Select>)}
                                </Form.Item>
                                <Form.Item label="感兴趣的职业方向">
                                    {getFieldDecorator('job_interest', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请选择最感兴趣的职业方向',
                                            },
                                        ],
                                    })(<Select>
                                        <Option value="accounting 会计">accounting 会计</Option>
                                        <Option value="consulting 咨询">consulting 咨询</Option>
                                        <Option value="Data/Business Analytics 数据/商业分析">Data/Business Analytics 数据/商业分析</Option>
                                        <Option value="Risk Management 风险管理">Risk Management 风险管理</Option>
                                        <Option value="Engineering工程">Engineering工程</Option>
                                        <Option value="Finance 金融行业">Finance 金融行业</Option>
                                        <Option value="Marketing 市场营销">Marketing 市场营销</Option>
                                        <Option value="Computer Science/IT计算机行业">Computer Science/IT计算机行业</Option>
                                        <Option value="IBD 投行">IBD 投行</Option>
                                        <Option value="Supply Chain 供应链">Supply Chain 供应链</Option>
                                        <Option value="其他">其他</Option>
                                    </Select>)}
                                </Form.Item>
                                <Form.Item label="留言">
                                    {getFieldDecorator('captcha')(<TextArea rows={4} />)}
                                </Form.Item>
                                <Form.Item {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit">
                                        提交
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </Layout>
            </div>
        );
    }
}

const WrappedApplyForm = Form.create({ name: 'apply' })(ApplyForm);

export default WrappedApplyForm;
