import React, { useState, useEffect } from "react";
import "../Home/Home.css";
import Spinner from "../../utility/Spinner/Spinner";
import axios from "axios";
import Cities from "../../utility/City/Cities";
import Activities from "../../utility/Activity/Activities";
import Venues from "../../utility/Venue/Venues";

function Search(props) {
  const [activities, setActivities] = useState([]);
  const [cities, setCities] = useState([]);
  const [venues, setVenues] = useState([]);
  const [apiResponse, setResponse] = useState(false);

  useEffect(() => {
    const fetchsearchData = async () => {
      const searchTerm = props.match.params.searchTerm;
      const url = `${window.apiHost}/search/${searchTerm}`;
      const response = await axios.get(url);
      setActivities(response.data.activities);
      setCities(response.data.cities);
      setVenues(response.data.venues);
      setResponse(true);
    };
    fetchsearchData();
  }, []);

  if (!apiResponse) {
    return <Spinner />;
  }
  return (
    <div className="container-fluid lower-fold">
      <div className="row">
        <div className="col s12">
          <div className="col s12">
            <Cities cities={cities} header="Cities matching your search" />
          </div>
          <div className="col s12">
            <Activities
              activities={activities}
              header="Venues matching your choice"
            />
          </div>
          <div className="col s12">
            <Venues venues={venues} header="Activities matching your choice" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
