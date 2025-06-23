import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Sindoor from './Operationsbreif/Sindoor';
import "./HomeHead.css";

function Operations(){

return (
    <div className="operation" style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh" }}>
        <div className='operationul' style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h4 style={{ margin: "12px 0" }}>
                <Link to='/Sindoor' style={{ color: "white", textDecoration: "none" }}>
                    🔹 Operation Sindoor (May 7–ongoing)
                </Link>
            </h4>
            <h4 style={{ margin: "12px 0" }}>
                <Link to='/GarudaStrike' style={{ color: "white", textDecoration: "none" }}>
                    🔹 Operation GarudaStrike (May 13–14, 2025)
                </Link>
            </h4>
            <h4 style={{ margin: "12px 0" }}>
                <Link to='/Trinetra' style={{ color: "white", textDecoration: "none" }}>
                    🔹 Operation Trinetra (April 21–May 11, 2025)
                </Link>
            </h4>
            <h4 style={{ margin: "12px 0" }}>
                <Link to='/Varuna' style={{ color: "white", textDecoration: "none" }}>
                    🔹 Testing of Varuna UAV (June 12–13, 2025)
                </Link>
            </h4>
        </div>
    </div>
)
}

export default Operations;