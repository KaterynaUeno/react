import React, { Component } from "react";
import "../Home/Home.css";
import Spinner from "../../utility/Spinner/Spinner";
import axios from "axios";
import Cities from "../../utility/City/Cities";
import Activities from "../../utility/Activity/Activities";
import Venues from "../../utility/Venue/Venues";

class Search extends Component {
  state = {
    activities: [],
    cities: [],
    venues: [],
  };
  async componentDidMount() {
    const searchTerm = this.props.match.params.searchTerm;
    const url = `${window.apiHost}/search/${searchTerm}`;
    const response = await axios.get(url);
    // console.log(response.data);
    this.setState({
      activities: response.data.activities,
      cities: response.data.cities,
      venues: response.data.venues,
    });
  }
  render() {
    return (
      <div className="container-fluid lower-fold">
        <div className="row">
          <div className="col s12">
            <div className="col s12">
              <Cities
                cities={this.state.cities}
                header="Cities matching your search"
              />
            </div>
            <div className="col s12">
              <Activities
                activities={this.state.activities}
                header="Venues matching your choice"
              />
            </div>
            <div className="col s12">
              <Venues
                venues={this.state.venues}
                header="Activities matching your choice"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
