import {useEffect, useState} from 'react';
import './HomeHead.css';
function Eliminations(){
    const [data,setData]=useState([]);

        useEffect(()=>{
            fetch("http://localhost:4001/eliminations")
            .then(res=>res.json())
            .then(data=>setData(data))
            .catch(err=>console.error("Error",err));
        }, [])
    

    return (
        <div>
            <h1 style={{color:'rgb(246, 247, 247)', textAlign:"center", marginBottom: 0,backgroundColor:"rgb(10, 44, 76)",padding:"10px"}}>Eliminations Report</h1>
            <table className='terror-table' style={{marginTop: 0}}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Location</th>
                        <th>Eliminated</th>
                        <th>Operation</th>
                        <th>Officer</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody>
  {data.map((row, index) => (
    <tr key={index}  style={{color:"white"}}>
      <td>{row.Date}</td>
      <td>{row.Location}</td>
      <td>{row.Eliminated}</td>
      <td>{row.Operation}</td>
      <td>{row.Officer}</td>
      <td>{row.Remarks}</td>
    </tr>
  ))}
</tbody>

              
            </table>
        </div>
    )
}
export default Eliminations;