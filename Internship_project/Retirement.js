import React, { useState } from "react";
import './HomeHead.css';

function Retirement() {
    const [mname, setName] = useState("");
    const[Jdate,setFdate]=useState("");
    const[Rdate,setTdate]=useState("");
    const[Nature,setReason]=useState("");
   
  const [rank, setRank] = useState("");
    const [unit, setUnit] = useState("");
    const [mid, setId] = useState("");
    const[yearsofservice,setYearofservice]=useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { id: mid, name: mname, joindate: Jdate, Retiredate: Rdate,reason:Nature, rank: rank, unit: unit ,service:yearsofservice};

        const response = await fetch("http://localhost:4006/Retirement", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const msg = await response.text();
        alert(msg);
    };

    return (
        <div className="medicalhelp-container">
            <form onSubmit={handleSubmit} className="medicalhelp-form">
                <h2 className="medicalhelp-title">RETIREMENT Application Form</h2>

                <div className="medicalhelp-field">
                    <label className="medicalhelp-label">ARMY ID</label>
                    <input type="number" required className="medicalhelp-input" onChange={(e) => setId(e.target.value)} />
                </div>

                <div className="medicalhelp-field">
                    <label className="medicalhelp-label">Name</label>
                    <input type="text" required className="medicalhelp-input" onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="medicalhelp-field">
                    <label className="medicalhelp-label">Rank</label>
                    <input type="text" required className="medicalhelp-input" onChange={(e) => setRank(e.target.value)} />
                </div>
                <div className="medicalhelp-field">
                    <label className="medicalhelp-label">Unit</label>
                    <input type="text" required className="medicalhelp-input" onChange={(e) => setUnit(e.target.value)} />
                </div>

                <div className="medicalhelp-field">
                    <label className="medicalhelp-label">Join date</label>
                    <input type="date" required className="medicalhelp-input" onChange={(e) => setFdate(e.target.value)} />
                </div>

                <div className="medicalhelp-field">
                    <label className="medicalhelp-label">Retirement date proposed</label>
                    <input type="date" required className="medicalhelp-input" onChange={(e) => setTdate(e.target.value)} />
                </div>

                <div className="medicalhelp-field">
                    <label className="medicalhelp-label">Nature of Retirement</label>
                    <textarea required className="medicalhelp-input" onChange={(e) => setReason(e.target.value)} />
                </div>

                <div className="medicalhelp-field">
                    <label className="medicalhelp-label">Years of service </label>
                    <textarea required className="medicalhelp-input" onChange={(e) => setYearofservice(e.target.value)} />
                </div>

                <button type="submit" style={{color:'white'}} className="medicalhelp-submit">Submit</button>
            </form>
        </div>
    );
}

export default Retirement;