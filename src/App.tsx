import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Posts from "./components/Posts";
import NewPost from "./components/NewPost";

type CommentType = {
  id: number;
  content: string;
  likes: number;
};

type PostType = {
  id: number;
  title: string;
  content: string;
  likes: number;
  comments: CommentType[];
};

const App: React.FC = () => {
  const initialPosts: PostType[] = [
    {
      id: 1,
      title: "The Importance of Free Speech",
      content:
        "Free speech is the cornerstone of a democratic society. It is not just about the right to express one’s opinions, but also about the right to be heard. When we talk about free speech, we mean the freedom to express ideas and opinions without censorship or restraint. It is a fundamental human right that is protected under the United Nations Universal Declaration of Human Rights.",
      likes: 10,
      comments: [
        { id: 1, content: "I totally agree with this!", likes: 5 },
        { id: 2, content: "Well said!", likes: 3 },
      ],
    },
    {
      id: 2,
      title: "Understanding Social Equality",
      content:
        "Social equality is a state of affairs in which all individuals within a specific society or isolated group have the same status in certain respects. These include equal rights under the law, both physical and psychological integrity, and access to certain social goods and services. Often, social equality is linked to racial equality, gender equality, and similar matters.",
      likes: 15,
      comments: [
        { id: 1, content: "Very informative!", likes: 4 },
        { id: 2, content: "Thanks for sharing this.", likes: 2 },
      ],
    },
    {
      id: 3,
      title: "The Role of Unions in Workers Rights",
      content:
        "Unions play a pivotal role both in securing legislated labor protections and rights such as safety and health, overtime, and family/medical leave and in enforcing those rights on the job. Because they are powered by large numbers of united workers, unions can negotiate improved benefits and better working conditions for their members.",
      likes: 20,
      comments: [
        { id: 1, content: "Unions are indeed important!", likes: 3 },
        { id: 2, content: "I appreciate the role of unions.", likes: 2 },
      ],
    },
    {
      id: 4,
      title: "The Impact of Climate Change",
      content:
        "Climate change is a long-term shift in weather conditions identified by changes in temperature, precipitation, winds, and other indicators. Climate change can involve both changes in average conditions and changes in variability, including, for example, extreme events.",
      likes: 25,
      comments: [
        { id: 1, content: "We need to take action now!", likes: 5 },
        {
          id: 2,
          content: "Climate change is indeed a serious issue.",
          likes: 3,
        },
      ],
    },
    {
      id: 5,
      title: "The History of Socialism",
      content:
        "Socialism is a political, social, and economic philosophy encompassing a range of economic and social systems characterised by social ownership of the means of production. It includes the political theories and movements associated with such systems.",
      likes: 30,
      comments: [
        { id: 1, content: "Interesting read!", likes: 4 },
        { id: 2, content: "I learned a lot from this.", likes: 2 },
      ],
    },
    {
      id: 6,
      title: "The Future of Renewable Energy",
      content:
        "Renewable energy is energy that is collected from renewable resources, which are naturally replenished on a human timescale, including carbon neutral sources like sunlight, wind, rain,tides, waves, and geothermal heat.",
      likes: 35,
      comments: [
        { id: 1, content: "Renewable energy is the future!", likes: 5 },
        {
          id: 2,
          content: "We need to invest more in renewable energy.",
          likes: 3,
        },
      ],
    },
    {
      id: 7,
      title: "The Influence of Media on Politics",
      content:
        "The media can shape public opinion and influence political decisions. The media has the resources and authority to deliver the public a variety of news, political viewpoints, and related information.",
      likes: 40,
      comments: [
        { id: 1, content: "Media plays a crucial role in politics.", likes: 4 },
        { id: 2, content: "Interesting perspective.", likes: 2 },
      ],
    },
    {
      id: 8,
      title: "The Role of Education in Society",
      content:
        "Education is a vital part of society and a community growing and advancing in general. It provides necessary skills and knowledge and helps to create a more understanding, empathetic, and well-rounded society.",
      likes: 45,
      comments: [
        { id: 1, content: "Education is indeed very important!", likes: 5 },
        { id: 2, content: "We need to invest more in education.", likes: 3 },
      ],
    },
    {
      id: 9,
      title: "The Importance of Healthcare",
      content:
        "Healthcare is important to the society because people get ill, accidents and emergencies do arise and the hospitals are needed to diagnose, treat and manage different types of ailments and diseases.",
      likes: 50,
      comments: [
        { id: 1, content: "Healthcare is a basic human right!", likes: 5 },
        {
          id: 2,
          content: "We need to improve our healthcare system.",
          likes: 3,
        },
      ],
    },
    {
      id: 10,
      title: "The Impact of Technology on Society",
      content:
        "Technology impacts the environment, people and the society as a whole. The way we use technology determines if its impacts are positive to the society or negative.",
      likes: 55,
      comments: [
        {
          id: 1,
          content: "Technology has indeed changed our lives.",
          likes: 5,
        },
        { id: 2, content: "We need to use technology responsibly.", likes: 3 },
      ],
    },
  ];

  // Define a state variable for the posts
  const [posts, setPosts] = useState(initialPosts);

  // Define a function to add a new post
  const addPost = (title: string, content: string) => {
    const newPost: PostType = {
      id: posts.length + 1,
      title,
      content,
      likes: 0,
      comments: [],
    };
    setPosts([...posts, newPost]);
  };

  // Define a function to like a post
  const likePost = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              likes: post.likes + 1,
            }
          : post
      )
    );
  };

  // Define a function to like a comment
  const likeComment = (postId: number, commentId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((comment) =>
                comment.id === commentId
                  ? {
                      ...comment,
                      likes: comment.likes + 1,
                    }
                  : comment
              ),
            }
          : post
      )
    );
  };

  // Define a function to add a new comment
  const addComment = (postId: number, content: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [
                ...post.comments,
                {
                  id: post.comments.length + 1,
                  content,
                  likes: 0,
                },
              ],
            }
          : post
      )
    );
  };

  // Define a function to delete a post
  const deletePost = (postId: number) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  // Define a function to delete a comment
  const deleteComment = (postId: number, commentId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.filter(
                (comment) => comment.id !== commentId
              ),
            }
          : post
      )
    );
  };

  // Define a function to edit a post
  const editPost = (postId: number, title: string, content: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              title,
              content,
            }
          : post
      )
    );
  };

  // Define a function to edit a comment
  const editComment = (postId: number, commentId: number, content: string) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments.map((comment) =>
                comment.id === commentId
                  ? {
                      ...comment,
                      content,
                    }
                  : comment
              ),
            }
          : post
      )
    );
  };

  // Return the JSX to render
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <NewPost addPost={addPost} />
        <Posts
          posts={posts}
          likePost={likePost}
          likeComment={likeComment}
          addComment={addComment}
          deletePost={deletePost}
          deleteComment={deleteComment}
          editPost={editPost}
          editComment={editComment}
        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
