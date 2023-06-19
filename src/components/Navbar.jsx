import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Maxwell's React Practice Blog</h1>
      <div className="links">
        <Link to="/blog">Blog</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/games">Games</Link>
        <Link to="/testpage">Test</Link>
        {/*CART BUTTON BELOW */}
        <Link to="/cart">
          <ShoppingCart size={28}></ShoppingCart>
        </Link>
        

        <a href="/">Home</a>

        
        
            {/* NEW BLOG BUTTON BELOW */}
        
        <a
          href="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
