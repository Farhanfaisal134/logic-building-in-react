import React, { useRef, useState } from 'react'

const Comment = ({ comment, addReply }) => {
  const [replyText, setReplyText] = useState('');
  const [showReplyBox, setShowReplyBox] = useState(false);
  const inputRef = useRef(null);

  const handleReply = () => {
    setShowReplyBox(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };

  const handleCancleComment = () => {
    setShowReplyBox(false)
  };

  const handleKeyDown = (e, commentId) => {
    if (e.key === 'Enter') {
      handleReplySave(commentId);
      setShowReplyBox(false)
    } else if (e.key === 'Backspace') {
      handleCancleComment();
    };
  };

  const handleReplySave = (commentId) => {
    addReply(commentId, replyText)
    setReplyText(false);
    setReplyText('');
  };

  return (
    <li className="bg-gray-800 p-2 rounded shadow-sm">
      <div className='flex gap-3'>
        <p className="text-white">{comment.display}</p>
        {!showReplyBox && (
          <button
            onClick={handleReply}
            className="bg-blue-500 text-white rounded-sm shadow-md p-1 text-sm"
          >
            Reply
          </button>
        )}
      </div>
      {showReplyBox && (
        <div className="mt-1">
          <input
            value={replyText}
            type="text"
            ref={inputRef}
            className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyDown={(e) => handleKeyDown(e, comment.id)}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <div className="mt-2 flex gap-2">
            <button
              onClick={() => handleReplySave(comment.id)}
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              Save
            </button>
            <button
              onClick={handleCancleComment}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {comment.children.length > 0 && (
        <ul className="mt-4 ml-4 space-y-2">
          {comment.children.map((item) => (
            <Comment
              key={item.id}
              comment={item}
              addReply={addReply}
            />
          ))}
        </ul>
      )}
    </li>
  )
};

export default Comment