import React from "react";

function NotFound() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        />
        <h1 className="mt-5">404 Not found</h1>
        <p>
          Sorry the Page you are looking for ddoes not exist!!
        </p>
      </div>
    </div>
  );
}

export default NotFound;