
import { Routes, Route, Link } from "react-router-dom";
import { FiHome, FiSettings, FiPlusSquare, FiUnlock, FiArchive } from "react-icons/fi";
import { Home } from "../components/Home";
import { Settings } from "../components/Settings";
import { Create } from "../components/Create";
import { Account } from "../components/Account"

//! Parent: components/NavBar.jsx
export const NavDesktop= ()=>{

  return(<>
    <nav className="main__navDesktop">
      <ul className="main__navDesktop--links">
        <li><Link to="/"><FiHome />Home</Link></li>
        <li><Link to="/Settings"><FiSettings />Settings</Link></li>
        <li><Link to="/Create"><FiPlusSquare />Create</Link></li>
        <li><Link to="/Account"><FiUnlock />Account</Link></li>
        <li><Link to="/Products"><FiArchive />Products</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/Create" element={<Create />}/>
      <Route path="/Account" element={<Account />}/>
    </Routes>
    </>)
}