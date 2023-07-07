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
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4 inline-block"
      >
        Back to Posts
      </Link>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
          <label htmlFor="title" className="block mb-1">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-1 border"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="content" className="block mb-1">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-1 border"
          />
        </div>
        <button
          type="submit"
          className="px-2 py-1 bg-blue-500 text-white"
          disabled={!title || !content}
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default NewPost;
