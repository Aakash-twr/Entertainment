import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      <i class="fas fa-video"></i>Entertainment Paradise
      <i class="fas fa-film"></i>
    </span>
  );
};

export default Header;
