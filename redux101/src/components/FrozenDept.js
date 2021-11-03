import React, { Component } from "react";
import { connect } from "react-redux";

class FrozenDept extends Component {
  render() {
    // console.log(this.props.meatData);
    const frozenInventory = this.props.frozenData.map((item, index) => {
      return (
        <li key={index}>
          {item.food}: {item.quantity}
        </li>
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
    meatData: state.meat,
  };
}

// export default FrozenDept;
export default connect(mapStateToProps)(FrozenDept);
