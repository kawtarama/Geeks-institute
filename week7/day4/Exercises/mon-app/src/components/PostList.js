import React from 'react';
import posts from '../data.json'; 

const PostList = () => {
  return (
    <div className="container mt-4">
      <h2> hi this is a Title</h2>
      {posts.map(post => (
        <div key={post.id} className="mb-3">
          <h4>{post.title}</h4>
          <p>{post.content}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PostList;
