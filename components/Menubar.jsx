import React, { useState } from "react";

const Menubar = ({ setToggle }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    setToggle(!menuOpen);
  };

  return (
    <div className={`menu-btn ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
      <div className="menu-btn_burg"></div>
    </div>
  );
};

export default Menubar;
