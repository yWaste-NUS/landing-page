import React from 'react';
import AppLogo from 'assets/RGBLogo.png';
import ScanReceipt from 'assets/ScanReceipt.png';
import Tracking from 'assets/Tracking.svg';
import Reminder from 'assets/Reminder.png';
import './App.scss';

const App: React.FC = () => {
  return (
    <div>
      <div className="app">
        <div className="app__intro">
          <img className="app__logo" src={AppLogo} alt="AppLogo" />
          <div className="app__title">YWaste</div>
          <div className="app__subtitle">
            A Simple Solution To Managing Food Waste
          </div>
          <button className="app__trynow">Try Now</button>
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
      <div className="app__footer">
        <div className="app__footer--left">Terms of Service</div>
        <div className="app__footer--right">Privacy Policy</div>
      </div>
    </div>
  );
};

export default App;
