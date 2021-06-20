import React from 'react';

const Paragraph = (props) => {
    const {
        text,
        color
    } = props;

    return (
        <p style={{
            color: color === 'warning' ? 'red' : 'black',
            fontSize: '18px'
        }}>
            {text}
        </p>
    )
}

export default Paragraph;