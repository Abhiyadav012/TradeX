import React from 'react';

function CreateTicket() {
    return (  
        <div className="container">
            <div className="row p-5 mt-5">
                <h1 className='fs-2'>To create a ticket, select a relevent topic</h1>
            </div>
            <div className="row">
            <div className="col-4 p-5 mb-5">
                <h4 className='mb-5'><i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h4>
                <a href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Online Account Opening</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Offline Account Opening</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Company, Partnership, and HUF Account Opening</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>NRI Account Opening</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Charges at Zerodha</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Zerodha IDFC FRIST Bank 3-in-1 Accont</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Getting Started</a><br />
            </div>            <div className="col-4 p-5  mb-5">
                <h4 className='mb-5'><i class="fa fa-user" aria-hidden="true"></i> Account Opening</h4>
                <a href="" style={{textDecoration:"none", lineHeight:'2.1' , fontSize:"1.3rem"}}>Login Credentials</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:'2.1' , fontSize:"1.3rem"}}>Account Modification and SEgments Addition</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:'2.1' , fontSize:"1.3rem"}}>DP ID and bank details</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:'2.1' , fontSize:"1.3rem"}}>Your Profile</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:'2.1' , fontSize:"1.3rem"}}>Transfer and conversion of shares</a><br />
            </div>
            <div className="col-4 p-5 mb-5">
                <h4 className='mb-5'><i class="fa fa-bar-chart" aria-hidden="true"></i> Your Zerodha Account</h4>
                <a className='fs-5' href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Margin/leverage, Product and Order types</a><br />
                <a className='fs-5' href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>kite Web and Mobile</a><br />
                <a className='fs-5' href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Trading FAQs</a><br />
                <a className='fs-5' href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Corporate Actions</a><br />
                <a className='fs-5' href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Sentinel</a><br />
                <a className='fs-5' href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Kite API</a><br />
                <a className='fs-5' href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>PI and Other platforms</a><br />
                <a className='fs-5' href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Stockreports+</a><br />
                <a className='fs-5' href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>GTT</a><br />
            </div>
            </div>

             <div className="row">
            <div className="col-4 p-5 mb-5">
                <h4 className='mb-5'><i class="fa fa-print" aria-hidden="true"></i> Funds</h4>
                <a href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Adding Funds</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Fund Withdrawal</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>eMandetes</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Adding Bank Accounts</a><br />
            </div>            <div className="col-4 p-5  mb-5">
                <h4 className='mb-5'><i class="fa fa-circle-o-notch" aria-hidden="true"></i> Console</h4>
                <a href="" style={{textDecoration:"none", lineHeight:'2.1' , fontSize:"1.3rem"}}>Reports</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:'2.1' , fontSize:"1.3rem"}}>Ledger</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:'2.1' , fontSize:"1.3rem"}}>60 Day Challenge</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:'2.1' , fontSize:"1.3rem"}}>IPO</a><br />
                <a href="" style={{textDecoration:"none", lineHeight:'2.1' , fontSize:"1.3rem"}}>Refral Programs</a><br />
            </div>
            <div className="col-4 p-5 mb-5">
                <h4 className='mb-5'><i class="fa fa-circle-thin" aria-hidden="true"></i> Coin</h4>
                <a className='fs-5' href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Understanding Mutual fund</a><br />
                <a className='fs-5' href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>About</a><br />
                <a className='fs-5' href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Bying and selling The</a><br />
                <a className='fs-5' href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Starting an SIP</a><br />
                <a className='fs-5' href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Managing your Portfolio</a><br />
                <a className='fs-5' href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Coin App</a><br />
                <a className='fs-5' href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Moving to coin</a><br />
                <a className='fs-5' href="" style={{textDecoration:"none", lineHeight:'2.1', fontSize:"1.3rem"}}>Government Securities</a><br />
            </div>
            </div>
        </div>
    );
}

export default CreateTicket;