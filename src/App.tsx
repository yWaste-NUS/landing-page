import React from 'react';
import AppLogo from 'assets/RGBLogo.png';
import Showcase from 'assets/Showcase.svg';
import ScanReceipt from 'assets/ScanReceipt.png';
import Tracking from 'assets/Tracking.svg';
import Reminder from 'assets/Reminder.png';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="app__intro">
        <img className="app__logo" src={AppLogo} alt="AppLogo" />
        <div className="app__title">YWaste</div>
        <div className="app__subtitle">
          A Simple Solution To Managing Food Waste
        </div>
        <button className="app__trynow">Try Now</button>
        <img className="app__showcase" src={Showcase} alt="Showcase" />
      </div>
      <div className="app__sellingpoints">
        <div className="app__sellingpoint">
          <img
            className="app__sellingpoint--icon"
            src={ScanReceipt}
            alt="ScanReceipt"
          />
          <div className="app__sellingpoint--desc">
            Scan to input details of purchased items into app
          </div>
        </div>
        <div className="app__sellingpoint">
          <img
            className="app__sellingpoint--icon"
            src={Reminder}
            alt="Reminder"
          />
          <div className="app__sellingpoint--desc">
            Receive reminders of expiring food
          </div>
        </div>
        <div className="app__sellingpoint">
          <img
            className="app__sellingpoint--icon"
            src={Tracking}
            alt="Tracking"
          />
          <div className="app__sellingpoint--desc">
            Track food inventory conveniently
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
