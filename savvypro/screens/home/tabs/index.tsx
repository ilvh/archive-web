import React, { Component } from "react";
import { isMobileOnly,isTablet,isMobile } from 'react-device-detect';

import { Tabs,Row,Col,Card } from 'antd';

import { SectionTitle } from "../../../components/layout/section-title";
import Image, { ImageProps } from "../../../components/elements/image";

const { TabPane } = Tabs;

export interface HomeBannerData {
  slides: {
    image: ImageProps;
    title: string;
    description: string;
    action: string;
  }[];
}

class HomeTabs extends Component {
  state: {
    activeIndex: number;
    showModal: boolean;
    isMobile: boolean;
    isTablet: boolean;
    isMobileOnly: boolean;
  } = {
    activeIndex: 0,
    showModal: false,
    isMobile: false,
    isTablet: false,
    isMobileOnly: false,
  };

  componentDidMount(){
    this.setState({
      isMobile,
      isTablet,
      isMobileOnly
    })
    
  }

  onTabsChange = (key: string) => {
  }
  
  render() {
    return (
      <div className="relative items-center text-center ">
        {!this.state.isMobile &&
        <Tabs size="large" onChange={this.onTabsChange}>
          <TabPane 
            tab={
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 'normal',
                  color: '#4173e9',
                }}
              >
                <img 
                  src="../../../static/pages/home/tag/1.png" 
                  style={{ width:'40px', display:'inline', margin:'0 20px 0 0'}}
                />
                金融求职
              </span>
            }
            key="1"
            style={{ marginLeft:'23%' }}
          >
            <div className="flex flex-col" style={{ width: '90%' }} >
              <div className="items-center text-center flex flex-row">
                <SectionTitle
                  title=""
                  separator={false}
                  partTitle="金融前台"
                  className="flex flex-col items-center text-center "
                  partTitleClass="text-xl items-center text-center text-red-500"
                  type="second"
                  titleColor="#e67184"
                />
                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'20%',
                  }}
                >
                  <a href="./programs/Excel-VBA">Excel-VBA软件实战班</a>
                </span>

                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'20%'
                  }}
                >
                  <a href="./programs/CSC">CSC证书保过班</a>
                </span>

                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'20%'
                  }}
                >
                  <a href="./programs/Networking">Networking求职集训营</a>
                </span>
              </div>                                   
              <div className="items-center text-center flex flex-row">
                <SectionTitle
                  title=""
                  separator={false}
                  partTitle="金融后台"
                  className="flex flex-col items-center text-center"
                  partTitleClass="text-xl items-center text-center text-red-500"
                  type="second"
                  titleColor="#e67184"
                />
                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'20%'
                  }}
                >
                  <a href="./courses/CFA-Level-1">CFA一级证书保过班</a>                                      
                </span>

                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'20%'
                  }}
                >
                  <a href="./programs/SQL">SQL数据库实战班</a>
                </span>

                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'20%'
                  }}
                >
                  <a href="./programs/Excel-VBA">Excel-VBA软件实战班</a> 
              </span>
              </div>
            </div>
          </TabPane>

          <TabPane 
            tab={
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 'normal',
                  color: '#5ac494',
                }}
              >
              <img 
                src="../../../static/pages/home/tag/2.png" 
                style={{ width:'40px', display:'inline', margin:'0 20px 0 0'}}
              />
              数据分析
              </span>
            }
            key="2"
          >
          <div className="flex flex-col" style={{width:'90%'}}>
              <div className="items-center text-center flex flex-row" >
                <SectionTitle
                  title=""
                  separator={false}
                  partTitle="数据入门"
                  className="flex flex-col items-center text-center "
                  partTitleClass="text-xl items-center text-center text-red-500"
                  type="second"
                  titleColor="#e67184"
                />
                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'20%'
                  }}
                >
                  <a href="./courses/SAS-Base-1">SAS证书保过班</a>
                </span>

                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'20%'
                  }}
                >
                  <a href="./programs/SQL">SQL数据库实战班</a>
                </span>

                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'20%'
                  }}
                >
                  <a href="./programs/Excel-VBA">Excel-VBA软件实战班</a> 
                </span>
              </div>

              <div className="items-center text-center flex flex-row">
                <SectionTitle
                  title=""
                  separator={false}
                  partTitle="数据大师"
                  className="flex flex-col items-center text-center"
                  partTitleClass="text-xl items-center text-center text-red-500"
                  type="second"
                  titleColor="#e67184"
                />
                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'20%'
                  }}
                >
                  <a href="./courses/SASProject">SAS Project实战班</a>
                </span>

                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'20%'
                  }}
                >
                  <a href="./programs/Python">Python实战班</a>
                
                </span>
              </div>
            </div>
          </TabPane>

          <TabPane 
            tab={
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 'normal',
                  color: '#bf546a',
                }}
              >
              <img 
                src="../../../static/pages/home/tag/3.png" 
                style={{ width:'40px', display:'inline', margin:'0 20px 0 0'}}
              />
              风险与投资
              </span>
            }
            key="3"
          >
          <div className="flex flex-col" style={{ width: '90%' }} >
          <div className="items-center text-center flex flex-row" >
            <SectionTitle
              title=""
              separator={false}
              partTitle="金融模型"
              className="flex flex-col items-center text-center "
              partTitleClass="text-xl items-center text-center text-red-500"
              type="second"
              titleColor="#e67184"
            />
            <span 
              className="mb-7 leading-loose"
              style={{
                fontSize: 16,
                color: '#101010',
                width:'20%'
              }}
            >
              <a href="./courses/SAS-Base-1">SAS证书保过班</a>
            </span>

            <span 
              className="mb-7 leading-loose"
              style={{
                fontSize: 16,
                color: '#101010',
                width:'20%'
              }}
            >
              <a href="./programs/SQL">SQL数据库实战班</a>
            </span>

            <span 
              className="mb-7 leading-loose"
              style={{
                fontSize: 16,
                color: '#101010',
                width:'20%'
              }}
            >
              <a href="./programs/Python">Python实战班</a>
            </span>
          </div>

          <div className="items-center text-center flex flex-row">
            <SectionTitle
              title=""
              separator={false}
              partTitle="风险管理"
              className="flex flex-col items-center text-center"
              partTitleClass="text-xl items-center text-center text-red-500"
              type="second"
              titleColor="#e67184"
            />
            <span 
              className="mb-7 leading-loose"
              style={{
                fontSize: 16,
                color: '#101010',
                width:'20%'
              }}
            >
              <a href="./programs/Excel-VBA">Excel-VBA软件实战班</a> 
            </span>

            <span 
              className="mb-7 leading-loose"
              style={{
                fontSize: 16,
                color: '#101010',
                width:'20%'
              }}
            >
              <a href="./courses/SAS-Base-1">SAS证书保过班</a>
              </span>
              <span 
                className="mb-7 leading-loose"
                style={{
                  fontSize: 16,
                  color: '#101010',
                  width:'20%'
                }}
              >
                <a href="./programs/FRM">FRM证书保过班</a>
            </span>
          </div>
        </div>
          </TabPane>

          <TabPane 
            tab={
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 'normal',
                  color: '#eaa80b',
                }}
              >
              <img 
                src="../../../static/pages/home/tag/4.png" 
                style={{ width:'40px', display:'inline', margin:'0 20px 0 0'}}
              />
              职场技能
              </span>
            }
            key="4"
          >
          <div className="flex flex-col" style={{ width: '90%' }} >
            <div className="items-center text-center flex flex-row" >
              <SectionTitle
                title=""
                separator={false}
                partTitle="软件实战"
                className="flex flex-col items-center text-center "
                partTitleClass="text-xl items-center text-center text-red-500"
                type="second"
                titleColor="#e67184"
              />
              <span 
                className="mb-7 leading-loose"
                style={{
                  fontSize: 16,
                  color: '#101010',
                  width:'20%'
                }}
              >
                <a href="./programs/Excel-VBA">Excel-VBA软件实战班</a>                                      
              </span>

              <span 
                className="mb-7 leading-loose"
                style={{
                  fontSize: 16,
                  color: '#101010',
                  width:'20%'
                }}
              >
                <a href="./programs/SQL">SQL数据库实战班</a>
              </span>

              <span 
                className="mb-7 leading-loose"
                style={{
                  fontSize: 16,
                  color: '#101010',
                  width:'20%'
                }}
              >
                <a href="./programs/Python">Python实战班</a>
              </span>
            </div>

            <div className="items-center text-center flex flex-row">
              <SectionTitle
                title=""
                separator={false}
                partTitle="求职实战"
                className="flex flex-col items-center text-center"
                partTitleClass="text-xl items-center text-center text-red-500"
                type="second"
                titleColor="#e67184"
              />
              <span 
                className="mb-7 leading-loose"
                style={{
                  fontSize: 16,
                  color: '#101010',
                  width:'20%'
                }}
              >
              <a href="./programs/Networking">Networking求职集训营</a>
              </span>
            </div>
          </div>
          </TabPane>
        </Tabs>
        }
        {this.state.isMobileOnly &&
        <Tabs size="small" onChange={this.onTabsChange} tabBarGutter={-10}>
          <TabPane 
            tab={
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 'normal',
                  color: '#4173e9',
                }}
              >
                <img 
                  src="../../../static/pages/home/tag/1.png" 
                  style={{ width:'30px', display:'inline', margin:'0 20px 0 0px'}}
                />
                金融求职
              </span>
            }
            key="1"
            style={{ marginLeft:'23%' }}
          >
            <div className="flex flex-col" style={{marginLeft:'-10%'}}>
              <Row style={{marginLeft:'30px'}}>
                <Col span={6}>
                  <SectionTitle
                    separator={false}
                    partTitle="金融前台"
                    className="flex flex-col items-center text-center "
                    partTitleClass="text-xl items-center text-center text-red-500"
                    type="second"
                    titleColor="#e67184"
                  />
                </Col>
              </Row>
              <Row style={{marginLeft:'-5%'}}>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./programs/Excel-VBA">Excel-VBA<br/>软件实战班</a>
                </Col>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./programs/CSC">CSC证书<br/>保过班</a>
                </Col>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./programs/Networking">Networking<br/>求职集训营</a>
                </Col>
              </Row>
              <br/> 
              <Row style={{marginLeft:'30px'}}>
                <Col span={6}>
                  <SectionTitle
                    title=""
                    separator={false}
                    partTitle="金融后台"
                    className="flex flex-col items-center text-center "
                    partTitleClass="text-xl items-center text-center text-red-500"
                    type="second"
                    titleColor="#e67184"
                  />
                </Col>
              </Row>
              <Row style={{marginLeft:'-5%'}}>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./courses/CFA-Level-1">CFA一级证书<br/>保过班</a>  
                </Col>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./programs/SQL">SQL数据库<br/>实战班</a>
                </Col>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./programs/Excel-VBA">Excel-VBA<br/>软件实战班</a>
                </Col>
              </Row>
            </div>
          </TabPane>

          <TabPane 
            tab={
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 'normal',
                  color: '#5ac494',
                }}
              >
              <img 
                src="../../../static/pages/home/tag/2.png" 
                style={{ width:'30px', display:'inline', margin:'0 20px 0 0px'}}
              />
              数据分析
              </span>
            }
            key="2"
          >
            <div className="flex flex-col" style={{marginLeft:'-10%'}}>
              <Row style={{marginLeft:'30px'}}>
                <Col span={6}>
                  <SectionTitle
                    title=""
                    separator={false}
                    partTitle="数据入门"
                    className="flex flex-col items-center text-center "
                    partTitleClass="text-xl items-center text-center text-red-500"
                    type="second"
                    titleColor="#e67184"
                  />
                </Col>
              </Row>
              <Row style={{marginLeft:'-5%'}}>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./courses/SAS-Base-1">SAS证书<br/>保过班</a>
                </Col>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./programs/SQL">SQL数据库<br/>实战班</a>
                </Col>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./programs/Excel-VBA">Excel-VBA<br/>软件实战班</a> 
                </Col>
              </Row>
              <br/> 
              <Row style={{marginLeft:'30px'}}>
                <Col span={6}>
                  <SectionTitle
                    title=""
                    separator={false}
                    partTitle="数据大师"
                    className="flex flex-col items-center text-center "
                    partTitleClass="text-xl items-center text-center text-red-500"
                    type="second"
                    titleColor="#e67184"
                  />
                </Col>
              </Row>
              <Row style={{marginLeft:'-5%'}}>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./courses/SASProject">SAS Project<br/>实战班</a>
                </Col>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./programs/Python">Python<br/>实战班</a>
                </Col>
              </Row>
            </div>
          </TabPane>

          <TabPane 
            tab={
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 'normal',
                  color: '#bf546a',
                }}
              >
              <img 
                src="../../../static/pages/home/tag/3.png" 
                style={{ width:'30px', display:'inline', margin:'0 20px 0 0'}}
              />
                风险与投资
              </span>
            }
            key="3"
          >
            <div className="flex flex-col" style={{marginLeft:'-10%'}}>
              <Row style={{marginLeft:'30px'}}>
                <Col span={6}>
                  <SectionTitle
                    title=""
                    separator={false}
                    partTitle="金融模型"
                    className="flex flex-col items-center text-center "
                    partTitleClass="text-xl items-center text-center text-red-500"
                    type="second"
                    titleColor="#e67184"
                  />
                </Col>
              </Row>
              <Row style={{marginLeft:'-5%'}}>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./courses/SAS-Base-1">SAS证书<br/>保过班</a>
                </Col>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./programs/SQL">SQL数据库<br/>实战班</a>
                </Col>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./programs/Python">Python<br/>实战班</a>
                </Col>
              </Row>
              <br/> 
              <Row style={{marginLeft:'30px'}}>
                <Col span={6}>
                  <SectionTitle
                    title=""
                    separator={false}
                    partTitle="风险管理"
                    className="flex flex-col items-center text-center "
                    partTitleClass="text-xl items-center text-center text-red-500"
                    type="second"
                    titleColor="#e67184"
                  />
                </Col>
              </Row>
              <Row style={{marginLeft:'-5%'}}>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./programs/Excel-VBA">Excel-VBA<br/>软件实战班</a>
                </Col>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./courses/SAS-Base-1">SAS证书<br/>保过班</a>
                </Col>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./programs/FRM">FRM证书<br/>保过班</a>
                </Col>
              </Row>
            </div>
          </TabPane>

          <TabPane 
            tab={
              <span
                style={{
                  fontSize: 18,
                  fontWeight: 'normal',
                  color: '#eaa80b',
                }}
              >
              <img 
                src="../../../static/pages/home/tag/4.png" 
                style={{ width:'30px', display:'inline', margin:'0 20px 0 0'}}
              />
              职场技能
              </span>
            }
            key="4"
          >
            <div className="flex flex-col" style={{marginLeft:'-10%'}}>
              <Row style={{marginLeft:'30px'}}>
                <Col span={6}>
                  <SectionTitle
                    title=""
                    separator={false}
                    partTitle="软件实战"
                    className="flex flex-col items-center text-center "
                    partTitleClass="text-xl items-center text-center text-red-500"
                    type="second"
                    titleColor="#e67184"
                  />
                </Col>
              </Row>
              <Row style={{marginLeft:'-5%'}}>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./programs/Excel-VBA">Excel-VBA<br/>软件实战班</a>
                </Col>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./programs/SQL">SQL数据库<br/>实战班</a>
                </Col>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./programs/Python">Python<br/>实战班</a>
                </Col>
              </Row>
              <br/> 
              <Row style={{marginLeft:'30px'}}>
                <Col span={6}>
                  <SectionTitle
                    title=""
                    separator={false}
                    partTitle="求职实战"
                    className="flex flex-col items-center text-center "
                    partTitleClass="text-xl items-center text-center text-red-500"
                    type="second"
                    titleColor="#e67184"
                  />
                </Col>
              </Row>
              <Row style={{marginLeft:'-5%'}}>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./programs/Networking">Networking求职集训营</a>
                </Col>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./courses/SAS-Base-1">SAS证书<br/>保过班</a>
                </Col>
                <Col 
                  span={6} 
                  style={{
                    fontSize: 16,
                    color: '#101010',
                  }}
                >
                  <a href="./programs/FRM">FRM证书<br/>保过班</a>
                </Col>
              </Row>
            </div>
          </TabPane>
        </Tabs>
        }
        {this.state.isTablet &&
        <Tabs onChange={this.onTabsChange} tabBarGutter={-10}>
          <TabPane 
            tab={
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 'normal',
                  color: '#4173e9',
                }}
              >
                <img 
                  src="../../../static/pages/home/tag/1.png" 
                  style={{ width:'40px', display:'inline', margin:'0 20px 0 0'}}
                />
                金融求职
              </span>
            }
            key="1"
            style={{ marginLeft:'15%' }}
          >
            <div className="flex flex-col" style={{ width: '100%' }} >
              <div className="items-center text-center flex flex-row">
                <SectionTitle
                  title=""
                  separator={false}
                  partTitle="金融前台"
                  className="flex flex-col items-center text-center "
                  partTitleClass="text-xl items-center text-center text-red-500"
                  type="second"
                  titleColor="#e67184"
                />
                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'20%',
                  }}
                >
                  <a href="./programs/Excel-VBA">Excel-VBA软件实战班</a>
                </span>

                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'20%'
                  }}
                >
                  <a href="./programs/CSC">CSC证书保过班</a>
                </span>

                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'20%'
                  }}
                >
                  <a href="./programs/Networking">Networking求职集训营</a>
                </span>
              </div>                                   
              <div className="items-center text-center flex flex-row">
                <SectionTitle
                  title=""
                  separator={false}
                  partTitle="金融后台"
                  className="flex flex-col items-center text-center"
                  partTitleClass="text-xl items-center text-center text-red-500"
                  type="second"
                  titleColor="#e67184"
                />
                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'20%'
                  }}
                >
                  <a href="./courses/CFA-Level-1">CFA一级证书保过班</a>                                      
                </span>

                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'20%'
                  }}
                >
                  <a href="./programs/SQL">SQL数据库实战班</a>
                </span>

                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'20%'
                  }}
                >
                  <a href="./programs/Excel-VBA">Excel-VBA软件实战班</a> 
              </span>
              </div>
            </div>
          </TabPane>

          <TabPane 
            tab={
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 'normal',
                  color: '#5ac494',
                }}
              >
              <img 
                src="../../../static/pages/home/tag/2.png" 
                style={{ width:'40px', display:'inline', margin:'0 20px 0 0'}}
              />
              数据分析
              </span>
            }
            key="2"
          >
          <div className="flex flex-col" style={{width:'90%'}}>
              <div className="items-center text-center flex flex-row" >
                <SectionTitle
                  title=""
                  separator={false}
                  partTitle="数据入门"
                  className="flex flex-col items-center text-center "
                  partTitleClass="text-xl items-center text-center text-red-500"
                  type="second"
                  titleColor="#e67184"
                />
                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'25%'
                  }}
                >
                  <a href="./courses/SAS-Base-1">SAS证书保过班</a>
                </span>

                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'25%'
                  }}
                >
                  <a href="./programs/SQL">SQL数据库实战班</a>
                </span>

                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'25%'
                  }}
                >
                  <a href="./programs/Excel-VBA">Excel-VBA软件实战班</a> 
                </span>
              </div>

              <div className="items-center text-center flex flex-row">
                <SectionTitle
                  title=""
                  separator={false}
                  partTitle="数据大师"
                  className="flex flex-col items-center text-center"
                  partTitleClass="text-xl items-center text-center text-red-500"
                  type="second"
                  titleColor="#e67184"
                />
                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'25%'
                  }}
                >
                  <a href="./courses/SASProject">SAS Project实战班</a>
                </span>

                <span 
                  className="mb-7 leading-loose"
                  style={{
                    fontSize: 16,
                    color: '#101010',
                    width:'25%'
                  }}
                >
                  <a href="./programs/Python">Python实战班</a>
                
                </span>
              </div>
            </div>
          </TabPane>

          <TabPane 
            tab={
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 'normal',
                  color: '#bf546a',
                }}
              >
              <img 
                src="../../../static/pages/home/tag/3.png" 
                style={{ width:'40px', display:'inline', margin:'0 20px 0 0'}}
              />
              风险与投资
              </span>
            }
            key="3"
          >
          <div className="flex flex-col" style={{ width: '90%' }} >
          <div className="items-center text-center flex flex-row" >
            <SectionTitle
              title=""
              separator={false}
              partTitle="金融模型"
              className="flex flex-col items-center text-center "
              partTitleClass="text-xl items-center text-center text-red-500"
              type="second"
              titleColor="#e67184"
            />
            <span 
              className="mb-7 leading-loose"
              style={{
                fontSize: 16,
                color: '#101010',
                width:'25%'
              }}
            >
              <a href="./courses/SAS-Base-1">SAS证书保过班</a>
            </span>

            <span 
              className="mb-7 leading-loose"
              style={{
                fontSize: 16,
                color: '#101010',
                width:'25%'
              }}
            >
              <a href="./programs/SQL">SQL数据库实战班</a>
            </span>

            <span 
              className="mb-7 leading-loose"
              style={{
                fontSize: 16,
                color: '#101010',
                width:'25%'
              }}
            >
              <a href="./programs/Python">Python实战班</a>
            </span>
          </div>

          <div className="items-center text-center flex flex-row">
            <SectionTitle
              title=""
              separator={false}
              partTitle="风险管理"
              className="flex flex-col items-center text-center"
              partTitleClass="text-xl items-center text-center text-red-500"
              type="second"
              titleColor="#e67184"
            />
            <span 
              className="mb-7 leading-loose"
              style={{
                fontSize: 16,
                color: '#101010',
                width:'25%'
              }}
            >
              <a href="./programs/Excel-VBA">Excel-VBA软件实战班</a> 
            </span>

            <span 
              className="mb-7 leading-loose"
              style={{
                fontSize: 16,
                color: '#101010',
                width:'25%'
              }}
            >
              <a href="./courses/SAS-Base-1">SAS证书保过班</a>
              </span>
              <span 
                className="mb-7 leading-loose"
                style={{
                  fontSize: 16,
                  color: '#101010',
                  width:'25a%'
                }}
              >
                <a href="./programs/FRM">FRM证书保过班</a>
            </span>
          </div>
        </div>
          </TabPane>

          <TabPane
            tab={
              <span
                style={{
                  fontSize: 24,
                  fontWeight: 'normal',
                  color: '#eaa80b',
                }}
              >
              <img 
                src="../../../static/pages/home/tag/4.png" 
                style={{ width:'40px', display:'inline', margin:'0 20px 0 0'}}
              />
              职场技能
              </span>
            }
            key="4"
          >
          <div className="flex flex-col" style={{ width: '90%' }} >
            <div className="items-center text-center flex flex-row" >
              <SectionTitle
                title=""
                separator={false}
                partTitle="软件实战"
                className="flex flex-col items-center text-center "
                partTitleClass="text-xl items-center text-center text-red-500"
                type="second"
                titleColor="#e67184"
              />
              <span 
                className="mb-7 leading-loose"
                style={{
                  fontSize: 16,
                  color: '#101010',
                  width:'25%'
                }}
              >
                <a href="./programs/Excel-VBA">Excel-VBA软件实战班</a>                                      
              </span>

              <span 
                className="mb-7 leading-loose"
                style={{
                  fontSize: 16,
                  color: '#101010',
                  width:'25%'
                }}
              >
                <a href="./programs/SQL">SQL数据库实战班</a>
              </span>

              <span 
                className="mb-7 leading-loose"
                style={{
                  fontSize: 16,
                  color: '#101010',
                  width:'25%'
                }}
              >
                <a href="./programs/Python">Python实战班</a>
              </span>
            </div>

            <div className="items-center text-center flex flex-row">
              <SectionTitle
                title=""
                separator={false}
                partTitle="求职实战"
                className="flex flex-col items-center text-center"
                partTitleClass="text-xl items-center text-center text-red-500"
                type="second"
                titleColor="#e67184"
              />
              <span 
                className="mb-7 leading-loose"
                style={{
                  fontSize: 16,
                  color: '#101010',
                  width:'25%'
                }}
              >
                <a href="./programs/Networking">Networking求职集训营</a>
              </span>
            </div>
          </div>
          </TabPane>
        </Tabs>
        }
      </div>
    );
  }
}

export {
  HomeTabs,
}