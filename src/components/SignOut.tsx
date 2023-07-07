import { useAuthContext } from "../AuthContext";

const SignOut: React.FC = () => {
  const { signout } = useAuthContext();

  const handleSignOut = async () => {
    try {
      await signout();
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
