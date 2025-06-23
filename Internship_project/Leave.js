import React, { useState } from "react";
import './HomeHead.css';

function Leave() {
    const [mname, setName] = useState("");
    const[fdate,setFdate]=useState("");
    const[tdate,setTdate]=useState("");
    const[lreason,setReason]=useState("");
   
  
    const [mid, setId] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = { id: mid, name: mname, fromdate: fdate, todate: tdate,reason:lreason };

        const response = await fetch("http://localhost:4004/leave", {
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
                <h2 className="medicalhelp-title">Leave Application Form</h2>

                <div className="medicalhelp-field">
                    <label className="medicalhelp-label">SOLDIER ID</label>
                    <input type="number" required className="medicalhelp-input" onChange={(e) => setId(e.target.value)} />
                </div>

                <div className="medicalhelp-field">
                    <label className="medicalhelp-label">Name</label>
                    <input type="text" required className="medicalhelp-input" onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <h3 style={{color:' rgb(23, 44, 66)'}}>Duration of Leave</h3>
                </div>
                    <div className="medicalhelp-field">
                    <label className="medicalhelp-label">Frome date</label>
                    <input type="date" required className="medicalhelp-input" onChange={(e) => setFdate(e.target.value)} />
                </div>
                          <div className="medicalhelp-field">
                    <label className="medicalhelp-label">to date</label>
                    <input type="date" required className="medicalhelp-input" onChange={(e) => setTdate(e.target.value)} />
                </div>
                         <div className="medicalhelp-field">
                    <label className="medicalhelp-label">Reason for leave</label>
                    <textarea required className="medicalhelp-input" onChange={(e) => setReason(e.target.value)} />
                </div>


             

             

               

                
                

                <button type="submit" style={{color:'white'}} className="medicalhelp-submit">Submit</button>
            </form>
        </div>
    );
}

export default Leave;