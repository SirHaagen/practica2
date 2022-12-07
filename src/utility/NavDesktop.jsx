
import { Routes, Route, Link } from "react-router-dom";
import { FiHome, FiSettings, FiPlusSquare, FiUnlock, FiArchive, FiStar, FiSearch, FiUser } from "react-icons/fi";
import { useRef, useState } from "react";

import { Home } from "../components/Home";
import { Settings } from "../components/Settings";
import { SetDisplay } from "../utility/SetDisplay";
import { SetEditor } from "../utility/SetEditor";
import { SetTheme } from "../utility/SetTheme";
import { SetInterface } from "../utility/SetInterface";

import { Create } from "../components/Create";
import { Account } from "../components/Account";
import { Products } from "../components/Products";
import { Favourites } from "../components/Favourites";
import { Search } from "../components/Search";
import { Users } from "../components/Users";

//! Parent: components/NavBar.jsx
export const NavDesktop = () => {

  const btnSubmenu1= useRef();
  const [display1, setDisplay1]= useState(false);
  const handleBtn= ()=>{
    setDisplay1(!display1);
  }

  return (<>
    <nav className="main__navDesktop">
      <ul className="main__navDesktop--links">
        <li><Link to="/"><FiHome />Home</Link></li>

        <li>
          <Link to="/Settings" ref={btnSubmenu1} onClick={handleBtn}><FiSettings />Settings</Link>
          <ul className={`main__navDesktop--links-submenu1 ${display1? "hideMenu": ""}`}>
            <li><Link to="/SetDisplay">· Display</Link></li>
            <li><Link to="/SetEditor">· Editor</Link></li>
            <li><Link to="/SetTheme">· Theme</Link></li>
            <li><Link to="/SetInterface">· Interface</Link></li>
          </ul>
        </li>
        
        <li><Link to="/Create"><FiPlusSquare />Create</Link></li>
        <li><Link to="/Account"><FiUnlock />Account</Link></li>
        <li><Link to="/Products"><FiArchive />Products</Link></li>
        <li><Link to="/Favourites"><FiStar />Favourites</Link></li>
        <li><Link to="/Search"><FiSearch />Search</Link></li>
        <li><Link to="/Users"><FiUser />Users</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/Settings" element={<Settings />} />
      <Route path="/SetDisplay" element={<SetDisplay />} />
      <Route path="/SetEditor" element={<SetEditor />} />
      <Route path="/SetTheme" element={<SetTheme />} />
      <Route path="/SetInterface" element={<SetInterface />} />

      <Route path="/Create" element={<Create />} />
      <Route path="/Account" element={<Account />} />
      <Route path="/Products" element={<Products />} />
      <Route path="/Favourites" element={<Favourites />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/Users" element={<Users />} />
    </Routes>
  </>)
}