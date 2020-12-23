import React from 'react';
import AppLogo from 'assets/RGBLogo.png';
import Showcase from 'assets/Showcase.svg';
import './App.scss';

const App: React.FC = () => {
  return (
    <div>
      <div className="app__intro">
        <img className="app__logo" src={AppLogo} alt="AppLogo" />
        <div className="app__title">YWaste</div>
        <div className="app__subtitle">
          A Simple Solution To Managing Food Waste
        </div>
        <button className="app__trynow">Try Now</button>
        <img className="app__showcase" src={Showcase} alt="Showcase" />
      </div>
    </div>
  );
};

export default App;
