import React, { useState } from "react";
import './HomeHead.css';

function Medicalhelp() {
    const [mname, setName] = useState("");
    const [mage, setAge] = useState("");
    const [mgender, setGender] = useState("");
    const [mdoc, setDoc] = useState('');
    const [mfile, setFile] = useState("");
    const [mid, setId] = useState("");
    const [mdisease, setDisease] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            id: mid,
            name: mname,
            age: mage,
            gender: mgender,
            doc: mdoc,
            files: mfile?.name || "",
            disease: mdisease
        };

        const response = await fetch("http://localhost:4003/medicalhelp", {
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
                <h2 className="medicalhelp-title">Medical Help Form</h2>

                <div className="medicalhelp-field">
                    <label className="medicalhelp-label">ARMY NUMBER</label>
                    <input type="number" required className="medicalhelp-input" onChange={(e) => setId(e.target.value)} />
                </div>
                   <div className="medicalhelp-field">
                    <label className="medicalhelp-label">Rank</label>
                    <input type="text" required className="medicalhelp-input"  />
                </div>


                <div className="medicalhelp-field">
                    <label className="medicalhelp-label">Name</label>
                    <input type="text" required className="medicalhelp-input" onChange={(e) => setName(e.target.value)} />
                </div>
                
            

                <div className="medicalhelp-field">
                    <label className="medicalhelp-label">Age</label>
                    <input type="number" min="0" required className="medicalhelp-input" onChange={(e) => setAge(e.target.value)} />
                </div>

                <div className="medicalhelp-field">
                    <label className="medicalhelp-label">Gender</label>
                    <select required className="medicalhelp-input" onChange={(e) => setGender(e.target.value)}>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="medicalhelp-field">
                    <label className="medicalhelp-label">Diagnosis</label>
                    <input type="text" required className="medicalhelp-input" onChange={(e) => setDisease(e.target.value)} />
                </div>

                <div className="medicalhelp-field">
                    <label className="medicalhelp-label">Doctors Consulted</label>
                    <input type="text" required className="medicalhelp-input" onChange={(e) => setDoc(e.target.value)} />
                </div>

                <div className="medicalhelp-field">
                    <label className="medicalhelp-label">Upload Hospital Documents</label>
                    <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        className="medicalhelp-file"
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>

                <button type="submit"style={{color:'white'}} className="medicalhelp-submit">Submit</button>
            </form>
        </div>
    );
}

export default Medicalhelp;
