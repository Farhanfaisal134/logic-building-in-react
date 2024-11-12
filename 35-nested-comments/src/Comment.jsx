import React, { useState } from 'react';

const Comment = ({ comment, handleAddReply }) => {
  const [reply, setReply] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);

  const handleReplySubmit = () => {
    handleAddReply(comment.id, reply);
    setShowReplyBox(false);
    setReply("");
  };

  return (
    <div className="comment ml-4">
      <div className="flex items-center gap-2">
        <span className="font-medium text-lg">{comment.title}</span>
        {!showReplyBox && (
          <button
            onClick={() => setShowReplyBox(true)}
            className="text-sm text-blue-500 hover:underline"
          >
            Reply
          </button>
        )}
      </div>

      {showReplyBox && (
        <div className="mt-2">
          <textarea
            rows="2"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Write a reply..."
            className="w-full p-2 border rounded-md focus:border-blue-400 outline-none transition"
          />
          <div className="flex items-center gap-2 mt-2">
            <button
              onClick={handleReplySubmit}
              className="px-4 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
            >
              Submit
            </button>
            <button
              onClick={() => setShowReplyBox(false)}
              className="px-4 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {comment.children && comment.children.length > 0 && (
        <div className="pl-4 mt-2 space-y-2 border-l border-gray-300">
          {comment.children.map(child => (
            <Comment key={child.id} comment={child} handleAddReply={handleAddReply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
