import React from 'react';
import { Icon } from 'antd';


const BulletPointCard = (props) => {
    const { index, title, items } = props;

    return (
        <div style={{
            height: '100%',
            width: '100%',
            boxShadow: '0 3px 6px rgba(0,0,0,0.16)',
            borderRadius: '8px',
            boxSizing: "border-box",
            overflow: 'hidden',
        }}>
            <div style={{ 
                height: '30%', 
                fontSize: '20px', 
                fontWeight: '500',
                display: 'grid',
                justifyItems: 'center',
                alignItems: 'center',
                backgroundColor: 'rgb(8, 186, 134)',
                color: '#fff',
                }}>
                {title}
            </div>
            
            <div style={{
                padding: '1rem',
                height: '70%',
                minHeight: '170px'
                }}>
               {
                items && items.map( (item) => (
                    <div style={{
                        display: 'grid',
                        gridTemplateRows: '1fr',
                        gridTemplateColumns: '1fr 6fr',
                    }}>
                        <div style={{paddingTop: '0'}}>
                            <Icon type="check-circle" style={{fontSize: '16px'}}/>
                        </div>
                        
                        
                        <span>
                            {item}
                        </span>
                    </div>
                ))
                } 
            </div>
            
        </div>
    )
}

export default BulletPointCard;