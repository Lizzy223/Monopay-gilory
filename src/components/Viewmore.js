import React from 'react'
import {Link} from 'react-router-dom'

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
                <div className='row bg-light'>
                    <div className='col-md-6 float-left'>
                        <Link to='main' className='text-primary'>Back</Link>
                    </div>
                    <div className='col-md-6 float-right'>

                    </div>
                    <div classNam='col-md-12 w-100'>
                    <table className='mt-5 table-responsive'>
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
