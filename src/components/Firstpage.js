import React from 'react';
import Logoofgomycode from './Logogomycode.png'
import './Firstpage.css'
import Button from 'react-bootstrap/Button';


function Logogomycode(){
    return(
    <div className='Firstpage'>
        <div className="col-6 Logopart">
            <div className='logogmc'>
                <img src={Logoofgomycode} alt='logogomycode' width="466px" height="137px" />
            </div>
        </div>
        <div className='col-6 SingInpart1'>
            <div style={{marginBottom:"120px" }}>
                <h1 style={{ color:"white" , fontFamily:"Georgia, serif;" , fontSize:"80px"}}>
                    TeachMe...
                </h1>
            </div>
        <form>
            <div className='Loginbutton' style={{marginTop:"80px"}}>
            <div>
            <label>
                <input type="text" placeholder='Type your Username'/>
            </label>
            </div>
            <br/>
            <div>
            <label>
                <input type="password" placeholder='Type your password'/>
            </label>
            </div>
            <br/>
            <div >
                <button type="submit">Submit</button>
            </div>
            {/* <Button variant="light" style={{borderColor:"black", borderRadius:"15px" , width:"100px" , color:"black"}}>   submit   </Button>{' '} */}
            </div>
        </form>
        </div>
    </div>
    )
}
export default Logogomycode;