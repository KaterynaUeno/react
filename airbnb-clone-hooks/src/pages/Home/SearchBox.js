import React, { useState, useEffect } from "react";
import "./SearchBox.css";
import useControllerInput from "../../CustomHooks/useContollerInput";

function SearchBox(props) {
  const where = useControllerInput("");
  const checkIn = useControllerInput("");
  const checkOut = useControllerInput("");
  const guests = useControllerInput(1);
  // const [where, changeWhere] = useState("");
  // const [checkIn, changeCheckIn] = useState("");
  // const [checkOut, changeCheckOut] = useState("");
  // const [guests, changeGuests] = useState(1);

  // changeWhere = (e) => {
  //   e.preventDefault();
  //   // console.log(e.target.value);
  //   // this.setState({ where: e.target.value });
  //   setWhere
  // };
  // changeCheckIn = (e) => {
  //   e.preventDefault();
  //   // console.log(e.target.value);
  //   this.setState({ checkIn: e.target.value });
  // };
  // changeCheckOut = (e) => {
  //   e.preventDefault();
  //   // console.log(e.target.value);
  //   this.setState({ checkOut: e.target.value });
  // };
  // changeGuests = (e) => {
  //   e.preventDefault();
  //   // console.log(e.target.value);
  //   this.setState({ guests: e.target.value });
  // };
  const submitSearch = (e) => {
    e.preventDefault();
    props.history.push(`/search/${where.value}`);
  };
  return (
    <div className="home-search-box col m4">
      <h1>Book unique places to stay and things to do</h1>
      <form onSubmit={submitSearch} className="search-box-form">
        <div className="col m12">
          <div className="form-label">Where</div>
          <div className="input-field" id="where">
            <input
              // onChange={(e) => changeWhere(e.target.value)}
              // value={where}
              {...where}
              placeholder="anywhere"
              type="text"
            ></input>
          </div>
        </div>
        <div className="col m6">
          <div className="form-label">Check-in</div>
          <div className="input-field" id="check-in">
            <input
              // onChange={(e) => changeCheckIn(e.target.value)}
              // value={checkIn}
              {...checkIn}
              type="date"
            ></input>
          </div>
        </div>
        <div className="col m6">
          <div className="form-label">Check-out</div>
          <div className="input-field" id="check-out">
            <input
              // onChange={(e) => changeCheckOut(e.target.value)}
              // value={checkOut}
              {...checkOut}
              type="date"
            ></input>
          </div>
        </div>
        <div className="col m12">
          <div className="form-label">Guests</div>
          <div className="input-field" id="guests">
            <input
              // onChange={(e) => changeGuests(e.target.value)}
              // value={guests}
              {...guests}
              placeholder="guests"
              type="number"
            ></input>
          </div>
        </div>
        <div className="col m12 submit-btn">
          <div className="input-filed" id="submit-btn">
            <input
              className="btn-large waves-effect waves-light pink"
              type="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
export default SearchBox;
