import React from 'react';

function RightSection({
  imgURL,
  productName,
  productDescription,
  learnMore}) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-4 mt-5 p-5 ">
                    <h1 className="text-muted mt-3">{productName}</h1>
                    <p className="fs-5">{productDescription}</p>
                    <div>
                        <a  href={learnMore}>Learn More</a>
                    </div>
                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <img src={imgURL}/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;