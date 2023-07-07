import { useAuthContext } from "../AuthContext";
import { useNavigate } from "react-router-dom"; // import useNavigate

const SignOut: React.FC = () => {
  const { signout } = useAuthContext();
  const navigate = useNavigate(); // initialize useNavigate

  const handleSignOut = async () => {
    try {
      await signout();
      navigate("/signin"); // navigate to the sign-in page after signing out
    } catch (error) {
      console.error("Failed to sign out");
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Sign Out
    </button>
  );
};

export default SignOut;
