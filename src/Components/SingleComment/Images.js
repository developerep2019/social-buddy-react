import React from 'react';
import imagesLink from '../../imgData/imageData.json'
import SingleImage from '../SingleImage/SingleImage';

const Images = () => {
    return (
        <div>
            {
                imagesLink.map(imageLink => <SingleImage imageLink={imageLink}/>)
            }
        </div>
    );
};

export default Images;