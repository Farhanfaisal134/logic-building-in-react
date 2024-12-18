import React, { useState } from 'react'
import { marked } from "marked";

const App = () => {
  const [markdown, setMarkdown] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="text-center py-4 shadow-md bg-white dark:bg-gray-900">
        <h1 className="text-2xl font-bold">Markdown Editor</h1>
      </header>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 px-6 py-8">
        {/* Markdown Input */}
        <div className="w-full md:w-1/2">
          <h2 className="text-lg font-semibold mb-2">Write Markdown:</h2>
          <textarea
            value={markdown}
            onChange={(e) => setMarkdown(e.target.value)}
            className="w-full h-64 p-4 border rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none"
            placeholder="Enter your Markdown here..."
          ></textarea>
        </div>

        {/* HTML Preview */}
        <div className="w-full md:w-1/2">
          <h2 className="text-lg font-semibold mb-2">Preview:</h2>
          <div
            className="w-full h-64 p-4 border rounded-lg overflow-y-auto bg-gray-100 dark:bg-gray-700 dark:border-gray-600"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          ></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 bg-white dark:bg-gray-900 shadow-md">
        <p className="text-sm">Developed with ❤️ using React & Tailwind CSS</p>
      </footer>
    </div>
  )
};

export default App;