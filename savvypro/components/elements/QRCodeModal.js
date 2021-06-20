import React, {useState,useEffect} from 'react';
import { Modal, Spin } from 'antd';
import axios from 'axios';

const QRCodeModal = ({ title, body, render, visible=false, onCancel=()=>{}, ...props }) => {
  const [imgUrl, setImgUrl] = useState('')
  const [loading, setLoading] =useState(false)
  const getImgUrl = async () => {
    setLoading(true)
    const res = await axios.post('https://api.mingdao.com/v2/open/worksheet/getFilterRows', {
      appKey:"29c2514935492a67",
      sign:"MmRkNTFiODZmZWJkYzE3ZDE3YTBiYjFhYjIxNDUyY2VlYWZhZWE4OTJiOTc0NzkwOWI2NTk5MTRmY2FlM2ZhZQ==",
      worksheetId:"5ffe1bd7803536a1ae447728",
      viewId:"5ffe1bd8803536a1ae44772c",
    })
    const buyCourseQRCode = res.data.data.rows.find(row=>row.title.includes('购课'))

    if(buyCourseQRCode && buyCourseQRCode.src){
      const data = JSON.parse(buyCourseQRCode.src)[0]
      if(data){
        setImgUrl(data.original_file_full_path)
      }
    }
    setLoading(false)
  }
  
  useEffect(() =>{
    if(visible){
      getImgUrl()
    }
  },[visible])

  return (
    <div>
      {render}
      <Modal
        visible={visible}
        onCancel={onCancel}
        footer={null}
        centered={true}
      >
        <div style={{display: 'grid', textAlign: 'center', justifyContent: 'center'}}>
          <p style={{fontSize: '36px',marginBottom: '14px'}}>
            {title || '购课咨询'}
          </p>
          <p>
            {body || '购课、选课遇到问题？扫码添加学习顾问支持你！'}
          </p>
        </div>
        <Spin spinning={loading}>
          <div style={{
            height: '300px',
            width: '300px',
            margin:'auto'
          }}>
            <img src={imgUrl} style={{height: '100%',width: '100%'}}/>
          </div>
        </Spin>
      </Modal> 
    </div>
  )
}

export default QRCodeModal;