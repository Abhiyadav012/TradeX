import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid" id='supportHero'>
            <div className="p-5 mt-5 mb-5" id='supportWrapper'>
                <h4>Support Portal</h4>
                <a href="">Track Tickets</a>
            </div>

            <div className="row p-5 m-5  ">
                <div className="col-6 p-3">
                    <h1 className='fs-3'>Search for an answer or browse  help topics to creats a ticket</h1>
                    <input type="text" placeholder='Eg:how do i activate F&O, why is my order is getting rejected' />
                    <br />
                    <a href="">Track account opening</a> 
                    <a href="">Track segment activation</a>
                    <a href="">Intraday margins</a>
                    <a href="">Kite user manual</a>
                </div>
                <div className="col-6 p-3 ">
                    <h1>Featured</h1>
                    <ol>
                        <li><a href="">Current Takeovers and Delisting - january 2024</a></li>
                        <li><a href="">Latest Intraday leverage - MIS & CO</a></li>
                    </ol>                  
                    
                </div>
                
            </div>
        </section>
     );
}

export default Hero;