import React, { useState } from 'react';

const Comment = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(false);

  const toggleReplies = () => setShowReplies(!showReplies);

  return (
    <div className="comment">
      <p>{comment.text}</p>
      {Array.isArray(comment.replies) && comment.replies.length > 0 && (
        <button onClick={toggleReplies}>
          {showReplies ? "Hide Replies" : "Show Replies"}
        </button>
      )}
      {showReplies && (
        <div className="replies">
          {comment.replies.map((reply) => (
            <p key={reply.id} className="reply">
              {reply.text}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
