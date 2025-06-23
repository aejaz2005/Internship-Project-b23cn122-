import React from "react";
import "./HomeHead.css";

function HomeHead() {
    return (
        <div className="header-container">
            <img src="./armylogo.png" className="armylogo" />
            <div className="headbg">
                <h1 className="header">INDIAN FRONTLINE ASSISTANCE</h1>
            </div>
            <img src="./defence.png" className="defencelogo" />
        </div>
    );
}

export default HomeHead;
