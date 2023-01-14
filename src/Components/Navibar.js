import React from "react";
import { Link } from "react-router-dom";

function NaviBar() {
    return (
   
      <nav>
        <div class="nav d-flex justify-content-end p-2">
            <Link to="/" className="link">HOME</Link>
            <Link to="/shop" className="link">КОНДИТЕРСКАЯ</Link>
            <Link to="/resept" className="link">СОВЕТЫ  ПРИГОТОВЛЕНИЯ</Link>
            <Link to="/about" className="link">КУРС</Link>
            <Link to="/contact" className="link">КОНТАКТЫ</Link>
            
        </div>
      </nav>


    )
}

export default NaviBar;