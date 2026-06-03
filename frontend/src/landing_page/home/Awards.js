  import React from 'react';
  
  function Awards () {
    return ( 
        <div className='container mt-5'>
           <div className="row">
            <div className="col-6 p-5">
              <img src="media/images/largestBroker.svg" alt=""style={{width:"80%"}} />
            </div>
            <div className="col-6 p-5 mt-3">
              <h1>Largest stock broker in India</h1>
              <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order voloumns in India daily by trading and investing in: </p>
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li><p>Features and Options</p></li>
                    <li><p>Commodity derivatives</p></li>
                    <li><p>Currency Derivative</p></li>
                   </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li><p>Stocks and IPOs</p></li>
                    <li><p>Direct mutual fund</p></li>
                    <li><p>Bond and Govt.services</p></li>
                   </ul>
                </div>
              </div>
              <img src="media/images/pressLogos.png" alt=""  style={{width:"100%"}}/>
            </div>
           </div>
        </div>
     );
  }
  
  export default Awards ;