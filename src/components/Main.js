import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Data from './Data';
import './Main.css'
//import MonoConnect from '@mono.co/connect.js'

// export default function App(){
//     const monoConnect
// }

const Main = () => {
    return (
        <main>
            <div className='container-fluid bg-light mt-5'>
                <div className='row'>
                    <div className='col-md-12'>
                    <Tabs>
                        <TabList className='float'>
                            <Tab>All</Tab>
                            <Tab>Pending</Tab>
                            <Tab>Approved</Tab>
                            <Tab>Denied</Tab>
                        </TabList>

                        <TabPanel>
                            <Data/>
                        </TabPanel>
                        <TabPanel>
                            <Data/>
                        </TabPanel>
                        <TabPanel>
                            <Data/>
                        </TabPanel>
                        <TabPanel>
                            <Data/>
                        </TabPanel>
                    </Tabs>                        
                    </div>
                </div> 
            </div>     
        </main>
    )
}

export default Main
