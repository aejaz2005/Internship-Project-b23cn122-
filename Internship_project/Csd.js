import React from 'react';
function Csd(){
    return (
        <div>
            <div className="csdheader-container">
                <img src="./csd.jpg" className="csdarmylogo" />
                <div className="csdheadbg">
                    <h1 className="csdheader">CANTEEN STORES DEPARTMENT</h1>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "rgb(23, 44, 66)" }}>
                
                <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginBottom: "40px" }}>
                    <div>
                        <img src="./elec.jpg" alt="Electrical" height="150px" width="200px" />
                        <h3 style={{ color: "white", textAlign: "center" }}><a href="https://csdindia.gov.in/cat.aspx?Id=318&catid=2" target="_blank" style={{color:"white" ,textDecoration:"none"}}>Electrical Appliances</a></h3>
                    </div>
                    <div>
                        <img src="./food.jpg" height="150px" width="200px" />
                        <h3 style={{ color: "white", textAlign: "center" }}><a href ="https://csdindia.gov.in/cat.aspx?Id=2651" target='_blank' style={{color:"white" ,textDecoration:"none"}}>Groceries</a></h3>
                    </div>
                    <div>
                        <img src="./carsnbikes.jpg" height="150px" width="200px" />
                        <h3 style={{ color: "white", textAlign: "center" }}><a href="https://foujiadda.in/CSD/Bike-prices" target='_blank' style={{color:"white" ,textDecoration:"none"}}>Cars and bikes</a></h3>
                    </div>
                </div>
                
                <div style={{ height: "40px" }}></div>
                
                <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginBottom: "20px" }}>
                    <div>
                        <img src="./toiletries.jpg" height="150px" width="200px" />
                        <h3 style={{ color: "white", textAlign: "center" }}><a href="https://csdindia.gov.in/cat.aspx?Id=1" target='_blank' style={{color:"white",textDecoration:"none"}}>Toiletries</a></h3>
                    </div>
                    <div>
                        <img src="./household.png" height="150px" width="200px" />
                        <h3 style={{ color: "white", textAlign: "center" }}><a href="https://csdindia.gov.in/cat.aspx?Id=2" target='_blank' style={{color:"white" ,textDecoration:"none"}}>Home Appliances</a></h3>
                    </div>
                    <div>
                        <img src="./footwear.jpg" height="150px" width="200px" />
                        <h3 style={{ color: "white", textAlign: "center" }}> <a href="https://csdindia.gov.in/cat.aspx?Id=1839&catid=3" target='_blank' style={{color:"white" ,textDecoration:"none"}}>Footwear </a></h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Csd;