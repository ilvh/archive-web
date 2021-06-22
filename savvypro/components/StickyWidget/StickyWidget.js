import React, { useState } from 'react';
import { BackTop, Modal, Button, Icon } from 'antd';
import {
  WechatOutlined,
  UpOutlined
} from '@ant-design/icons';

import QRCodeModal from '../elements/QRCodeModal'

const Wrapper = {
    position: "fixed",
    bottom: "5rem",
    right: "2rem",
    float: "right",
    zIndex: "999"
  }
    
const Widgets = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridColumnGap: '10px'
}
  
const Widget = {
  display: "grid",
  height: "60px",
  width: "60px",
  justifyItems: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: '10px',
  fontSize: '10px',
  boxShadow: '0 3px 6px rgba(0,0,0,0.16)'
  }
  

const StickyWidget = () => {
    const [open, setOpen] = useState(false)

    const directToContact = () => {
      const contactUsUrl = "/contactus"
      if (window.location.pathname != contactUsUrl ){
          return window.location.replace(contactUsUrl)
      }
      
      
    }

    const openModal = () => {
      document.body.style.overflow = 'unset'
        return setOpen(true)
    }

    const closeModal = () => {
        return setOpen(false)
    }

    const backToTop = () => {
      return window.scroll({top:0,behavior: 'smooth'})
    }

    return (
    <div style={Wrapper}>
      <div style={{...Widgets, gridRowGap: '10px'}}>
          <div style={{...Widget, backgroundColor: 'rgb(8, 186, 134)'}} onClick={openModal}>
            <Icon type="wechat" style={{fontSize: '30px', color: '#fff'}}/>
            <div style={{color: '#fff'}}>购课咨询</div>
          </div>

          <div style={{...Widget, backgroundColor: '#fff'}} onClick={directToContact}>
            <div style={{display: 'grid',alignItems: 'center', width: '30px',height: '30px'}}>
              <img src={ require('./people.png') } style={{ height: '80%', width: '100%'}}/>
            </div>
            
            <div>关于我们</div>
          </div>
          
          <div style={{...Widget, backgroundColor: '#fff'}} onClick={backToTop}>
            <Icon type="up" style={{fontSize: '25px', }}/>
            <div>回到顶部</div>
          </div>
      </div>
        
      <QRCodeModal
        visible={open}
        onCancel={closeModal}
      />
    </div>
    )
}

export default StickyWidget;