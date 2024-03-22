import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title, deletePost}) => {
    if(!posts.length) {
        return(
        <p>posts not found</p>
        );
    }

    return (
        <div>
            <h1>{title}</h1>
            {posts.map((post, index) =>
                <PostItem number={index+1} post={post} key = {post.id} deletePost={deletePost}/>)}

        </div>
    );
};

export default PostList;