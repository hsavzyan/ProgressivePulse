import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type NewPostProps = {
  addPost: (title: string, content: string) => void;
};

const NewPost: React.FC<NewPostProps> = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    addPost(title, content);
    setTitle("");
    setContent("");
    navigate("/posts");
  };

  return (
    <div>
      <Link
        to="/posts"
        className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 mb-4 inline-block"
      >
        Back to Posts
      </Link>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label htmlFor="title" className="block mb-1 text-blue-800">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-1 border rounded shadow-inner"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="content" className="block mb-1 text-blue-800">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-1 border rounded shadow-inner"
          />
        </div>
        <button
          type="submit"
          className="px-2 py-1 bg-purple-500 text-white rounded shadow"
          disabled={!title || !content}
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default NewPost;
