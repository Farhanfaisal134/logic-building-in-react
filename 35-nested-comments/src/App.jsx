import React, { useState } from 'react'
import Comment from './Comment';

const App = () => {
  const [input, setInput] = useState('');
  const [comments, setComments] = useState([
    {
      id: 1,
      display: 'Hello',
      children: [
        {
          id: 10,
          display: 'Very nice',
          children: [
            {
              id: 11,
              display: 'Awesome :)',
              children: []
            }
          ]
        }
      ]
    },
    {
      id: 2,
      display: 'Amazing',
      children: []
    }
  ]);

  const addReply = (commentId, replyText) => {
    const copyComments = [...comments];
    addComment(copyComments, commentId, replyText);
    setComments(copyComments);
  };

  const addComment = (comments, parentId, text) => {
    console.log(parentId);

    for (let i = 0; i < comments.length; i++) {
      let comment = comments[i];
      if (comment.id === parentId) {
        comment.children.unshift(newComment(text));
      }
    };

    for (let i = 0; i < comments.length; i++) {
      let comment = comments[i];
      addComment(comment.children, parentId, text)
    };
  };

  const newComment = (text) => {
    return {
      id: new Date().getTime(),
      display: text,
      children: []
    }
  };

  const handleNewComment = () => {
    if (input) {
      setComments([...comments, newComment(input)]);
      setInput('')
    };
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-white p-2 md:p-4 rounded shadow">
        <div className="w-full flex gap-2 mb-2">
          <input
            className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Your comment..."
            value={input}
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={handleNewComment}
          >
            Comment
          </button>
        </div>
        <div>
          <ul className="space-y-4">
            {comments.map((item) => (
              <Comment
                key={item.id}
                comment={item}
                addReply={addReply}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
};

export default App;