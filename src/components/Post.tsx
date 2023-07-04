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
    <article className="border p-4 mb-4">
      {isEditingPost ? (
        <form onSubmit={handlePostSubmit}>
          <input
            type="text"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            className="text-2xl mb-2 w-full p-1 border"
          />
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            className="w-full p-1 border mb-2"
          />
          <button
            type="submit"
            className="px-2 py-1 bg-blue-500 text-white mr-2"
          >
            Save Post
          </button>
        </form>
      ) : (
        <>
          <h2 className="text-2xl mb-2">{post.title}</h2>
          <p>{post.content}</p>
          <button
            onClick={() => setIsEditingPost(true)}
            className="mt-2 px-2 py-1 bg-blue-500 text-white mr-2"
          >
            Edit Post
          </button>
        </>
      )}
      <button
        onClick={deletePost}
        className="px-2 py-1 bg-red-500 text-white mr-2"
      >
        Delete Post
      </button>
      <button
        onClick={likePost}
        className="mt-2 px-2 py-1 bg-blue-500 text-white"
      >
        Like Post ({post.likes})
      </button>
      <div className="mt-4">
        {post.comments.map((comment) => (
          <div key={comment.id} className="border p-2 mb-2">
            {commentToEdit?.id === comment.id ? (
              <input
                type="text"
                value={editedComment}
                onChange={(e) => setEditedComment(e.target.value)}
                className="w-full p-1 border mb-2"
              />
            ) : (
              <p>{comment.content}</p>
            )}
            <button
              onClick={() => likeComment(comment.id)}
              className="mt-2 px-2 py-1 bg-blue-500 text-white mr-2"
            >
              Like Comment ({comment.likes})
            </button>
            {commentToEdit?.id === comment.id ? (
              <button
                onClick={handleCommentSubmit}
                className="mt-2 px-2 py-1 bg-blue-500 text-white mr-2"
              >
                Save Comment
              </button>
            ) : (
              <button
                onClick={() => {
                  setCommentToEdit(comment);
                  setEditedComment(comment.content);
                }}
                className="mt-2 px-2 py-1 bg-blue-500 text-white mr-2"
              >
                Edit Comment
              </button>
            )}
            <button
              onClick={() => deleteComment(comment.id)}
              className="mt-2 px-2 py-1 bg-red-500 text-white"
            >
              Delete Comment
            </button>
          </div>
        ))}
        {!commentToEdit && (
          <form onSubmit={handleCommentSubmit} className="mt-4">
            <label htmlFor="comment" className="block mb-1">
              Add a comment
            </label>
            <input
              id="comment"
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full p-1 border mb-2"
            />
            <button type="submit" className="px-2 py-1 bg-blue-500 text-white">
              Add Comment
            </button>
          </form>
        )}
      </div>
    </article>
  );
};

export default Post; // Export the Post component
