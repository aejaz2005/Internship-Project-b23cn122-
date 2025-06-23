import React from "react";
import "./HomeHead.css";

function Medals() {
  return (
    <div className="medals-container">
      <h1 className="medals-title">Medals and Awards</h1>
      <p className="medals-description">
        This section honors the courage and commitment of our soldiers. We proudly showcase some of the bravest men and the medals they earned.
      </p>

      <div className="heroes-grid" >
        <div className="hero-card">
          <a href="https://en.wikipedia.org/wiki/Bana_Singh" target="_blank" rel="noopener noreferrer">
            <img src="./bana.jpg" alt="Bana Singh" className="hero-photo" />
          
          <img src="./banaparam.jpg" alt="Param Vir Chakra" className="medal-photo" />
           <img src="./siachenbana.jpg" alt="siachen Chakra" className="medal-photo" />
          <h3>Bana Singh<br /><span>Param Vir Chakra,Siachen medal</span></h3>
          </a>
        </div>

        <div className="hero-card">
            <a href="https://en.wikipedia.org/wiki/Yogendra_Yadav" target="_blank" rel="noopener noreferrer">
          <img src="./yogender.jpg" alt="Yogendra Yadav" className="hero-photo" />
          <img src="./banaparam.jpg" alt="Param Vir Chakra" className="medal-photo" />
          <h3>Yogendra Yadav<br /><span>Param Vir Chakra</span></h3>
          </a>
        </div>

        <div className="hero-card">
            <a href="https://en.wikipedia.org/wiki/Mariappan_Saravanan" target="_blank" rel="noopener noreferrer">
          <img src="./saravanam.jpg" alt="saravanam" className="hero-photo" />
          <img src="./vrc.jpg" alt="Param Vir Chakra" className="medal-photo" />
          <h3>Maiappan Saravanam<br /><span> Vir Chakra</span></h3>
          </a>
        </div>

        <div className="hero-card">
            <a href="https://en.wikipedia.org/wiki/B._Santosh_Babu" target="_blank" rel="noopener noreferrer">
          <img src="./pradeep.jpg" alt="Santosh Babu" className="hero-photo" />
          <img src="./kc.jpg" alt="Maha Vir Chakra" className="medal-photo" />
          <h3>Santosh Babu<br /><span>Kirti Chakra</span></h3>
          </a>
        </div>
        <div className="hero-card">
            <a href="https://en.wikipedia.org/wiki/Mitali_Madhumita" target="_blank" rel="noopener noreferrer">
          <img src="./mitali.jpg" alt="Santosh Babu" className="hero-photo" />
          <img src="./sena.jpg" alt="Maha Vir Chakra" className="medal-photo" />
          <h3>Major Mitali<br /><span>Sena medal</span></h3>
          </a>
        </div>
        <div className="hero-card">
            <a href="https://en.wikipedia.org/wiki/Saurabh_Singh_Shekhawat" target="_blank" rel="noopener noreferrer">
          <img src="./saurabh.jpg" alt="Saurabh" className="hero-photo" />
          <img src="./kc.jpg" alt="kirti Chakra" className="medal-photo" />
          <img src="./samanya.jpg" alt="kirti Chakra" className="medal-photo" />

        
          <h3>Saurabh sing Shekawat<br /><span>Kirti chakr,Samanyaseva medal,sena medal</span></h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Medals;
