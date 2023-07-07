import { useState } from "react"; // Import the React library and the useState hook

// Define the type for a comment
type CommentType = {
  id: number;
  content: string;
  likes: number;
};

// Define the type for a post
type PostType = {
  id: number;
  title: string;
  content: string;
  likes: number;
  comments: CommentType[];
};

// Define the type for the props of the Post component
type PostProps = {
  post: PostType;
  likePost: () => void;
  likeComment: (commentId: number) => void;
  addComment: (content: string) => void;
  deletePost: () => void;
  deleteComment: (commentId: number) => void;
  editPost: (title: string, content: string) => void;
  editComment: (commentId: number, content: string) => void;
};

// Define a functional component named Post
const Post: React.FC<PostProps> = ({
  post,
  likePost,
  likeComment,
  addComment,
  deletePost,
  deleteComment,
  editPost,
  editComment,
}) => {
  // Define state variables for the post and comment inputs
  const [postTitle, setPostTitle] = useState(post.title);
  const [postContent, setPostContent] = useState(post.content);
  const [newComment, setNewComment] = useState("");
  const [editedComment, setEditedComment] = useState("");
  const [commentToEdit, setCommentToEdit] = useState<CommentType | null>(null);
  const [isEditingPost, setIsEditingPost] = useState(false);

  // Define a function to handle the post form submission
  const handlePostSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    editPost(postTitle, postContent);
    setIsEditingPost(false);
  };

  // Define a function to handle the comment form submission
  const handleCommentSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (commentToEdit) {
      editComment(commentToEdit.id, editedComment);
      setCommentToEdit(null);
      setEditedComment("");
    } else {
      addComment(newComment);
      setNewComment("");
    }
  };

  // Return the JSX to render
  return (
    <article className="border p-4 mb-4 bg-blue-50 rounded-lg shadow-xl">
      <h2 className="text-2xl mb-2 font-semibold text-blue-700">
        {isEditingPost ? (
          <input
            type="text"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            className="text-2xl mb-2 w-full p-2 border rounded shadow-inner"
          />
        ) : (
          post.title
        )}
      </h2>
      {isEditingPost ? (
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          className="w-full p-2 border rounded mb-2 shadow-inner"
        />
      ) : (
        <p className="text-gray-700">{post.content}</p>
      )}
      <div className="flex items-center space-x-2 mt-2">
        <button
          onClick={likePost}
          className="px-2 py-1 bg-purple-500 text-white rounded shadow"
        >
          Like ({post.likes})
        </button>
        {isEditingPost ? (
          <button
            onClick={handlePostSubmit}
            className="px-2 py-1 bg-green-700 text-white rounded shadow"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditingPost(true)}
            className="px-2 py-1 bg-blue-700 text-white rounded shadow"
          >
            Edit
          </button>
        )}
        <button
          onClick={deletePost}
          className="px-2 py-1 bg-red-700 text-white rounded shadow"
        >
          Delete
        </button>
      </div>
      <div className="mt-4 space-y-4">
        {post.comments.map((comment) => (
          <div key={comment.id} className="space-y-2">
            <div className="border p-2 rounded bg-purple-50 shadow-inner">
              {commentToEdit?.id === comment.id ? (
                <input
                  type="text"
                  value={editedComment}
                  onChange={(e) => setEditedComment(e.target.value)}
                  className="w-full p-2 border rounded mb-2 shadow-inner"
                />
              ) : (
                <p className="text-blue-800">{comment.content}</p>
              )}
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <button
                onClick={() => likeComment(comment.id)}
                className="px-2 py-1 bg-purple-500 text-white rounded shadow"
              >
                Like ({comment.likes})
              </button>
              {commentToEdit?.id === comment.id ? (
                <button
                  onClick={handleCommentSubmit}
                  className="px-2 py-1 bg-green-700 text-white rounded shadow"
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    setCommentToEdit(comment);
                    setEditedComment(comment.content);
                  }}
                  className="px-2 py-1 bg-blue-700 text-white rounded shadow"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => deleteComment(comment.id)}
                className="px-2 py-1 bg-red-700 text-white rounded shadow"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
        {!commentToEdit && (
          <form onSubmit={handleCommentSubmit} className="mt-4">
            <label htmlFor="comment" className="block mb-1 text-blue-800">
              Add a comment
            </label>
            <input
              id="comment"
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-2 border rounded mb-2 shadow-inner"
            />
            <button
              type="submit"
              className="px-2 py-1 bg-purple-500 text-white rounded shadow"
            >
              Add Comment
            </button>
          </form>
        )}
      </div>
    </article>
  );
};

export default Post; // Export the Post component
