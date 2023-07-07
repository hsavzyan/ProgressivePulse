import { useAuthContext } from "../AuthContext";

const Profile: React.FC = () => {
  const { currentUser } = useAuthContext();

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-2">Profile</h2>
      <p className="text-gray-700 text-base">Email: {currentUser?.email}</p>
    </div>
  );
};

export default Profile;
