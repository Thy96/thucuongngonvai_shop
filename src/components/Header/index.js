import React from 'react'
import { Link } from "react-router-dom";
import { images } from '../../images';
import MenuBar from "./MenuBar";
import SliderBar from './SliderBar';


const Header = () => {
  return (
    <>
      <header id="header-wrap">
        <div id="header" className="container">
          <Link className="logo" to="/thucuongngonvai">
            <img className="logo-img" src={images.logohead} alt="logo" />
          </Link>
          <div className="menu">
            <div className="menu-primary">
              <MenuBar></MenuBar>
            </div>
          </div>
        </div>
      </header>
      <SliderBar></SliderBar></>
  )
}

export default Header