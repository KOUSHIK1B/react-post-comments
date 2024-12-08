import React, { useState } from 'react';

const Comment = ({ comment }) => {
  const [showReplies, setShowReplies] = useState(true);

  const toggleReplies = () => setShowReplies(!showReplies);

  return (
    <div className="comment">
      <div className="comment-header">
        <strong>{comment.username}</strong> • {comment.time}
      </div>
      <p>{comment.content}</p>
      <div className="actions">
        <span>⬆ {comment.upvotes}</span>
        <span>⬇</span>
        <span>Reply</span>
        <span>Award</span>
        <span>Share</span>
        <span>...</span>
      </div>
      {comment.replies && comment.replies.length > 0 && (
        <div className="replies">
          <button onClick={toggleReplies}>
            {showReplies ? "−" : "+"} {comment.replies.length} more replies
          </button>
          {showReplies &&
            comment.replies.map((reply) => (
              <div key={reply.id} className="reply">
                <Comment comment={reply} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
