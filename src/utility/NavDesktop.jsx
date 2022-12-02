
import { Routes, Route, Link } from "react-router-dom";
import { FiHome, FiSettings, FiPlusSquare, FiUnlock } from "react-icons/fi";
import { Home } from "../components/Home";
import { Settings } from "../components/Settings";
import { Create } from "../components/Create";
import { Account } from "../components/Account"

export const NavDesktop= ()=>{

  return(<>
    <nav className="main__navDesktop">
      <ul className="main__navDesktop--links">
        <li><FiHome /><Link to="/">Home</Link></li>
        <li><FiSettings /><Link to="/Settings">Settings</Link></li>
        <li><FiPlusSquare /><Link to="/Create">Create</Link></li>
        <li><FiUnlock /><Link to="/Account">Account</Link></li>
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