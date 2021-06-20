import React from 'react';
import DotSeparator from './dot-separator';


const SectionHeader = (props) => {
    const savvyProGreen = '#54B78A';
    const { 
        text,
        primary,
        center, 
        withDotSeparator,
        greenLastLetters 
    } = props;

    return (
        <div style={{...props.style,
            fontSize: primary ? '36px' : '27px',
            fontWeight: '500',
            width: '100%',
            textAlign: center ? 'center' : 'left',
        }}>
            <div style={{marginBottom: '28px'}}>
                <span>
                    { text.slice(0, greenLastLetters * -1)  }
                </span>
                
                <span style={{ color : '#54B78A'}}>
                    { text.slice(greenLastLetters * -1) }
                </span>
            </div>
            

            {withDotSeparator ? 
                (<div style={{width: '50px', margin: 'auto', marginBottom: '28px'}}>
                    <DotSeparator />
                </div>)
                : (
                    undefined
                )
            }
            
            
        </div>
    )
}

export default SectionHeader;