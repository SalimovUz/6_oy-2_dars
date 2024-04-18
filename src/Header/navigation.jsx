import React from 'react'
import "../assets/all.scss"
import Logo from "../images/logos/navbar-logo.svg"
import Search from "../images/icons/navbar-search.svg"
import Profile from "../images/icons/navbar-profile.svg";
import Korzinka from "../images/icons/navbar-korzinka.svg";
import Like from "../images/icons/navbar-like.svg";
import "./navigation.scss"


const navigation = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navbar__container">
          <ul className="navbar__menu">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Clothes</a>
            </li>
            <li>
              <a href="#">Shoes</a>
            </li>
            <li>
              <a href="#">Accessories</a>
            </li>
          </ul>

          <a href="#">
            <img className="navbar__logo" src={Logo} alt="NavbarLogo" />
          </a>

          <label className="navbar__search" htmlFor="search">
            <input id="search" type="text" placeholder="Search..." />
            <img src={Search} alt="SearchIcon" />
          </label>

          <div className="navbar__left">
            <img src={Profile} alt="Profile" />
            <img src={Korzinka} alt="Korzinka" />
            <img src={Like} alt="LikeIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default navigation