import React from "react";
import { useState } from "react";
import "../TourDetails/TourDetails.css";
export default function Details({ tour }) {
  const [seeMore, SetSeeMore] = useState(false);

  const toggleDescription = () => {
    SetSeeMore(!seeMore);
  };
  return (
    <p>
      {seeMore ? (
        <p>
          {tour.info}
          <br />
          <br />
          <button onClick={toggleDescription}>See Less</button>
        </p>
      ) : (
        <p>
          {tour.info.slice(0, 250)}
          <br />
          <br />
          <button onClick={toggleDescription}>See more</button>
        </p>
      )}

      <p>Price : {tour.price} $</p>
    </p>
  );
}
