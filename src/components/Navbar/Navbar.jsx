import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-background text-white">
      <div className="mx-4 p-10 flex space-x-10 items-center font-Kanit">
        <div className="text-2xl underline underline-offset-10">
          <Link to="/">AD</Link>
        </div>
          <div className="text-1xl underline underline-offset-10">
          <Link to="/projects">PROJECTS</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
