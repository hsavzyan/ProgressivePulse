import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-700 text-white p-4 text-center">
      <Link to="/posts" className="text-white hover:text-blue-300">
        <h1 className="text-4xl">ProgressivePulse</h1>
      </Link>
    </header>
  );
};

export default Header;
