import React from 'react'
import Main from '../Main'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Viewmore from '../Viewmore'


const Index = () => {
    return (
        <div>
            <Sidebar/>
            <div class='main-content'>
                <Navbar/>
                {/* <Main/> */}
                <Viewmore/>
            </div>
        </div>
    )
}

export default Index
