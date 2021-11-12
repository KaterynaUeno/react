import React, { Component } from "react";
import "./Login.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import openModal from "../../actions/openModal";
import Login from "./Login";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import regAction from "../../actions/regAction";

const MySwal = withReactContent(Swal);

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      lowerBtn: (
        <button
          type="button"
          onClick={this.showInput}
          className="sign-up-button"
        >
          Sign up with email
        </button>
      ),
    };
  }

  changeEmail = (e) => this.setState({ email: e.target.value });
  changePassword = (e) => this.setState({ password: e.target.value });

  showInput = () => {
    this.setState({
      lowerBtn: (
        <SignUpInputFields
          changeEmail={this.changeEmail}
          changePassword={this.changePassword}
        />
      ),
    });
  };
  submitLogin = async (e) => {
    e.preventDefault();
    // console.log(this.state.email);
    // console.log(this.state.password);
    const url = `${window.apiHost}/users/signup`;
    const data = {
      email: this.state.email,
      password: this.state.password,
    };
    const response = await axios.post(url, data);
    console.log(response.data.msg);
    const token = response.data.token;
    const urlToken = `${window.apiHost}/users/token-check`;
    // const responseToken = await axios.post(urlToken, { token });
    // console.log(responseToken.token);
    if (response.data.msg === "userExists") {
      MySwal.fire({
        title: " The email alredy exists",
        text: "The email is alredy registered",
        icon: "error",
      });
    } else if (response.data.msg === "invalidData") {
      MySwal.fire({
        title: "Invalid email/password",
        text: "Please enter valid email/password",
        icon: "error",
      });
    } else if (response.data.msg === "userAdded") {
      MySwal.fire({
        title: "User added",
        text: "User added",
        icon: "success",
      });
      this.props.regAction(response.data);
    }
  };
  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.submitLogin}>
          <button className="facebook-login">Connect With Facebook</button>
          <button className="google-login">Connect With Google</button>
          <div className="login-or center">
            <span>or</span>
            <div className="or-divider"></div>
          </div>
          {this.state.lowerBtn}
          <div className="divider"></div>
          <div>
            Already have an account?
            <span
              className="pointer"
              onClick={() => {
                this.props.openModal("open", <Login />);
              }}
            >
              Log in
            </span>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}
function mapDispatchToProps(dispatcher) {
  return bindActionCreators(
    {
      openModal: openModal,
      regAction: regAction,
    },
    dispatcher
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);

const SignUpInputFields = (props) => {
  return (
    <div className="sign-up-wrapper">
      <div className="col m12">
        <div className="input-field" id="email">
          <div className="form-labe">Email</div>
          <input type="text" placeholder="Email" onChange={props.changeEmail} />
        </div>
      </div>
      <div className="col m12">
        <div className="input-field" id="password">
          <div className="form-labe">Password</div>
          <input
            type="password"
            placeholder="Password"
            onChange={props.changePassword}
          />
        </div>
      </div>
      <div className="col m12">
        <button type="submit" className="btn pink">
          Sign up
        </button>
      </div>
    </div>
  );
};
