import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import openModal from "../../actions/openModal";
import Login from "../../pages/Login/Login";
import Signup from "../../pages/Login/Signup";
import logoutAction from "../../actions/logoutAction";

function NavBar(props) {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email);
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    dispatch(openModal("closed", ""));
  }, [token]);

  let navColor = "transparent";
  if (props.location.pathname !== "/") {
    navColor = "pink";
  }
  return (
    <div className="container-fluid nav">
      <div className="row">
        <nav className={navColor}>
          <div className="nav-wrapper">
            <Link to="/" className="left">
              airbnb
            </Link>
            <ul id="nav-mobile" className="right">
              <li>
                <Link to="/">English</Link>
              </li>
              <li>
                <Link to="/">$</Link>
              </li>
              <li>
                <Link to="/">Become a host</Link>
              </li>
              <li>
                <Link to="/">Help</Link>
              </li>
              {email ? (
                <>
                  <li>Hello, {email}</li>
                  <li onClick={() => dispatch(logoutAction())}>Log out</li>
                </>
              ) : (
                <>
                  <li
                    className="login-signup"
                    onClick={() => dispatch(openModal("open", <Signup />))}
                  >
                    Sign up
                  </li>
                  <li
                    className="login-signup"
                    onClick={() => dispatch(openModal("open", <Login />))}
                  >
                    Log in{" "}
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     auth: state.auth,
//   };
// }

// function mapDispatchToProps(dispatcher) {
//   return bindActionCreators(
//     {
//       openModal: openModal,
//       logoutAction: logoutAction,
//     },
//     dispatcher
//   );
// }
// export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
export default NavBar;
