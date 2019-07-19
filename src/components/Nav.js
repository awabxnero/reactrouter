import React, { Component } from "react";
import { Link } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <div className="container">
            <Link to="/" className="brand-logo">
              logo
            </Link>
            <ul id="nav-mobile" class="right">
              <li>
                <Link to="/about">about</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
