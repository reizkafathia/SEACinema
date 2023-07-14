import React from 'react';
import logo from './../assets/images/CinemaLogo.png';

function SCLogo() {
  return (
    <div>
        <div className="container">
          <div className="flex flex-wrap justify-center items-center mt-10">
            <div className="w-1/2">
              <img src={logo} alt="Cinema Logo" className="w-full" />
            </div>
          </div>
        </div>
    </div>
  );
}

export default SCLogo