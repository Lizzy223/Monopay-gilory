import React from 'react'
import profile from '../asset/profile.svg'
import img from '../asset/Vector 42.svg'


const Navbar = () => {
    return (
        <header className=''>
                <div className='d-block'>
                {/* <label for="nav-toggle">
                    <span class="las la-bars" ></span>
                </label> */}
                <p className='h1 font-bold' 
                style={{
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: '900',
                    fontSize: '43.3726px',
                    lineHeight: '52px',
                    color: '#404040'
                }}
                >Monopay</p>
                <span style={{color:'#aeaeae'}}>Get your applicants loan credibility here.</span>
            </div>
            
           
            {/* <div className="user-wrapper">
                <img src="" alt="" width="30px" height="30px"/>
                <div>
                    <h4>John Doe</h4>
                    <small>Super admin</small>
                </div>
            </div> */}
            <div className='shadow rounded-pill d-flex align-items-center w-25'>
                <div className='col-2'>
                    <img src={profile} alt=''/>
                </div>
                <div className='col-8'>
                    <span className='font-bold'>Andrew</span>
                    <p style={{color:'#aeaeae'}}>Admin account</p>
                </div>
                <div className='col-1'>
                    <img src={img} alt=''/>
                </div>
            </div>
        </header>
    )
}

export default Navbar
