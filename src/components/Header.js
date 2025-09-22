import React from "react";
import "./Header.css";
import sushiImage from "../../src/assets/sushi.jpg";
import CartButton from "./CartButton";


const Header = () => {
  return (
    <React.Fragment>
      <header className="header">
        <div><h1>Yapona Kitchen</h1></div>
        <CartButton />
      </header>
      <div className="headerImage">
        <img src={sushiImage} alt="Yapona Kitchen" />
      </div>
    </React.Fragment>
  )
}

export default Header;