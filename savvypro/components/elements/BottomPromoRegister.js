import React, { useState } from 'react';
import { Input, Button, Modal, Icon } from 'antd';
import QRCodeModal from '../elements/QRCodeModal';
import axios from 'axios'
import {isMobile} from 'react-device-detect'

const BottomPromoRegister = () => {
    const [wechatId, setWechatId] = useState('');
    const [phoneNumber, setPhoneNumer] = useState('');
    const [showModal, setShowModal] = useState(false);
    const url =  'https://api.mingdao.com/v2/open/worksheet/addRow'

    const onSubmit = async() => {
        if ( wechatId && phoneNumber) {
            const res = await axios.post(
                url,
                {
                    "appKey":"29c2514935492a67",
                    "sign":"MmRkNTFiODZmZWJkYzE3ZDE3YTBiYjFhYjIxNDUyY2VlYWZhZWE4OTJiOTc0NzkwOWI2NTk5MTRmY2FlM2ZhZQ==",
                    "worksheetId":"5f3eb47855e43000017a9ad9",
                    "controls":[
                        {
                            "controlId": "wx",
                            "value": wechatId,
                        },
                        {
                            "controlId":"phone",
                            "value": phoneNumber,
                        }
                    ]
                }
            )

            if (res.data.success) {
                setShowModal(true)
                setWechatId('')
                setPhoneNumer('')
            }
        }
    }

    const closeModal = () => setShowModal(false)

    return !isMobile && ( 
        <div style={{
            position: 'sticky',
            height: '60px',
            bottom: '0px',
            width: '100%',
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            backgroundColor: '#54B78A',
            justifyItems: 'center',
            alignItems: 'center',
            gridColumnGap: '10px',
            zIndex: '999'
        }}>
            <span style={{fontSize: '1rem',color: '#fff'}}>
                {`免费领取价值$1299的求职礼包+职业规划`}
            </span>
            <Input 
                placeholder={'请输入您的微信号'}
                prefix={<Icon type="wechat" />}
                onChange={(e) => setWechatId( e.target.value)}
                value={wechatId}
            />
            <Input 
                placeholder={'请输入您的手机号'}
                prefix={<Icon type="phone" />}
                onChange={(e) => setPhoneNumer( e.target.value )}
                value={phoneNumber}
            />
            
            <Button 
                onClick={ ()=> onSubmit()}
                shape='round'
                style={{fontSize: '1rem',fontWeight: '500'}}
            >
                {`立即领取`}
            </Button>

            <QRCodeModal
                visible={showModal}
                onCancel={closeModal}
                title='福利派送中...'
                body='将在24小时内，由SavvyPro小编发送至您填写的微信号内。' 
            /> 
            
        </div>
    )
}

export default BottomPromoRegister;