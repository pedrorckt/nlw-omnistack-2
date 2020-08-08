import React from 'react';

import './landing.css';

import logoImage from '../../assets/images/logo.svg';
import heroImage from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-container" className="container">
        <div className="logo-container">
          <img src={logoImage} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={heroImage} alt="Plataforma de estudos" className="hero-image"/>

        <div className="buttons-container">
          <a href="#" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </a>
          <a href="#" className="give-classes">
            <img src={giveIcon} alt="Dar aulas"/>
            Dar aulas
          </a>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas <img src={purpleHeartIcon} alt="💜"/>
        </span>
      </div>
    </div>
  )
}

export default Landing;