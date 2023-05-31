import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
    .then(() => {} )
    .catch();
  }
    return (
       <div className="bg-base-200">
          <div className="navbar w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <NavLink to="/" className="btn btn-ghost normal-case text-xl">e-toys</NavLink>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/alltoys">All toys</NavLink></li>
      <li><NavLink to="/addtoys">Add Toys</NavLink></li>
      <li><NavLink to="/mytoys">My Toys</NavLink></li>
      <li><NavLink to="/blogs">Blog</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={!user && "http://gg.gg/148o34" || user.photoURL} />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
        
          {user && <li><Link to="/profile" className="justify-between">Profile<span className="badge">New</span></Link></li>}
        
        <li>{!user && <Link to="/login" className="between">Login</Link> || <Link onClick={handleLogout} className="between">Logout</Link>}</li>
      </ul>
    </div>
    </div>
</div>
       </div>
    );
};

export default Header;