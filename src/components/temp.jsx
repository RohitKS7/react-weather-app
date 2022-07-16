// https://api.openweathermap.org/data/2.5/weather?q=agra&appid=65c2a36f1d3f86adcd200d20c9003d69

import React, { useState, useEffect } from 'react';
// import Weathercard from './weathercard';
import './style.css';

const Temp = () => {
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
          />

          <button
            className="searchButton"
            type="button"
          >
            Search
          </button>
        </div>
      </div>

      {/* our Weather Card */}
    </>
  );
};

export default Temp;
