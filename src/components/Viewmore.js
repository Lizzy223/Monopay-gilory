import React from 'react'
//import {Link} from 'react-router-dom'

const Details = [
    {
        id:1, Transactionid: 'AJDHHhvhfhdhchdhsdjhs8y7', Narration:'Tesco Market',Type:"Credit", date: '15-09-12',Category:'Card', Amount: '+13,000.00', Balance:'47,567.00'
    },
    {
        id:1, Transactionid: 'AJDHHhvhfhdhchdhsdjhs8y7', Narration:'Tesco Market',Type:"Credit", date: '15-09-12',Category:'Card', Amount: '+13,000.00', Balance:'47,567.00'
    },
    {
        id:1, Transactionid: 'AJDHHhvhfhdhchdhsdjhs8y7', Narration:'Tesco Market',Type:"Credit", date: '15-09-12',Category:'Card', Amount: '+13,000.00', Balance:'47,567.00'
    },
    {
        id:1, Transactionid: 'AJDHHhvhfhdhchdhsdjhs8y7', Narration:'Tesco Market',Type:"Credit", date: '15-09-12',Category:'Card', Amount: '+13,000.00', Balance:'47,567.00'
    },
    {
        id:1, Transactionid: 'AJDHHhvhfhdhchdhsdjhs8y7', Narration:'Tesco Market',Type:"Credit", date: '15-09-12',Category:'Card', Amount: '+13,000.00', Balance:'47,567.00'
    }
]
 const Transaction =(props) => {
    const { Transactionid, Narration, Type, date, Category, Amount, Balance } = props;
    return(
        <tbody>
            <td>{Transactionid}</td>
            <td>{Narration}</td>
            <td>{Type}</td>
            <td>{date}</td>
            <td>{Category}</td>
            <td>{Amount}</td>
            <td>{Balance}</td>
        </tbody>
    )
 }

const Viewmore = () => {
    return (
        <main className='mt-5'>
            <div className='container-fluid'>
                <div className='row bg-light' >
                    <div className='col-12 mt-3'>
                                
                        <div className='col-md-2 float-right d-flex mt-3' style={{width:'100vw !important'}}>
                            <button className='btn btn-danger rounded-pill mr-4'>Deny</button>
                            <button className='btn btn-success rounded-pill'>Approve</button>
                        </div>
                        <div className='col-8 d-flex justify-content-between float-left'>
                            <div className='font-bold mt-5 text-primary'> back</div>
                            <div className='font-bold mt-5'>ADGGfbfhfhdye1265-15,000</div>
                            <div className='font-bold mt-5'>Key Performance Index</div>
                        </div>
                    </div>
                    <div className='col-12 mt-3 d-flex justify-content-between'>
                        <div className='col-md-4 rounded shadow p-4 d-flex '>
                            <div className='col-7'>
                                <h2 className=''>Essien, Utibeabasi D.</h2>
                                <small className='text-grey mt-1'>Name</small>
                                <h2 className='mt-2'>06856365904</h2>
                                <small className='text-grey mt-1'>Account no</small>
                            </div>
                            <div className='col-5 border-left'>
                                <h2> 47,850.00</h2>
                                <small className='text-grey mt-1'>Current balance</small>
                                <p>42,456</p>
                                <small className='text-grey mt-1'>Avg income</small>
                                <p>32,456</p>
                                <small className='text-grey mt-1'>Avg Outcome</small>
                            </div>
                        </div>
                        <div className='col-md-2 rounded shadow p-2'>
                            <h4 className='text-success'>Good</h4>
                            <p className='text-secondary'>I Believe this 
                                user will repay
                                this loan
                                Effortlessly</p>
                            <h4>Monopay
                                Bot</h4>
                        </div>
                        <div className='col-md-2 rounded shadow p-2'>
                            <h4 className='text-primary'>0.6</h4>
                            <p className='text-secondary'>Average 
Performance</p>
                            <h4>Netearn 
Income</h4>
                        </div>
                        <div className='col-md-2 rounded shadow p-2'>
                            <h4 className='text-success'>3.2</h4>
                            <p className='text-secondary'>Average 
Performance</p>
                            <h4>Netearn 
Index</h4>
                        </div>
                    </div>
                    <div classNam='row mt-5' style={{width:'100vw !important'}}>
                    <div className='float-left mt-3'><p className='h4 font-bold'>Transactions History</p></div>
                    <div className='float-right mt-3'><p className='text-primary font-bold'>Expand Report</p></div>
                    <table className='col-md-12 w-100 mt-5 table-responsive'>
                        <thead>
                            <td>Transaction ID</td>
                            <td>Narration</td>
                            <td>Type</td>
                            <td>Date</td>
                            <td>Category</td>
                            <td>Amount (naira)</td>
                            <td>Balance (naira)</td>
                        </thead>
                        <tbody>
                            <td>AJDHHhvhfhdhchdhsdjhs8y8</td>
                            <td>Tesco Market</td>
                            <td>Credit</td>
                            <td>13 Dec 2020</td>
                            <td>Card</td>
                            <td>+13,000.00</td>
                            <td>47,567.00</td>
                        </tbody>
                        {Details.map((Detail) =>
                                    <Transaction key={Detail.id} Transactionid={Detail.Transactionid} Narration={Detail.Narration} Type={Detail.Type}
                                    date={Detail.date} Category={Detail.Category} Amount={Detail.Amount} Balance={Detail.Balance} />
                                    )}
                    </table>
                    </div>
                </div>
            </div>               
        </main>
    )
}

export default Viewmore
