import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Logo from "/image/Shop Logo (500 × 250px).png"

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  
  console.log(user);
  const handleLogout = () => {
    logOut()
    .then(() => {} )
    .catch();
  }
    return (
       <div className="bg-base-200 ">
          <div className="navbar mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">

        <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/alltoys">All toys</NavLink></li>
      {user && <li><NavLink to="/addtoys" className="justify-between">Add Toys</NavLink></li>}
          {user && <li><NavLink to="/mytoys" className="justify-between">My Toys</NavLink></li>}
      <li><NavLink to="/blogs">Blog</NavLink></li>
      </ul>
    </div>
  <NavLink to="/" className=""><img src={Logo} alt="" className="avatar w-52" /></NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/alltoys">All toys</NavLink></li>
      {user && <li><NavLink to="/addtoys" className="justify-between">Add Toys</NavLink></li>}
          {user && <li><NavLink to="/mytoys" className="justify-between">My Toys</NavLink></li>}
      <li><NavLink to="/blogs">Blog</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
  {!user && <Link to="/login" className="btn btn-primary">Login</Link> ||
  <div className={user?"tooltip dropdown dropdown-end" : "dropdown dropdown-end"} data-tip={user?.displayName}>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
          <img src={!user && "http://gg.gg/148o34" || user.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        
        <li> <Link onClick={handleLogout} className="between">Logout</Link></li>
        
      
      </ul>
    </div>}
    </div>
</div>
       </div>
    );
};

export default Header;