import React from 'react';

const Section = (props) => {

    return (
        <div style={{
            maxWidth: '1080px',
            width: '100%',
            padding: '0 16px',
            margin: ' auto',
            marginTop: '28px'
        }}>
            {props.children}
        </div>
    )
}

export default Section;

    

