import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

import logoImage from  '../../assets/images/logo.svg';
import backIcon from  '../../assets/images/icons/back.svg';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={ backIcon } alt="Voltar"/>
        </Link>
        <img src={ logoImage } alt="Proffy"/>
      </div>

      <div className="header-content">
        <strong>{ props.title }</strong>
        { props.children }
      </div>
    </header>
  )
}

export default Header;
