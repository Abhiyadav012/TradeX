import React from "react";

function LeftSection({
  imgURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
        <div className="row mt-5 p-5">
            <div className="col-6 p-5">
                <img src={imgURL} />
            </div>
            <div className="col-2"></div>
            <div className="col-4 mt-5 p-5">
                <h1 className="text-muted">{productName}</h1>
                <p className="fs-5">{productDescription}</p>
                <div >
                   <a href={tryDemo}>Try Demo</a>
                   <a style={{marginLeft:"50px"}} href={learnMore}>Learn More</a>
                </div>
                <div className="mt-3">
                  <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a>
                  <a style={{marginLeft:"50px"}} href={appStore}><img src="media/images/appstoreBadge.svg"/></a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default LeftSection;
