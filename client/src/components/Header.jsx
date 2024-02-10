import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-blue-600 text-white text-xl py-2">
      <div className="container flex justify-between items-center">
        <div className="font-bold">authentication</div>
        <ul className="flex gap-4">
          <Link to="/" className="cursor-pointer hover:text-red-600 duration-300">
            Home
          </Link>
          <Link to="/about" className="cursor-pointer hover:text-red-600 duration-300">
            About
          </Link>
          <Link to="/profile" className="cursor-pointer hover:text-red-600 duration-300">
            Profile
          </Link>
        </ul>
      </div>
    </div>
  );
}
