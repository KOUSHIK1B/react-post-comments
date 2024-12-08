import React from 'react';
import Comment from './Comment';

const postData = {
  comments: [
    {
      id: 1,
      username: "Tech_Enthusiast",
      time: "2h ago",
      content: "React is amazing! It has transformed how we build UIs.",
      upvotes: 150,
      replies: [
        {
          id: 11,
          username: "Code_Lover",
          time: "1h ago",
          content: "Absolutely! Hooks alone are a game-changer.",
          upvotes: 65,
        },
      ],
    },
    {
      id: 2,
      username: "UI_Designer",
      time: "5h ago",
      content: "Styling components is much easier with libraries like Tailwind or CSS-in-JS.",
      upvotes: 95,
      replies: [
        {
          id: 21,
          username: "CSS_Dev",
          time: "4h ago",
          content: "Agreed! Tailwind simplifies responsive designs.",
          upvotes: 40,
        },
      ],
    },
  ],
};

const Post = () => {
  return (
    <div className="post">
      <h1>Community Discussion: React</h1>
      <div className="comments">
        {postData.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Post;
