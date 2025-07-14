import React from 'react';
import './Ticker.css'; // We'll write styles here

const Ticker = ({ children }) => {
  return (
    <div className="ticker-wrapper">
      <div className="ticker-content">
        {children}
      </div>
    </div>
  );
};

export default Ticker;
