import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Posts from "./components/Posts";
import NewPost from "./components/NewPost";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profile from "./components/Profile";
import SignOut from "./components/SignOut";
import { useAuthContext } from "./AuthContext";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

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

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUser } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/signin");
    }
  }, [currentUser, navigate]);

  return currentUser ? children : null;
};

const App: React.FC = () => {
  const { currentUser } = useAuthContext();

  const initialPosts: PostType[] = [
    {
      id: 1,
      title: "The Gig Economy: Exploitation in the Name of Innovation",
      content:
        "In the past decade, the gig economy has been hailed as a revolutionary force, disrupting traditional employment models and providing unprecedented flexibility for workers. However, beneath the glossy veneer of innovation, the gig economy reveals a darker reality: the exploitation of workers under the guise of progress.\n\nThe gig economy, characterized by short-term contracts or freelance work as opposed to permanent jobs, has been driven by tech giants like Uber, Lyft, and DoorDash. These companies promise freedom and flexibility, but the reality for many gig workers is far from this ideal.\n\nWithout the protections of traditional employment, gig workers are left vulnerable. They lack access to benefits such as health insurance, paid leave, and retirement plans. They also bear the brunt of operational costs, such as vehicle maintenance and fuel in the case of ride-share drivers.\n\nFurthermore, the algorithmic management used by these platforms can lead to unpredictable income and intense pressure to work long hours. Workers are often at the mercy of opaque algorithms that determine their assignments and pay.\n\nThe gig economy is not an inevitable result of technological progress. It is a deliberate business model that shifts risk from corporations to workers, all while avoiding the responsibilities that come with traditional employment.\n\nAs we move forward, it's crucial to challenge the narrative that the gig economy is synonymous with innovation. True innovation should not come at the expense of workers' rights and wellbeing. Instead, we must advocate for policies that protect gig workers, ensuring they receive fair pay, benefits, and the right to organize.",
      likes: 10,
      comments: [
        {
          id: 1,
          content:
            "This article really hits the nail on the head. It's high time we start recognizing the gig economy for what it is - exploitation.",
          likes: 5,
        },
        {
          id: 2,
          content:
            "I've been driving for Uber for a few years now and everything in this article rings true. The lack of benefits and unpredictable income make it a tough way to make a living.",
          likes: 3,
        },
        {
          id: 3,
          content:
            "It's important to remember that not all gig work is bad. I've been freelancing for years and I love the flexibility. But I agree that companies like Uber and Lyft need to do better by their workers.",
          likes: 11,
        },
        {
          id: 4,
          content:
            "We need to push for legislation that protects gig workers. It's not enough to just talk about it.",
          likes: 5,
        },
        {
          id: 5,
          content:
            "We need to push for legislation that protects gig workers. It's not enough to just talk about it.",
          likes: 2,
        },
      ],
    },
    {
      id: 2,
      title: "Neoliberalism and the Erosion of Public Education",
      content:
        "Neoliberalism, the political and economic ideology that champions free markets, deregulation, and privatization, has left an indelible mark on many sectors of society. Perhaps nowhere is this more evident than in the realm of public education.\n\nOver the past few decades, neoliberal policies have led to a steady erosion of public education. This has taken many forms, from budget cuts and the proliferation of standardized testing to the rise of charter schools and the privatization of education services.\n\nBudget cuts, often justified in the name of austerity, have left schools struggling to provide basic resources. Class sizes have ballooned, arts and extracurricular programs have been slashed, and many schools are grappling with outdated textbooks and crumbling infrastructure.\n\nMeanwhile, the emphasis on standardized testing has transformed the educational landscape. Teachers are increasingly forced to \"teach to the test,\" stifling creativity and reducing education to a series of rote tasks. This approach not only undermines the quality of education but also disproportionately impacts disadvantaged students who lack access to test preparation resources.\n\nThe rise of charter schools and the privatization of education services represent another facet of neoliberalism's impact. While proponents argue that these measures offer choice and competition, the reality is often different. Many charter schools perform no better than public schools, and some are plagued by mismanagement and a lack of accountability. Moreover, the focus on choice overlooks the fact that every child should have access to a high-quality public education, regardless of their zip code.\n\nNeoliberalism's assault on public education is not an inevitable consequence of economic evolution. It is the result of policy choices that prioritize market principles over the public good. As we look to the future, we must challenge these choices and advocate for a robust, equitable public education system that serves all students.",
      likes: 15,
      comments: [
        {
          id: 1,
          content:
            "This article is spot on. Public education is a right, not a commodity to be bought and sold.",
          likes: 4,
        },
        {
          id: 2,
          content:
            "As a teacher, I've seen firsthand the damage caused by budget cuts and the obsession with standardized testing. We need to invest in our schools and trust our teachers.",
          likes: 2,
        },
        {
          id: 3,
          content:
            "The privatization of education is a serious concern. It's not about choice, it's about profit.",
          likes: 7,
        },
      ],
    },
    {
      id: 3,
      title: "Universal Healthcare: A Right, Not a Privilege",
      content:
        "In the wealthiest nation on earth, it is a scandal that millions of people are left without access to affordable, quality healthcare. The United States stands alone among developed nations in its refusal to recognize healthcare as a right, not a privilege.\n\nThe current system, dominated by private insurance companies, is both inefficient and inequitable. It leaves millions uninsured or underinsured, forces many to forego necessary care due to cost, and leads to thousands of preventable deaths each year.\n\nMeanwhile, those with insurance are often burdened by high premiums, deductibles, and out-of-pocket costs. Even a minor illness or injury can lead to financial ruin. This is not a system designed to promote health but one designed to generate profit.\n\nThe solution is clear: we need a universal healthcare system, one that guarantees healthcare to all as a right. Such a system would not only improve health outcomes but also free individuals from the fear of medical bankruptcy and liberate businesses from the burden of providing health insurance.\n\nCritics argue that we can't afford universal healthcare. But the truth is, we can't afford not to have it. Studies have shown that a single-payer system could actually save money in the long run by reducing administrative costs and negotiating lower prices for drugs and services.\n\nUniversal healthcare is not a radical idea. It's a practical, humane policy that recognizes the fundamental dignity of every person. It's time for the United States to join the rest of the developed world and make healthcare a right, not a privilege.",
      likes: 20,
      comments: [
        {
          id: 1,
          content:
            "As someone who has struggled with medical bills, I can tell you that the current system is broken. We need change.",
          likes: 3,
        },
      ],
    },
    {
      id: 4,
      title:
        "Revisiting Rosa Luxemburg: Her Legacy in Today's Progressive Movements",
      content:
        "Rosa Luxemburg, the Polish-born Marxist theorist and revolutionary, remains a towering figure in the history of socialist thought. Over a century after her death, her writings and ideas continue to resonate, offering valuable insights for today's progressive movements.\n\nLuxemburg's commitment to democracy and her critique of bureaucratic centralism distinguish her from many of her contemporaries. She argued passionately for the importance of grassroots activism and workers' self-emancipation, ideas that remain central to progressive politics today.\n\nHer critique of capitalism was not limited to economic inequality. She also recognized the destructive impact of capitalism on the natural world, making her an early precursor to today's eco-socialists.\n\nLuxemburg's internationalism is another aspect of her legacy that holds particular relevance today. At a time when nationalism is on the rise, her insistence on the interconnectedness of struggles across borders serves as a powerful reminder of the need for international solidarity.\n\nFinally, Luxemburg's unwavering commitment to social justice, even in the face of personal danger, serves as an inspiration for activists today. Her famous quote, \"Freedom is always the freedom of the one who thinks differently,\" is a testament to her belief in the importance of dissent and critical thinking.\n\nIn revisiting Rosa Luxemburg, we find a thinker of immense relevance to our current moment. Her legacy serves as a guide and a challenge for those seeking to build a more just and equitable world.",
      likes: 25,
      comments: [
        {
          id: 1,
          content:
            "Rosa Luxemburg was a true visionary. Her ideas are more relevant than ever in today's political climate.",
          likes: 5,
        },
        {
          id: 2,
          content:
            "I've always admired Luxemburg's commitment to democracy and grassroots activism. She was a true champion of the people.",
          likes: 3,
        },
        {
          id: 3,
          content:
            "Luxemburg's internationalism is particularly important today. We need to remember that our struggles are interconnected.",
          likes: 6,
        },
        {
          id: 4,
          content:
            "It's great to see Luxemburg getting the recognition she deserves. Her writings have had a huge influence on my own political beliefs.",
          likes: 4,
        },
        {
          id: 5,
          content:
            "Luxemburg's critique of capitalism goes beyond economics. Her insights into the environmental impact of capitalism were way ahead of her time.",
          likes: 10,
        },
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

  const PostsWrapper = () => (
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
  );
  // Return the JSX to render
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <nav className="bg-blue-500 p-6">
        {!currentUser && (
          <>
            <Link to="/signup" className="text-white mr-4">
              Sign Up
            </Link>
            <Link to="/signin" className="text-white mr-4">
              Sign In
            </Link>
          </>
        )}
        {currentUser && (
          <>
            <Link to="/profile" className="text-white mr-4">
              Profile
            </Link>
            <Link to="/signout" className="text-white mr-4">
              Sign Out
            </Link>
          </>
        )}
      </nav>
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/newpost" element={<NewPost addPost={addPost} />} />
          <Route path="/" element={<PostsWrapper />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
