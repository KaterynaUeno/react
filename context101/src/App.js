// import React, { useContext } from "react";
import "./App.css";
// import ThemeContext from "./contexts/themeContexts";
import img from "./assets/img.jpg";
import Signup from "./Components/Signup";

function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7">
          <img className="img-fluid w-100" src={img} alt=""></img>
        </div>
      </div>
    </div>
  );
  // const value = useContext(ThemeContext);
  // return <ThemeContext.Provider value={"State of app"}></ThemeContext.Provider>;
}

export default App;
