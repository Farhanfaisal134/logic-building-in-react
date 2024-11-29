import React, { useState } from "react";
import Comment from "./Comment";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      title: "This is first comment",
      children: [
        { id: 2, title: "This is child comment one", children: [] },
      ],
    },
  ]);
  console.log(comments);

  const handleAddReply = (parentId, replyText) => {
    setComments((prevComments) =>
      addReplyRecursive(prevComments, parentId, replyText)
    );
  };

  const addReplyRecursive = (commentsList, parentId, replyText) => {
    return commentsList.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          children: [
            { id: Date.now(), title: replyText, children: [] },
            ...comment.children,
          ],
        };
      }
      return {
        ...comment,
        children: addReplyRecursive(comment.children, parentId, replyText),
      };
    });
  };

  const addComment = () => {
    setComments([
      { id: Date.now(), title: inputValue, children: [] },
      ...comments,
    ]);
    setInputValue("");
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Nested Comments</h1>
      <div className="flex flex-col items-center gap-4">
        <textarea
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          rows="3"
          placeholder="Add a comment..."
          className="w-full p-4 border-2 border-gray-300 rounded-md outline-none focus:border-blue-400 transition"
        />
        <button
          onClick={addComment}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
        >
          Add Comment
        </button>
      </div>
      <div className="comments-list mt-8 space-y-4">
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            handleAddReply={handleAddReply}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
