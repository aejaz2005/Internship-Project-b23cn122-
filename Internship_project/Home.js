import React from "react";
import "./HomeHead.css";

function Home() {
  return (
    <div className="home-container">
        <br></br>

      <div>
      
        <div className="home-description">
          IFA is a dedicated digital platform created to serve, support, and empower the brave soldiers of India — both active personnel and veterans. Our mission is to bridge the gap between the needs of army men and the support systems available to them.
        </div>
        <br></br>
        <br></br>

        <h2 className="headerDesc">Indian Army, A Way of Life</h2>
        <div className="home-description">
          The <strong>Indian Army</strong> stands as a colossal pillar of strength, honor, and sacrifice — a force forged in fire and bound by unshakable duty to the motherland.
          Draped in valor and bathed in centuries of glory, it is more than a military institution — it is the <strong>soul of Bharat</strong> in uniform.
          <br /><br />
          Majestic in might and noble in cause, the Indian Army guards the towering Himalayas in the north, the blistering deserts of the west, the dense jungles of the east, and the tranquil coasts of the south.
          It marches not just on borders, but into hearts — a symbol of hope in calamity, and a shield in times of strife.
          <br /><br />
          Each soldier is a living embodiment of the <strong>nation’s spirit</strong> — fearless, disciplined, and devoted beyond measure.
          From the legendary valor at Kargil to the silent vigil on Siachen’s frozen heights, their tales echo through time as hymns of heroism.
          <br /><br />
          <strong>“Service Before Self”</strong> is not just a motto; it’s the lifeblood that runs through their veins.
          The tricolor flutters proudly because they never let it fall.
          They do not fight for fame or reward — they fight because they believe in something greater than themselves: <strong>India</strong>.
          <br /><br />
          To speak of the Indian Army is to speak of thunder and grace, of steel and sacrifice, of a legacy carved into the very earth they defend.
          <br /><br />
          <strong>Jai Hind.</strong>
        </div>
      </div>

      <iframe
        style={{
          marginTop: "30px",
          borderRadius: "10px",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto"
        }}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/3t5M10gBVCc?si=i-DtdSYbOIU8M6sB"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>

    </div>
  );
}

export default Home;


