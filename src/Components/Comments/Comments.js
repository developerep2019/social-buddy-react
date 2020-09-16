import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleComment from '../SingleComment/SingleComment';

const Comments = () => {
    const { paramId } = useParams();
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${paramId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data));
    }, []);
    return (
        <div>
            {
                comments.map(comment => <SingleComment comment={comment} key={comment.id}/>)
            }
        </div>
    );
};

export default Comments;