import React, { useEffect, useState } from 'react';
import SinglePost from '../SinglePost/SinglePost';

const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
        .then(res => res.json())
        .then(data => setPosts(data));
    }, []);
    return (
        <div>
            {
                posts.map(post => <SinglePost post={post} key={post.id}/>)
            }
        </div>
    );
};

export default Post;