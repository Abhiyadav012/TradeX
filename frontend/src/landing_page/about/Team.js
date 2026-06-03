import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row mt-5">
        <h1 style={{marginLeft:"5rem"}} className=" mt-5 text-center">People</h1>
      </div>

      <div
        className="row p-5 text-muted"
        style={{ fontSize: "1.3em", lineHeight: "1.8" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            style={{ borderRadius: "100%", width: "70%" }}
            src="media/images/nithinKamath.jpg"
            alt=""
          />
          <h4 className="mt-5">Nitin Kamath</h4>
          <h6>Founder,CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>
            Playing basketball is his zen.
          </p>
          <p>
            Connect on 
            <a style={{textDecoration:"none"}} href="">Homepage</a> /
            <a style={{textDecoration:"none"}} href="">TradingQnA</a> / 
            <a style={{textDecoration:"none"}} href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
