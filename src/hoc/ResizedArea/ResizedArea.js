import React from 'react';

const ResizedArea = (props) => {

    const resizedArea = {
        width: '80%',
        margin: 'auto'
    }

    return (
        <div style={resizedArea}>
            {props.children}
        </div>
    );
};

export default ResizedArea;