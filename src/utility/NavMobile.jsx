
import { Routes, Route, Link } from "react-router-dom";
import { FiHome, FiSettings, FiPlusSquare, FiUnlock } from "react-icons/fi";
import { Home } from "../components/Home";
import { Settings } from "../components/Settings";
import { Create } from "../components/Create";
import { Account } from "../components/Account"

//! Parent: components/NavBar.jsx
export const NavMobile= ()=>{

  return(<>
    <nav className="main__navMobile">
      <ul className="main__navMobile--links">
        <li><FiHome /><Link to="/">Home</Link></li>
        <li><FiSettings /><Link to="/Settings">Settings</Link></li>
        <li><FiPlusSquare /><Link to="/Create">Create</Link></li>
        <li><FiUnlock /><Link to="/Account">Account</Link></li>
      </ul>
    </nav>
    </>)
}