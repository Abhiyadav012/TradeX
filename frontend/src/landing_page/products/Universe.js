import React from 'react';

function Universe() {
    return ( 
        <div className="container">
            <div className="row text-center">
                <h1>The Zerodha Universe</h1>
                <p className='fs-5'>Extend your trading and investment experience even further with our partner platforms</p>
            
                <div className="col-4 mt-5 p-3">
                    <img src="media/images/smallcaseLogo.png"/>
                    <p className='text-small text-muted'>Thematic investing platform </p>
                </div>
                 <div className="col-4 mt-5 p-3">
                    <img style={{width:"30%"}} src="media/images/streakLogo.png" />
                    <p className='text-small text-muted'>Algo and strategy platform </p>
                </div>
                 <div className="col-4 mt-5 p-3">
                    <img style={{width:"50%"}} src="media/images/sensibullLogo.svg"/>
                    <p className='text-small text-muted'>Option trading platform </p>
                </div>
                <div className="col-4 mt-5 p-3">
                    <img style={{width:"50%"}} src="media/images/zerodhaFundhouse.png"/>
                    <p className='text-small text-muted'>Asset Managment </p>
                </div>
                 <div className="col-4 mt-5 p-3">
                    <img src="media/images/goldenpiLogo.png"/>
                    <p className='text-small text-muted'>Bond trading platform</p>
                </div>
                 <div className="col-4 mt-5 p-3">
                    <img style={{width:"40%"}} src="media/images/dittoLogo.png"/>
                    <p className='text-small text-muted'>Insurance </p>
                </div>
                <button className='p-3 mt-5 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Signup Now</button>
            </div>
        </div>
     );
}

export default Universe;