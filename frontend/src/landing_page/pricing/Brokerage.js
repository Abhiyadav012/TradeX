import React from 'react';

function Brokerage() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 text-center border-top">
                <div className="col p-8">
                   <a href="" style={{textDecoration:"none"}}><h3 className='fs-5'>Brokrage Calculator</h3> </a>
                   <ul className='text-muted' style={{textAlign:"left", lineHeight:"2.5rem", fontSize:"16px"}}>
                    <li>Call & Trade and RMS auto squareoff</li>
                    <li>Additional charges of ₹50 +</li>
                    <li>GST per order. Digital contract notes will be sent via e-mail.</li>
                    <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Couriercharges apply.</li>
                    <li>For NRI account (non-PIS), 0.5% or ₹100 per excuted order for equity(whichever is lower).</li>
                    <li>For NRI account (PIS), 0.5% or ₹200 per excuted order for equity(whichever is lower).</li>
                    <li>If account is in debt balance, any order placed will be charged ₹40 per excuted order instead of ₹20 per excuted order.</li>
                   </ul>
                </div>
                <div className="col p-4">
                   <a href="" style={{textDecoration:"none"}}> <h3 className='fs-5'>List of charges</h3></a>
                </div>
            </div>
        </div>
     );
}

export default Brokerage;