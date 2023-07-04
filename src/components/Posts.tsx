import Post from "./Post"; // Import the Post component

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

// Define the type for the props of the Posts component
type PostsProps = {
  posts: PostType[];
  likePost: (postId: number) => void;
  likeComment: (postId: number, commentId: number) => void;
  addComment: (postId: number, content: string) => void;
  deletePost: (postId: number) => void;
  deleteComment: (postId: number, commentId: number) => void;
  editPost: (postId: number, title: string, content: string) => void;
  editComment: (postId: number, commentId: number, content: string) => void;
};

// Define a functional component named Posts
const Posts: React.FC<PostsProps> = ({
  posts,
  likePost,
  likeComment,
  addComment,
  deletePost,
  deleteComment,
  editPost,
  editComment,
}) => {
  // Return the JSX to render
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          likePost={() => likePost(post.id)}
          likeComment={(commentId) => likeComment(post.id, commentId)}
          addComment={(content) => addComment(post.id, content)}
          deletePost={() => deletePost(post.id)}
          deleteComment={(commentId) => deleteComment(post.id, commentId)}
          editPost={(title, content) => editPost(post.id, title, content)}
          editComment={(commentId, content) =>
            editComment(post.id, commentId, content)
          }
        />
      ))}
    </div>
  );
};

export default Posts; // Export the Posts component
