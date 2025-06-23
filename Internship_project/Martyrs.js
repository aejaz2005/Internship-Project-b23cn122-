import React from "react";
import "./HomeHead.css";

function Martyrs() {
  return (
    <div className="medals-container">
      <h1 className="medals-title">Martyrs of the Indian Army</h1>
      <p className="medals-description">
        These brave warriors made the ultimate sacrifice in service of the nation. Their courage, valor, and patriotism continue to inspire generations.
      </p>

      <div className="heroes-grid">
        <div className="hero-card">
          <a href="https://en.wikipedia.org/wiki/Abdul_Hamid_(soldier)" target="_blank" rel="noopener noreferrer">
            <img src="./abdul.jpg" alt="Abdul Hamid" className="hero-photo" />
            <img src="./banaparam.jpg" alt="Param Vir Chakra" className="medal-photo" />
            <h3>Company Q.M.Hav. Abdul Hamid<br /><span>Destroyed 7 Patton tanks in 1965 Indo-Pak war.<br />Param Vir Chakra</span></h3>
          </a>
        </div>

        <div className="hero-card">
          <a href="https://en.wikipedia.org/wiki/Jaswant_Singh_Rawat" target="_blank" rel="noopener noreferrer">
            <img src="./jaswantt.jpg" alt="Jaswant Singh Rawat" className="hero-photo" />
            <img src="./mvc.png" alt="Maha Vir Chakra" className="medal-photo" />
            <h3>Rifleman Jaswant Singh Rawat<br /><span>Fought alone for 72 hrs in 1962 war.<br />Maha Vir Chakra</span></h3>
          </a>
        </div>

        <div className="hero-card">
          <a href="https://en.wikipedia.org/wiki/Manoj_Kumar_Pandey" target="_blank" rel="noopener noreferrer">
            <img src="./manoj.jpg" alt="Manoj Pandey" className="hero-photo" />
            <img src="./banaparam.jpg" alt="Param Vir Chakra" className="medal-photo" />
            <h3>Capt. Manoj Pandey<br /><span>Led assault on Khalubar during Kargil War.<br />Param Vir Chakra</span></h3>
          </a>
        </div>
        <div className="hero-card">
  <a href="https://en.wikipedia.org/wiki/Vikram_Batra" target="_blank" rel="noopener noreferrer">
    <img src="./vikram.jpg" alt="Captain Vikram Batra" className="hero-photo" />
    <img src="./banaparam.jpg" alt="Param Vir Chakra" className="medal-photo" />
    <h3>Captain Vikram Batra<br /><span>Captured Point 4875 in Kargil War.<br />Param Vir Chakra</span></h3>
  </a>
</div>

      

   


        <div className="hero-card">
          <a href="https://en.wikipedia.org/wiki/Sandeep_Unnikrishnan" target="_blank" rel="noopener noreferrer">
            <img src="./majorsandeep.jpg" alt="Sandeep Unnikrishnan" className="hero-photo" />
            <img src="./ac.png" alt="Ashoka Chakra" className="medal-photo" />
            <h3>Maj. Sandeep Unnikrishnan<br /><span>Saved hostages during 26/11 attack.<br />Ashoka Chakra</span></h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Martyrs;
