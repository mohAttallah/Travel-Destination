
import Tour from "./tour/Tour.jsx";
import { Link } from "react-router-dom";
import TourDetails from "../TourDetails/TourDetails.jsx";
import { useState } from "react";

export default function Tours({ data }) {
  const [showDetails, setShowDetails] = useState({});

  const handleClick = (id) => {
    setShowDetails((prevState) => ({ ...prevState, [id]: true }));
  };

  return (
    <>
      {data.map((tour) => {
        return (
          <div key={tour.id}>
            <Link
              onClick={() => handleClick(tour.id)}
              to={`/${tour.name}/${tour.id}`}
            >
              <Tour tour={tour} />
            </Link>
            {showDetails[tour.id] && <TourDetails tour={tour} />}
          </div>
        );
      })}
    </>
  );
}

