import React from 'react'
import logo from '../asset/monologo.svg'
//import { NavLink } from 'react-router-dom'


const Sidebar = () => {
    return (
        <>
            <input type="checkbox" name="" id="nav-toggle"/>
            <div class="sidebar">
                <div class="sidebar-brand">
                    <h2>
                        <span class="las la-igloo"></span>
                        <span className=''style={{color:'#0F4264'}}>Mono</span>
                    </h2>
                </div>
                <div class="sidebar-menu">
                    <ul>
                        <li>
                            <a href="/" ><img src={logo} alt='/'/>
                            <span>Monopay</span></a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
