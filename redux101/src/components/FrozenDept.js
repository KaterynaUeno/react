import React, { Component } from "react";
import { connect } from "react-redux";

class FrozenDept extends Component {
  render() {
    console.log(this.props.frozenData);
    return (
      <div>
        <h1>Frozen department</h1>
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

// export default FrozenDept;
export default connect(mapStateToProps)(FrozenDept);
