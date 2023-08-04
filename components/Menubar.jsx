"use client"

import React, { useState } from "react";

const Menubar = () => {

    const [menuOpen,setMeneOpen]=useState(false)
  const menuFn = () => {
    const menuBtn = document.querySelector(".menu-btn");
   
    menuBtn.addEventListener("click", () => {
      if (!menuOpen) {
        menuBtn.classList.remove("open");
       setMeneOpen(true);
      } else {
        menuBtn.classList.add("open");
       setMeneOpen(false)
      }
    });
  };
  return (
    <div className={`menu-btn ${menuOpen ? 'open' : ''}`} onClick={menuFn}>
      <div className="menu-btn_burg" ></div>
    
    </div>
  );
};

export default Menubar;
