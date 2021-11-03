import React, { Component } from "react";
import { connect } from "react-redux";
import frozenUpdate from "../actions/frozenInvUpdate";
import { bindActionCreators } from "redux";

class FrozenDept extends Component {
  increment = (operator, index) => {
    // console.log(operator, index);
    this.props.frozenUpdate(operator, index);
  };
  render() {
    // console.log(this.props.meatData);
    const frozenInventory = this.props.frozenData.map((item, index) => {
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
        <h1>Frozen department</h1>
        <ul>{frozenInventory}</ul>
      </div>
    );
  }
}

// mapstattoprops takes 1 arg 'state' and that is rootreducer/store
function mapStateToProps(state) {
  return {
    frozenData: state.frozen,
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      frozenUpdate: frozenUpdate,
    },
    dispatch
  );
}
// export default FrozenDept;
export default connect(mapStateToProps, mapDispatchToProps)(FrozenDept);
