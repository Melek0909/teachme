import React from 'react';
import Logoofgomycode from '../images/Logogomycode.png'
import '../css/Firstpage.css'
import Button from 'react-bootstrap/Button';


function Login(){
    return(
    <div className='Firstpage'>
        <div className="col-6 Logopart">
            <div className='logogmc'>
                <img src={Logoofgomycode} alt='logogomycode' width="466px" height="137px" />
            </div>
        </div>
        <div className='col-6 SingInpart1'>
            <div>
                <h1 style={{ color:"white" , fontFamily:"Georgia, serif;" , fontSize:"80px" , paddingTop:"25%"}}>
                    TeachMe...
                </h1>
            </div>
        <form>
            <div className='Loginbutton' style={{marginTop:"10%"}}>
            <div>
            <label>
                <input type="text" placeholder='Type your Username' style={{color:"black" , boxChadow:"0px"}}/>
            </label>
            </div>
            <br/>
            <div>
            <label>
                <input type="password" placeholder='Type your password'/>
            </label>
            </div>
            <br/>
            <Button variant="danger" style={{ backgroundColor:"white" , color:"black", width:"80px" , boxChadow:"1px"}}>Login</Button>
            {/* <div >
                <button type="submit">Submit</button>
            </div> */}
            {/* <Button variant="light" style={{borderColor:"black", borderRadius:"15px" , width:"100px" , color:"black"}}>   submit   </Button>{' '} */}
            </div>
        </form>
        </div>
    </div>
    )
}
export default Login;