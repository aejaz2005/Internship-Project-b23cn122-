import React from 'react';
import './HomeHead.css';


import { Link, Route, Routes, BrowserRouter } from "react-router-dom";

import Csd from './Csd';
import Login from './Login';
import Eliminations from './Eliminations';
import Press from './Press';
import AfterLogin from './AfterLogin';
import Operations from './Operations';
import Sindoor from './Operationsbreif/Sindoor';
import GarudaStrike from './Operationsbreif/GarudaStrike';
import Trinetra from './Operationsbreif/Trinetra';
import Varuna from './Operationsbreif/Varuna';
import Dharma from './Operationsbreif/Dharma';
import Medicalhelp from './Medicalhelp';
import Leave from './Leave';


import JobSearch from './JobSearch';
import Medals from './Medals';
import Martyrs from './Martyrs';

import Retirement from './Retirement';



function HomeBody2(){
 
    return(
       <BrowserRouter>
             <div className="menuP" style={{ textAlign: "center" }}>
               
      
         

       
               <div className="menuP-item">
                <a href="http://localhost:3000/" style={{color:'white',textDecoration:"none"}}>Home</a> 
               </div>
                            <div className="menuP-item" style={{color:'white',textDecoration:"none"}}><Link to ="/Login" style={{color:'white',textDecoration:'none'}}>Login</Link>
         
            
       
               
               </div>
               
               <div className="menuP-item">News
                 <div className="submenuP" style={{color:'white',textDecoration:"none",padding:'1px'}}>
                   <div >
                     <Link to="/Press" style={{color:'white',textDecoration:"none"}}>Press Conference</Link>
                   </div>
                   <div>
                     <Link to="/Operations" style={{color:'white',textDecoration:"none"}}>Operations</Link>
                   </div>
                   
                 </div>
                 </div>
  
               <div className="menuP-item">
               Veterans
                 <div className="submenuP" style={{color:'white' ,textDecoration:"none"}}>
                 
                   <div><Link to="/Medals" style={{color:'white' ,textDecoration:"none"}}>Medals</Link></div>
                   <div><Link to="/Martyrs" style={{color:'white' ,textDecoration:"none"}}>Martyrs</Link></div>
       
                 
               </div>
               </div>
                 <div className='MenuP-Item'>
                 <Link to ='/Csd' style={{color:'white' ,textDecoration:"none"}}>CSD</Link> 
              
  
                  
                  
                 </div>
                 <div className="menuP-item">
            
                 
                  
                     <Link to="/Eliminations" style={{color:'white',textDecoration:"none"}}>Eliminations</Link>
                   
                   
                 
               </div>
               <div className="menuP-item" style={{color:'white'}}><a href="https://www.google.com/" style={{color:'white'}}>Close</a></div>
             
             </div>
         
        <Routes>
          <Route path='/Medals' element={<Medals/>} />
          <Route path='/Martyrs' element={<Martyrs/>} />

          
            <Route path='/Csd' element={<Csd/>}/>
            <Route path='/Login' element={<Login/>}></Route>
            <Route path='Eliminations' element={<Eliminations/>}/>
            <Route path='/Press' element={<Press/>}/>
             
             <Route path='/Operations' element={<Operations/>}></Route>
              <Route path='/Sindoor' element={<Sindoor/>}></Route>
                <Route path='/GarudaStrike' element={<GarudaStrike/>}></Route>
                  <Route path='/Trinetra' element={<Trinetra/>}></Route>
                    <Route path='/Varuna' element={<Varuna/>}></Route>
                    <Route path='/Dharma' element={<Dharma/>}></Route>
                    <Route path='/AfterLogin' element={<AfterLogin />}>
  <Route path='Medicalhelp' element={<Medicalhelp />} />
    <Route path='Leave' element={<Leave />} />
        <Route path='JobSearch' element={<JobSearch/>} />
         <Route path='Retirement' element={<Retirement/>} />
    
  
</Route>

                 


        </Routes>
        </BrowserRouter>
       
    )
}

export default HomeBody2;


