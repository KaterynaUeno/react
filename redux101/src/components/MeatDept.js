import React, { Component } from "react";
import { connect } from "react-redux";
import meatUpdate from "../actions/meatInvUpdate";
import { bindActionCreators } from "redux";

class MeatDept extends Component {
  increment = (operator, index) => {
    // console.log(operator, index);
    this.props.meatUpdate(operator, index);
  };
  render() {
    // console.log(this.props.meatData);
    const frozenInventory = this.props.meatData.map((item, index) => {
      return (
        <div key={index}>
          <li>
            {item.food}: {item.quantity}
          </li>
          <input
            type="button"
            onClick={() => {
              this.increment("+", index);
            }}
            value="+"
          />
          <input
            type="button"
            onClick={() => {
              this.increment("-", index);
            }}
            value="-"
          />
        </div>
      );
    });
    return (
      <div>
        <h1>Meat department</h1>
        <ul>{frozenInventory}</ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    meatData: state.meat,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      meatUpdate: meatUpdate,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(MeatDept);
