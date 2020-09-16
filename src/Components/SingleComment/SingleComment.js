import React from 'react';
import Images from './Images';
import './singlecomment.css';
import imageData from '../../imgData/imageData.json';

const SingleComment = (props) => {
    const { name, email, body } = props.comment;
    const imageLink = imageData.map(image => image.image);

    return (
        <div>
            <div className="comment">
                <p> <img src={imageData.map(image => image.image)} alt="" /> Name : {name}</p>
                <p>email : {email}</p>
                <p>comment : {body}</p>
            </div>
        </div>
    );
};

export default SingleComment;