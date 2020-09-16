import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@material-ui/core'
import './postDetail.css'
import Comments from '../Comments/Comments';
const PostDetail = () => {
    const { paramId } = useParams();
    const [post, setPost] = useState({});
    const { title, id, body } = post;
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${paramId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [])

    return (
        <div className="postDetail">
            <div>
                <small>Post No : {id}</small>
                <h3>Post Title : {title}</h3>
                <p>Body : <b>{body}</b></p>
            </div>
            <div className="postDetail">
                <h3><u>Comments</u></h3>
                <Comments />
            </div>
            <Link to="/">
                <Button variant="contained" color="primary" className="backBtn">Go Back</Button>
            </Link>
        </div>
    );
};

export default PostDetail;