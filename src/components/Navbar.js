import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      {/* 标题 */}
      <h1>Ricky Rain Frog</h1>

      {/* 中间的导航链接 */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dialog">Dialog</Link>
        <Link to="/cartoon">Cartoon</Link>
      </div>

      {/* Take Ricky Home 按钮 */}
      <Link to="/shop" className="shop-button">
        Take Ricky Home
      </Link>
    </nav>
  );
}

export default Navbar;
