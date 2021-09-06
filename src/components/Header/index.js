import React from 'react';
import { FaHeart, FaUserAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const favs = useSelector(state => state.favorite.value);
  const friends = useSelector(state => state.friends.value);
  console.log('count favor',favs);
  console.log('count friends',friends);
  return (
    <header className="page-header">
      <div className="container">
        <nav className="page-nav">
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/friends">Friends</NavLink>
            </li>
          </ul>
        </nav>
        <ul className="header-account">
          <li><NavLink activeClassName="active" to="/account">
            <span className="wrap-fav-counter">
              <FaHeart />
              {!!favs.length && <span>{favs.length}</span>}
            </span>
            </NavLink></li>
          <li><NavLink activeClassName="active" to="/account"><FaUserAlt /></NavLink></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
