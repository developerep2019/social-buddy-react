import React from 'react';

const SingleImage = (props) => {
    const {image} = props.imageLink;
    return (
        <div>
            <img src={image} alt=""/>
        </div>
    );
};

export default SingleImage;