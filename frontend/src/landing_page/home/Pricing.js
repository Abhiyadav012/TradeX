import React from 'react';

function Pricing() {
    return ( 
        <div className="container mb-5">
            <div className="row">
                <div className="col-4">
                    <h1 className='mb-3'>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href=""  style={{textDecoration:"none"}}>See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col">
                            <div className="row"></div>
                            <h1 style={{fontSize:"4rem",color:"#ff9933"}}><sup>₹</sup>0</h1>
                            <p> Free account opening</p>
                        </div>
                        <div className="col">
                            <h1 style={{fontSize:"4rem",color:"#ff9933"}}><sup>₹</sup>0</h1>
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                        <div className="col mb-5">
                            <h1 style={{fontSize:"4rem",color:"#ff9933"}}><sup>₹</sup>20</h1>
                            <p> Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;