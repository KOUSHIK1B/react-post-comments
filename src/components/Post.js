import React, { useState } from 'react';
import Comment from './Comment';

const postData = {
  title: "Exploring React Components",
  content: "React components allow you to split your UI into reusable, independent pieces. In this post, we'll dive into how to build and manage components effectively.",
  comments: [
    {
      id: 1,
      text: "This is an insightful post! I love how components can be reused across different parts of an app.",
      replies: [
        { id: 101, text: "Yes, exactly! Reusable components are key to efficient development." },
        { id: 102, text: "I agree. Makes code much cleaner and easier to maintain!" }
      ],
    },
    {
      id: 2,
      text: "Could you explain more about how state works in components?",
      replies: [
        { id: 201, text: "Sure! State is an object that determines how a component renders and behaves." },
        { id: 202, text: "You can manage state using the useState hook in functional components." }
      ],
    },
    {
      id: 3,
      text: "What are your thoughts on class components vs functional components?",
      replies: [
        { id: 301, text: "Functional components are more modern and simpler to use, especially with hooks." },
        { id: 302, text: "Class components are still in use, but functional components are the way forward." }
      ],
    },
  ],
};

const Post = () => {
  return (
    <div className="post">
      <h1>{postData.title}</h1>
      <p>{postData.content}</p>
      <div className="comments">
        {postData.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Post;
