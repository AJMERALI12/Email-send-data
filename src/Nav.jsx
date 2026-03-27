import { useState } from "react";
import "./App.css";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

 
  return (
    <nav className="navbar">
      <div className="logo">Ajmer Ali</div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Skills</a>
        <a href="#">Contact</a>
      </div>

      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>
    </nav>
    
  );
}

export default Nav