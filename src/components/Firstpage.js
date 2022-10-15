import React from 'react';
import Logoofgomycode from './Logogomycode.png'
import './Firstpage.css'


function Logogomycode(){
    return(
    <div className='Firstpage'>
        <div className="col-6 Logopart">
            <div className='logogmc'>
                <img src={Logoofgomycode} alt='logogomycode' width="466px" height="137px" />
            </div>
        </div>
        <div className='col-6 SingInpart1'>
        <form>
            <div>
            <label>
                <p>Username</p>
                <input type="text" />
            </label>
            </div>
            <div>
            <label>
                <p>Password</p>
                <input type="password" />
            </label>
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        </div>
    </div>
    )
}
export default Logogomycode;