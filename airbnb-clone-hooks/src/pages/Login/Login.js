import React, { useState } from "react";
import "./Login.css";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import openModal from "../../actions/openModal";
import SignUp from "./Signup";
import axios from "axios";
import { useDispatch } from "react-redux";
import regAction from "../../actions/regAction";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const MySwal = withReactContent(Swal);

function Login(props) {
  const dispatch = useDispatch();

  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");

  // changeEmail = (e) => this.setState({ email: e.target.value });
  // changePassword = (e) => this.setState({ password: e.target.value });

  const submitLogin = async (e) => {
    e.preventDefault();
    // console.log(this.state.email);
    // console.log(this.state.password);
    const url = `${window.apiHost}/users/login`;
    const data = {
      email: email,
      password: password,
    };
    const response = await axios.post(url, data);
    console.log(response.data.msg);
    const token = response.data.token;
    const urlToken = `${window.apiHost}/users/token-check`;
    const responseToken = await axios.post(urlToken, { token });
    // console.log(responseToken);
    if (response.data.msg === "badPass") {
      MySwal.fire({
        title: "Invalid password",
        text: "The password in invalid",
        icon: "error",
      });
    } else if (response.data.msg === "noEmail") {
      MySwal.fire({
        title: "Please enter an email",
        icon: "error",
      });
    } else if (response.data.msg === "loggedIn") {
      MySwal.fire({
        title: "Log in",
        text: " You are logged in",
        icon: "success",
      });
      // this.props.regAction(response.data);
      dispatch(regAction(response.data));
    }
  };
  return (
    <div className="login-form">
      <form onSubmit={submitLogin}>
        <button className="facebook-login">Connect With Facebook</button>
        <button className="google-login">Connect With Google</button>
        <div className="login-or center">
          <span>or</span>
          <div className="or-divider"></div>
        </div>
        <input
          onChange={(e) => changeEmail(e.target.value)}
          type="text"
          className="browser-default"
          placeholder="Email address"
          value={email}
        />
        <input
          onChange={(e) => changePassword(e.target.value)}
          type="password"
          className="browser-default"
          placeholder="Password"
          value={password}
        />
        <button className="sign-up-button">Login</button>
        <div className="divider"></div>
        <div>
          Don't have an account?
          <span
            className="pointer"
            onClick={() => dispatch(openModal("open", <SignUp />))}
          >
            Sign up
          </span>
        </div>
      </form>
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
//       regAction: regAction,
//     },
//     dispatcher
//   );
// }

export default Login;
