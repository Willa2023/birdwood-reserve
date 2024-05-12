import React, { useState } from "react";
import Rotary from "../assets/icons/Rotary.jpg";
import KAKA from "../assets/icons/KAKA.png";

function Nav() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <nav className="nav container">
      <a href="#" className="nav__logo">
        <img src={KAKA} alt="" width={50} />
      </a>
      <div className="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#home" class="nav__link active-link">
              Home
            </a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link">
              About
            </a>
          </li>
          <li class="nav__item">
            <a href="#discover" class="nav__link">
              Donate
            </a>
          </li>
          <li class="nav__item">
            <a href="#place" class="nav__link">
              Our Supporters
            </a>
          </li>
        </ul>
        <div class="nav__dark">
          {/* Theme change button */}
          <span class="change-theme-name">Dark mode</span>
          <i class="ri-moon-line change-theme" id="theme-button"></i>
          <i class="ri-close-line nav__close" id="nav-close"></i>
        </div>
      </div>
      <div class="nav__toggle" id="nav-toggle">
        <i class="ri-function-line"></i>
      </div>
    </nav>
  );
}

export default Nav;
