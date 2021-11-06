import React from "react";
import City from "./City";

function Cities(props) {
  const cities = props.cities.map((city, index) => {
    return (
      <div className="col s3">
        <City city={city} key={index} />
      </div>
    );
  });
  return cities;
}

export default Cities;
