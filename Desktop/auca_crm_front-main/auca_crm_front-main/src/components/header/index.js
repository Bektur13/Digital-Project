import React from 'react';
import LOGO from "../../assets/logo.png";
import LOGIN from "../../assets/login.svg";
import LOGOUT from "../../assets/logout.svg";

import './style.scss';

const Header = () => {
  const isAuth = localStorage.getItem("auth")
  const [openModal, setOpenModal] = React.useState(false)
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__row'>
          <img src={LOGO} className="header__logo" alt="logo" />
          <div className="header__items">
            <nav className="nav">
              <ul className="nav__list">
                {!isAuth && (
                <li className="nav__item">
                  <a className="nav__link" onClick={() => setOpenModal(true)}>
                    <img src={LOGIN} alt="login" />
                  </a>
                </li>)}
                {isAuth && 
                <li className="nav__item">
                  <a className="nav__link" href="#">
                    <img src={LOGOUT} alt="logout" />
                  </a>
                </li>}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
